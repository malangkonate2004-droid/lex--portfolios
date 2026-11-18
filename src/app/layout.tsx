import type { Metadata } from "next";
import { donneesPortfolio } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${donneesPortfolio.identite.nomComplet} | Portfolio`,
  description: `${donneesPortfolio.identite.titrePrincipal} - ${donneesPortfolio.identite.sousTitre}`,
  metadataBase: new URL("https://malang-konate.vercel.app"),
  openGraph: {
    title: `${donneesPortfolio.identite.nomComplet} | Portfolio`,
    description: donneesPortfolio.identite.bioCourte,
    url: "https://malang-konate.vercel.app",
    siteName: donneesPortfolio.identite.nomComplet,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
