import { NextResponse } from "next/server";
import { parseContactInput, validateContact } from "@/lib/contact";
import { getMailerConfig, sendContactEmail } from "@/lib/mailer";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16_000;

type ErrorCode = "bad_request" | "invalid" | "rate_limited" | "not_configured" | "send_failed";

function fail(code: ErrorCode, status: number, extra?: Record<string, unknown>, headers?: HeadersInit) {
  return NextResponse.json({ ok: false, error: code, ...extra }, { status, headers });
}

export async function POST(request: Request) {
  // 1. Origine : la requête doit venir de notre propre site.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return fail("bad_request", 403);
    } catch {
      return fail("bad_request", 403);
    }
  }

  // 2. Type et taille du corps.
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return fail("bad_request", 415);
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return fail("bad_request", 413);

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return fail("bad_request", 400);
  }

  // 3. Limitation de débit par IP (5 demandes / 10 minutes).
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnue";
  const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60_000 });
  if (!limit.ok) {
    return fail("rate_limited", 429, undefined, { "Retry-After": String(limit.retryAfterSeconds) });
  }

  // 4. Validation côté serveur (source de vérité).
  const values = parseContactInput(json);
  if (!values) return fail("bad_request", 400);

  // Champ piège rempli : on répond comme si tout allait bien, sans rien envoyer.
  if (values.website) return NextResponse.json({ ok: true });

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return fail("invalid", 422, { errors });

  // 5. Envoi réel. Pas de configuration : on le dit, on ne simule rien.
  const config = getMailerConfig();
  if (!config) return fail("not_configured", 503);

  try {
    await sendContactEmail(config, values);
  } catch (error) {
    console.error("[contact] échec de l'envoi", error);
    return fail("send_failed", 502);
  }

  return NextResponse.json({ ok: true });
}
