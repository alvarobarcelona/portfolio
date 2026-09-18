import { Code2, Briefcase, Brain, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function About() {
  const { t } = useLanguage();

  // El orden importa: define cómo se reparten las celdas del bento.
  const highlights = [
    {
      icon: Briefcase,
      title: t("about.highlights.business.title"),
      description: t("about.highlights.business.desc"),
      className: "md:col-span-2",
    },
    {
      icon: Brain,
      title: t("about.highlights.ai.title"),
      description: t("about.highlights.ai.desc"),
    },
    {
      icon: Rocket,
      title: t("about.highlights.agile.title"),
      description: t("about.highlights.agile.desc"),
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <p className="eyebrow mb-2">01 — {t("nav.about")}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-2 text-muted-foreground">{t("about.subtitle")}</p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3.5 rounded-3xl border border-border bg-card p-6 md:col-span-2 lg:row-span-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Code2 className="h-[19px] w-[19px] text-primary" />
              </span>
              <h3 className="text-xl font-semibold">
                {t("about.highlights.fullstack.title")}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                {t("about.p1")}
              </p>
              <p className="mt-auto text-[14.5px] leading-relaxed text-muted-foreground">
                {t("about.highlights.fullstack.desc")}
              </p>
            </div>

            {highlights.map(({ icon: Icon, title, description, className }) => (
              <div
                key={title}
                className={cn(
                  "flex flex-col gap-2.5 rounded-3xl border border-border bg-card p-5",
                  className
                )}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-[17px] w-[17px] text-primary" />
                </span>
                <h3 className="text-[17px] font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
