import Link from "next/link";
import Section from "@/components/Section";
import { donneesPortfolio } from "@/data/content";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function Projets() {
  const { projets } = donneesPortfolio;

  return (
    <Section
      id="projets"
      surtitre="Réalisations"
      titre="Projets sélectionnés"
      description="Sélection de réalisations techniques couvrant la sécurité applicative, la cryptographie, les infrastructures systèmes et le développement fullstack."
      variante="fond"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet) => (
          <div
            key={projet.slug}
            className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-md hover:border-[var(--color-bleu)] transition-all"
          >
            <div>
              {/* Contexte et période */}
              <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] mb-3">
                <span className="font-semibold text-[var(--color-bleu)] uppercase tracking-wider">
                  {projet.contexte}
                </span>
                <span>{projet.periode}</span>
              </div>

              {/* Titre */}
              <h3 className="text-lg font-bold text-[var(--color-marine)] group-hover:text-[var(--color-bleu)] transition-colors">
                <Link
                  href={`/projets/${projet.slug}`}
                  className="flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-xs"
                >
                  <span>{projet.titre}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all shrink-0" />
                </Link>
              </h3>

              {/* Sous-titre */}
              <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)]">
                {projet.sousTitre}
              </p>

              {/* Description courte */}
              <p className="mt-4 text-sm text-[var(--color-text-main)] leading-relaxed">
                {projet.descriptionCourte}
              </p>

              {/* Points clés */}
              <ul className="mt-4 space-y-1.5 text-xs text-[var(--color-text-muted)]">
                {projet.pointsCles.slice(0, 2).map((point, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-[var(--color-bleu)] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies et bouton détail */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {projet.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--color-fond)] border border-[var(--color-border)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
                {projet.technologies.length > 4 && (
                  <span className="rounded-md bg-[var(--color-fond)] px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                    +{projet.technologies.length - 4}
                  </span>
                )}
              </div>

              <Link
                href={`/projets/${projet.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-bleu)] hover:underline focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-xs"
              >
                <span>En savoir plus sur ce projet</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
