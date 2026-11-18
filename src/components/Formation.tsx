import Section from "@/components/Section";
import { donneesPortfolio } from "@/data/content";
import { GraduationCap, Calendar, School } from "lucide-react";

export default function Formation() {
  const { formation } = donneesPortfolio;

  return (
    <Section
      id="formation"
      surtitre="Parcours"
      titre="Formation &amp; Certifications"
      variante="fond"
    >
      <div className="relative border-l-2 border-[var(--color-border)] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {formation.map((item, index) => (
          <div key={index} className="relative group">
            {/* Puce timeline */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-bleu)] text-[var(--color-bleu)] shadow-2xs">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            </div>

            {/* Carte de formation */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:border-[var(--color-bleu)] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-marine)]">
                  {item.diplome}
                </h3>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-fond)] px-3 py-1 text-xs font-semibold text-[var(--color-bleu)]">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  <span>{item.periode}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-text-muted)] mb-3">
                <School className="h-4 w-4 text-[var(--color-bleu)]" aria-hidden="true" />
                <span>{item.etablissement}</span>
              </div>

              {item.description && (
                <p className="text-xs sm:text-sm text-[var(--color-text-main)] leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
