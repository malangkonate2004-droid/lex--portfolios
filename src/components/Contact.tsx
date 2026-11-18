import Section from "@/components/Section";
import { donneesPortfolio } from "@/data/content";
import { Mail, MapPin, Send } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/SocialIcons";

export default function Contact() {
  const { identite } = donneesPortfolio;

  return (
    <Section id="contact" variante="surface">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-fond)] p-8 sm:p-12 md:p-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-[var(--color-bleu)] uppercase">
            Échange &amp; Collaboration
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[var(--color-marine)] tracking-tight">
            Prendre contact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Pour toute question technique, échange autour d&apos;un projet ou opportunité
            de collaboration dans les domaines de la sécurité et des systèmes.
          </p>

          {/* Bouton d'action principal par Email */}
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${identite.email}?subject=${encodeURIComponent(identite.sujetEmailContact)}`}
              className="inline-flex items-center gap-2.5 rounded-xl bg-[var(--color-bleu)] px-8 py-4 text-base font-semibold text-white shadow-xs hover:bg-[var(--color-bleu-hover)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Envoyer un message</span>
              <Send className="h-4 w-4 ml-1 opacity-90" aria-hidden="true" />
            </a>
          </div>

          {/* Coordonnées & Liens */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {/* Email */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                Email direct
              </span>
              <a
                href={`mailto:${identite.email}?subject=${encodeURIComponent(identite.sujetEmailContact)}`}
                className="text-sm font-semibold text-[var(--color-marine)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-xs transition-colors"
              >
                {identite.email}
              </a>
            </div>

            {/* Localisation */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                Localisation
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-marine)]">
                <MapPin className="h-4 w-4 text-[var(--color-bleu)]" aria-hidden="true" />
                {identite.localisation}
              </span>
            </div>

            {/* Réseaux */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">
                Profils
              </span>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href={identite.liensSociaux.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-md transition-colors"
                  aria-label="Profil GitHub de Malang Konaté"
                >
                  <IconGithub className="h-5 w-5" />
                </a>
                <a
                  href={identite.liensSociaux.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-md transition-colors"
                  aria-label="Profil LinkedIn de Malang Konaté"
                >
                  <IconLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
