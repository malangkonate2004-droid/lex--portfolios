import Link from "next/link";
import { donneesPortfolio } from "@/data/content";
import { ArrowRight, Download, MapPin, Mail, ShieldCheck } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/SocialIcons";

export default function Hero() {
  const { identite } = donneesPortfolio;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-28 bg-[var(--color-fond)] transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Contenu textuel */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge de statut académique et localisation */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1 text-xs font-semibold text-[var(--color-text-muted)] mb-6 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-[var(--color-bleu)]" aria-hidden="true" />
              <span>Licence 3 Cybersécurité · ISI Dakar</span>
              <span className="text-[var(--color-border)]" aria-hidden="true">|</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[var(--color-bleu)]" aria-hidden="true" />
                {identite.localisation}
              </span>
            </div>

            {/* Nom */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-marine)] leading-tight">
              {identite.prenom}{" "}
              <span className="text-base sm:text-xl font-normal text-[var(--color-text-muted)] block sm:inline">
                ({identite.surnom})
              </span>{" "}
              <span>{identite.nom}</span>
            </h1>

            {/* Titre professionnel exact */}
            <p className="mt-3 text-lg sm:text-xl font-bold text-[var(--color-bleu)]">
              Étudiant en Cybersécurité · Systèmes, Réseaux &amp; Développement
            </p>

            {/* Phrase d'accroche factuelle */}
            <p className="mt-4 max-w-2xl text-base text-[var(--color-text-main)] leading-relaxed">
              Je conçois et développe des outils d&apos;analyse de sécurité (détection de secrets, cryptographie RSA/ECC),
              j&apos;administre des environnements Windows Server et Linux, et je déploie des architectures réseaux
              sécurisées (CCNA).
            </p>

            {/* Deux boutons d'action principaux */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="#projets"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-bleu)] px-6 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[var(--color-bleu-hover)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href={identite.cvPath}
                download="CV_Malang_Konate.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--color-marine)] shadow-2xs hover:border-[var(--color-bleu)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-marine)] transition-colors"
              >
                <Download className="h-4 w-4 text-[var(--color-bleu)]" aria-hidden="true" />
                <span>Télécharger mon CV (PDF)</span>
              </a>
            </div>

            {/* Liens de contact directs */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-center md:justify-start gap-5">
              <a
                href={`mailto:${identite.email}?subject=${encodeURIComponent(identite.sujetEmailContact)}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-bleu)] transition-colors"
                aria-label={`Envoyer un email à ${identite.email}`}
              >
                <Mail className="h-4 w-4 text-[var(--color-bleu)]" aria-hidden="true" />
                <span>{identite.email}</span>
              </a>

              <a
                href={identite.liensSociaux.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-bleu)] transition-colors"
                aria-label="Profil GitHub"
              >
                <IconGithub className="h-4 w-4 text-[var(--color-bleu)]" />
                <span>GitHub</span>
              </a>

              <a
                href={identite.liensSociaux.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-bleu)] transition-colors"
                aria-label="Profil LinkedIn"
              >
                <IconLinkedin className="h-4 w-4 text-[var(--color-bleu)]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Avatar visuel typographique */}
          <div className="relative shrink-0">
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-3xl border-4 border-[var(--color-surface)] bg-gradient-to-tr from-[#1F3864] to-[#2E75B6] shadow-xl flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xs mb-2">
                <ShieldCheck className="h-12 w-12 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold tracking-tight">MNK</span>
              <span className="text-xs text-blue-100 font-mono mt-1">
                Sécurité &amp; Réseaux
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
