"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { donneesPortfolio } from "@/data/content";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [estOuvert, setEstOuvert] = useState(false);

  // Fermer le menu mobile lors de l'appui sur la touche Échap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && estOuvert) {
        setEstOuvert(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [estOuvert]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Logo / Nom accessible */}
        <Link
          href="/"
          className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-marine)] hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-md"
        >
          {donneesPortfolio.identite.prenom}{" "}
          <span className="text-[var(--color-bleu)]">{donneesPortfolio.identite.nom}</span>
        </Link>

        {/* Navigation Desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-6">
          {donneesPortfolio.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-md px-1 py-0.5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={donneesPortfolio.identite.cvPath}
            download="CV_Malang_Konate.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-marine)] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[var(--color-marine-hover)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-marine)] transition-colors"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>CV</span>
          </a>
        </nav>

        {/* Bouton Hamburger Mobile Accessible */}
        <button
          type="button"
          onClick={() => setEstOuvert(!estOuvert)}
          aria-expanded={estOuvert}
          aria-controls="menu-mobile"
          aria-label={estOuvert ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          className="inline-flex items-center justify-center p-2 rounded-lg text-[var(--color-text-main)] md:hidden hover:bg-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
        >
          {estOuvert ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu Déroulant Mobile Accessible */}
      {estOuvert && (
        <div
          id="menu-mobile"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 md:hidden shadow-lg"
        >
          <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
            {donneesPortfolio.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setEstOuvert(false)}
                className="text-base font-medium text-[var(--color-text-main)] hover:text-[var(--color-bleu)] hover:bg-[var(--color-fond)] px-3 py-2 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-[var(--color-border)]">
              <a
                href={donneesPortfolio.identite.cvPath}
                download="CV_Malang_Konate.pdf"
                onClick={() => setEstOuvert(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--color-marine)] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-marine-hover)] transition-colors"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Télécharger mon CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
