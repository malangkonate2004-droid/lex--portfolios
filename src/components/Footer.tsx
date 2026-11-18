import Link from "next/link";
import { donneesPortfolio } from "@/data/content";

export default function Footer() {
  const anneeCourante = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--color-text-muted)]">
        <div>
          <p className="font-medium">
            © {anneeCourante} {donneesPortfolio.identite.nomComplet}. Tous droits réservés.
          </p>
        </div>

        <nav aria-label="Navigation pied de page" className="flex flex-wrap items-center gap-6">
          {donneesPortfolio.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-xs py-0.5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={donneesPortfolio.identite.cvPath}
            download="CV_Malang_Konate.pdf"
            className="hover:text-[var(--color-bleu)] font-semibold transition-colors"
          >
            Télécharger CV (PDF)
          </a>
        </nav>
      </div>
    </footer>
  );
}
