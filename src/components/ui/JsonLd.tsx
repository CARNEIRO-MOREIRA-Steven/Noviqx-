type Props = { data: Record<string, unknown> };

/** Injecte des données structurées JSON-LD (rendues côté serveur, donc visibles des moteurs). */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // Le « < » est échappé pour empêcher toute fermeture prématurée de la balise <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
