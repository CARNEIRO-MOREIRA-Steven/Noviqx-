import "server-only";
import { labelOf, type ContactValues } from "@/lib/contact";

type MailerConfig = { apiKey: string; to: string; from: string };

/** Lit la configuration d'envoi. Retourne null si elle est incomplète. */
export function getMailerConfig(): MailerConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from) return null;
  return { apiKey, to, from };
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Supprime les retours à la ligne pour éviter l'injection dans les en-têtes/sujets. */
const oneLine = (s: string): string => s.replace(/[\r\n]+/g, " ").trim();

export async function sendContactEmail(config: MailerConfig, data: ContactValues): Promise<void> {
  const rows: Array<[string, string]> = [
    ["Nom", data.nom.trim()],
    ["E-mail", data.email.trim()],
    ["Entreprise", data.entreprise.trim() || "Non renseignée"],
    ["Type de projet", labelOf.type(data.type)],
    ["Budget estimé", labelOf.budget(data.budget)],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">Nouvelle demande depuis noviqx.fr</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(([k, v]) => `<tr><td style="color:#666">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Besoin</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message.trim())}</p>
    </div>`;

  const text = [...rows.map(([k, v]) => `${k} : ${v}`), "", data.message.trim()].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      reply_to: data.email.trim(),
      subject: `Demande de devis : ${oneLine(data.nom)} (${labelOf.type(data.type)})`,
      html,
      text,
    }),
    // Évite de bloquer la requête si le fournisseur ne répond pas.
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Resend a répondu ${response.status}`);
  }
}
