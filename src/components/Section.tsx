import React from "react";

interface SectionProps {
  id?: string;
  surtitre?: string;
  titre?: string;
  description?: string;
  variante?: "fond" | "surface";
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  surtitre,
  titre,
  description,
  variante = "fond",
  className = "",
  children,
}: SectionProps) {
  const bgClass =
    variante === "surface"
      ? "bg-[var(--color-surface)] border-y border-[var(--color-border)]"
      : "bg-[var(--color-fond)]";

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 md:py-24 transition-colors ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(surtitre || titre || description) && (
          <div className="max-w-2xl mb-12 sm:mb-16">
            {surtitre && (
              <p className="text-xs font-bold tracking-widest text-[var(--color-bleu)] uppercase">
                {surtitre}
              </p>
            )}
            {titre && (
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-marine)] tracking-tight">
                {titre}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
