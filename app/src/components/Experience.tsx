import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { language, t } = useLanguage();
  const experiences = translations[language].experience.items;

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-8">
          <div>
            <p className="eyebrow mb-2">03 — {t("nav.experience")}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t("experience.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("experience.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="grid gap-5 rounded-3xl border border-border bg-card p-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    {/* Solo el puesto más reciente lleva el punto en acento. */}
                    <span
                      className={cn(
                        "h-2 w-2 shrink-0 rounded-full",
                        index === 0 ? "bg-primary" : "bg-border"
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-[12.5px]",
                        index === 0 ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 pl-[18px] font-mono text-[11.5px] text-muted-foreground">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {exp.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="mt-1 text-sm text-primary">{exp.company}</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <h4 className="mt-5 mb-2.5 font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                    {t("experience.responsibilities")}
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2 sm:gap-x-6">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
