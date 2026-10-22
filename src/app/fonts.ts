import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Polices auto-hébergées (aucune requête vers Google au chargement) :
 * préchargées par Next, avec métriques de repli pour limiter le CLS.
 */
export const display = localFont({
  src: "../fonts/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-display",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

export const sans = GeistSans; // expose --font-geist-sans
export const mono = GeistMono; // expose --font-geist-mono
