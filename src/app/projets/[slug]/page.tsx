import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { donneesPortfolio } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Calendar, FolderGit2, ExternalLink } from "lucide-react";
import { IconGithub } from "@/components/SocialIcons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génération statique des chemins pour tous les projets
export async function generateStaticParams() {
  return donneesPortfolio.projets.map((projet) => ({
    slug: projet.slug,
  }));
}

// Génération dynamique des métadonnées SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projet = donneesPortfolio.projets.find((p) => p.slug === slug);

  if (!projet) {
    return {
      title: "Projet non trouvé | Portfolio Malang Konaté",
    };
  }

  return {
    title: `${projet.titre} | Projets Malang Konaté`,
    description: projet.descriptionCourte,
  };
}

export default async function PageDetailProjet({ params }: PageProps) {
  const { slug } = await params;
  const projet = donneesPortfolio.projets.find((p) => p.slug === slug);

  if (!projet) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--color-fond)] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Bouton retour */}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-bleu)] hover:underline focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] rounded-xs mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Retour à la liste des projets</span>
          </Link>

          {/* En-tête du projet */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 shadow-2xs mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-bleu)] uppercase tracking-wider mb-3">
              <span className="rounded-md bg-[var(--color-fond)] px-2.5 py-1">
                {projet.contexte}
              </span>
              <span className="inline-flex items-center gap-1 text-[var(--color-text-muted)]">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {projet.periode}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-marine)] tracking-tight">
              {projet.titre}
            </h1>

            <p className="mt-2 text-base sm:text-lg font-medium text-[var(--color-text-muted)]">
              {projet.sousTitre}
            </p>

            {/* Liens de démo ou dépôt */}
            {(projet.lienDemo || projet.lienGithub) && (
              <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-[var(--color-border)]">
                {projet.lienGithub && (
                  <a
                    href={projet.lienGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-marine)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-marine-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-marine)] transition-colors"
                  >
                    <IconGithub className="h-4 w-4" />
                    <span>Consulter le code source</span>
                  </a>
                )}
                {projet.lienDemo && (
                  <a
                    href={projet.lienDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text-main)] hover:border-[var(--color-bleu)] hover:text-[var(--color-bleu)] focus-visible:ring-2 focus-visible:ring-[var(--color-bleu)] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Voir la démonstration</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Description et architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne principale : description et points clés */}
            <div className="md:col-span-2 space-y-8">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs">
                <h2 className="text-lg font-bold text-[var(--color-marine)] mb-4">
                  Présentation détaillée
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-main)] leading-relaxed">
                  {projet.descriptionComplete.map((paragraphe, i) => (
                    <p key={i}>{paragraphe}</p>
                  ))}
                </div>
              </div>

              {/* Points clés et résultats */}
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs">
                <h2 className="text-lg font-bold text-[var(--color-marine)] mb-4">
                  Points clés &amp; Réalisations
                </h2>
                <ul className="space-y-3 text-sm text-[var(--color-text-main)]">
                  {projet.pointsCles.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[var(--color-bleu)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne latérale : Stack technique */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs">
                <div className="flex items-center gap-2 text-[var(--color-marine)] font-bold mb-4">
                  <FolderGit2 className="h-5 w-5 text-[var(--color-bleu)]" aria-hidden="true" />
                  <h3>Technologies employées</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[var(--color-fond)] border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-text-main)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
