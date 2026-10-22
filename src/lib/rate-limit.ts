/**
 * Limiteur de débit en mémoire (fenêtre fixe).
 *
 * Limite connue : sur un hébergement serverless, chaque instance a sa propre mémoire,
 * la protection est donc « au mieux ». Pour un trafic plus important, la remplacer par
 * un stockage partagé (Upstash Redis, Vercel KV, etc.) en gardant la même signature.
 */
type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  // Nettoyage opportuniste pour éviter une croissance infinie.
  if (store.size > 500) {
    for (const [k, v] of store) if (v.resetAt <= now) store.delete(k);
  }

  const entry = store.get(key);
  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSeconds: 0 };
  }
  entry.count += 1;
  if (entry.count > limit) {
    return { ok: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfterSeconds: 0 };
}
