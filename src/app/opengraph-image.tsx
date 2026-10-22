import { ImageResponse } from "next/og";

export const alt = "NOVIQX | Solutions digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage générée au build : aucun fichier à maintenir. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#111111",
          color: "#F5F5F0",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -2 }}>
          NOVIQ<span style={{ color: "#C6FF34" }}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
            Un site web à la hauteur de vos&nbsp;<span style={{ color: "#C6FF34" }}>ambitions.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#A8A8A0" }}>
            Sites vitrines · E-commerce · Sur mesure · Maintenance
          </div>
        </div>
      </div>
    ),
    size,
  );
}
