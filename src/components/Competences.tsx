import Section from "@/components/Section";
import { donneesPortfolio } from "@/data/content";
import { ShieldCheck, Network, Server, Code2 } from "lucide-react";

export default function Competences() {
  const { competences } = donneesPortfolio;

  const obtenirIcone = (nomIcone: string) => {
    switch (nomIcone) {
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-[var(--color-bleu)]" aria-hidden="true" />;
      case "Network":
        return <Network className="h-6 w-6 text-[var(--color-bleu)]" aria-hidden="true" />;
      case "Server":
        return <Server className="h-6 w-6 text-[var(--color-bleu)]" aria-hidden="true" />;
      case "Code2":
        return <Code2 className="h-6 w-6 text-[var(--color-bleu)]" aria-hidden="true" />;
      default:
        return <Code2 className="h-6 w-6 text-[var(--color-bleu)]" aria-hidden="true" />;
    }
  };

  return (
    <Section
      id="competences"
      surtitre="Savoir-faire"
      titre="Compétences techniques"
      description="Un spectre technique articulé autour de la cybersécurité défensive, des infrastructures d'entreprise et de l'ingénierie logicielle."
      variante="surface"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {competences.map((cat) => (
          <div
            key={cat.titre}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-fond)] p-6 flex flex-col justify-between"
          >
            <div>
              {/* Icône et titre */}
              <div className="inline-flex rounded-xl bg-[var(--color-surface)] p-3 border border-[var(--color-border)] mb-4 shadow-2xs">
                {obtenirIcone(cat.icone)}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-marine)] mb-4">
                {cat.titre}
              </h3>

              {/* Badges de compétences */}
              <div className="flex flex-wrap gap-2">
                {cat.competences.map((comp) => (
                  <span
                    key={comp}
                    className="rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text-main)] shadow-2xs"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
