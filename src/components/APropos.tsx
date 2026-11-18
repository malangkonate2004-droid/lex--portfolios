import Section from "@/components/Section";
import { donneesPortfolio } from "@/data/content";
import { Globe, Mail, CheckCircle2 } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/SocialIcons";

export default function APropos() {
  const { identite, langues } = donneesPortfolio;

  return (
    <Section
      id="a-propos"
      surtitre="Présentation"
      titre="À propos de moi"
      variante="surface"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Colonne gauche : Description détaillée */}
        <div className="lg:col-span-2 space-y-5 text-base text-[var(--color-text-main)] leading-relaxed">
          <p>
            Actuellement en 3ème année de Licence en Cybersécurité à l’Institut Supérieur
            d’Informatique (ISI) de Dakar, je me concentre sur la sécurité applicative,
            l’analyse de vulnérabilités et l’administration d’infrastructures critiques.
          </p>
          <p className="text-[var(--color-text-muted)]">
            Mon parcours technique combine à la fois l’ingénierie logicielle (conception d’outils
            d’analyse de code comme <strong>LeakSentinel</strong>, implémentation d’algorithmes
            cryptographiques en Java) et l’ingénierie d’infrastructure (déploiement automatisé
            Windows Server via WDS/MDT, configuration de réseaux d’entreprise certifiés CCNA,
            supervision défensive sous Wazuh et pfSense).
          </p>
          <p className="text-[var(--color-text-muted)]">
            J’accorde une importance primordiale à la rigueur de validation (automatisation de suites
            de tests, segmentation réseau stricte, conformité aux standards cryptographiques).
          </p>

          {/* Liens de profil */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={identite.liensSociaux.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-fond)] px-4 py-2 text-sm font-semibold text-[var(--color-text-main)] hover:border-[var(--color-bleu)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
            >
              <IconGithub className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={identite.liensSociaux.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-fond)] px-4 py-2 text-sm font-semibold text-[var(--color-text-main)] hover:border-[var(--color-bleu)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
            >
              <IconLinkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${identite.email}?subject=${encodeURIComponent(identite.sujetEmailContact)}`}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-fond)] px-4 py-2 text-sm font-semibold text-[var(--color-text-main)] hover:border-[var(--color-bleu)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>{identite.email}</span>
            </a>
          </div>
        </div>

        {/* Colonne droite : Langues et Atouts */}
        <div className="space-y-6">
          {/* Boîte Langues */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-fond)] p-6">
            <div className="flex items-center gap-2 mb-4 text-[var(--color-marine)] font-bold">
              <Globe className="h-5 w-5 text-[var(--color-bleu)]" />
              <h3>Langues maîtrisées</h3>
            </div>
            <ul className="space-y-3">
              {langues.map((langue) => (
                <li
                  key={langue.nom}
                  className="flex items-center justify-between text-sm border-b border-[var(--color-border)] pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-[var(--color-text-main)]">{langue.nom}</span>
                  <span className="rounded-md bg-[var(--color-surface)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]">
                    {langue.niveau}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Boîte Points forts */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-fond)] p-6">
            <h3 className="font-bold text-[var(--color-marine)] mb-3">Rigueur &amp; Méthode</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-bleu)] shrink-0 mt-0.5" />
                <span>Validation automatisée (tests unitaires &amp; intégration)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-bleu)] shrink-0 mt-0.5" />
                <span>Sécurité défensive &amp; analyse de code sécurisé</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-bleu)] shrink-0 mt-0.5" />
                <span>Architecture et routage réseau d&apos;entreprise (CCNA)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
