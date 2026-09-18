import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github, Lock, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

/**
 * El id debe existir en projects.items de los tres idiomas: si se escribe mal
 * o se añade un proyecto sin su traducción, falla el build en vez de romperse
 * en tiempo de ejecución.
 */
type ProjectId = keyof (typeof translations)["en"]["projects"]["items"];

type ProjectMeta = {
  id: ProjectId;
  technologies: string[];
  github?: string;
  live?: string;
  isPrivate: boolean;
  /** Destaca el proyecto con una estrella junto al título. */
  isFeatured?: boolean;
};

export default function Projects() {
  const { language, t } = useLanguage();

  const projectMetadata: ProjectMeta[] = [
    {
      id: 'Website_Frau_Ene',
      technologies: ["Next.js 16 + React 19", "TypeScript 5", "Tailwind CSS v4", "Vite", "Supabase", "Resend", "Stripe", "Vercel", "Zod"],
      github: "https://github.com/alvarobarcelona/web_frau_e-e",
      live: "https://www.frauene.com",
      isPrivate: true,
    },
    {
      id: 'padelUp',
      isFeatured: true,
      technologies: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Supabase",
        "Google AI Studio",
        "Resend",

      ],
      github: "https://github.com/alvarobarcelona/PadelUp",
      live: "https://www.padelupcommunity.com",
      isPrivate: true,
    },
    {
      id: 'aloha',
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL, Cron (Vercel)",
        "Resend API"
      ],
      github: "https://github.com/alvarobarcelona/Web-AlohaDelta",
      live: "https://www.apartamentoalohadelta.com/",
      isPrivate: true,
    },
    {
      id: 'portfolio',
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/alvarobarcelona/portfolio",
      live: "/",
      isPrivate: false,
    },
    {
      id: 'moodle',
      technologies: [
        "PHP",
        "MySQL",
        "JS",
        "CSS/SCSS",
        "Laravel",
        "Twig",
        "HTML",
      ],
      live: "https://www.training.vwfsag.de/mod/ichome/",
      isPrivate: true,
    },
    {
      id: 'urlaubsplaner',
      technologies: ["PHP", "JS", "Tailwind CSS", "MySQL", "HTML"],
      github: "https://github.com/alvarobarcelona/urlaubsplaner",
      isPrivate: false,
    },
    {
      id: 'starWars',
      technologies: ["Angular", "TypeScript", "CSS", "HTML"],
      github: "https://github.com/alvarobarcelona/starWarsExplorer",
      isPrivate: false,
    },
    {
      id: 'familyPlanner',
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "PostgreSQL",
      ],
      github: "https://github.com/alvarobarcelona/family-planner",
      live: "https://family-planner-tau.vercel.app/",
      isPrivate: false,
    },
    {
      id: 'padelTournaments',
      technologies: [
        "JavaScript",
        "Tailwind",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/alvarobarcelona/Padel-Tournaments",
      isPrivate: true,
    },


  ];

  const projects = projectMetadata.map((meta) => {
    const translatedItem = translations[language].projects.items[meta.id];
    return {
      ...meta,
      title: translatedItem.title,
      description: translatedItem.description,
    };
  });

  // Enlaces internos (el propio portfolio es "/") no deben abrir pestaña.
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">04 — {t("nav.projects")}</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                {t("projects.title")}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("projects.subtitle")}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <Button variant="outline" asChild className="rounded-full px-5">
                <a
                  href="https://github.com/alvarobarcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t("projects.viewGitHub")}
                </a>
              </Button>

              {/* Leyenda: sin esto la estrella de la tarjeta no significa nada
                  para quien no la haya puesto. */}
              <span className="flex items-center gap-2 font-mono text-[11.5px] text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                = {t("projects.featured")}
              </span>
            </div>
          </div>

          <div className="grid gap-3.5 lg:grid-cols-2">
            {projects.map((project, index) => {
              // El destino principal de la tarjeta: la web en vivo si la hay,
              // y si no el repositorio, siempre que no sea privado.
              const primaryHref =
                project.live ?? (project.isPrivate ? undefined : project.github);

              return (
                <SpotlightCard
                  key={project.id}
                  className="flex flex-col gap-3.5 rounded-3xl p-6"
                  spotlightColor="rgba(79, 217, 196, 0.12)"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1.5 font-mono text-[11px] text-muted-foreground">
                        {String(index + 1).padStart(3, "0")}
                      </p>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        {project.isFeatured && (
                          <Star
                            role="img"
                            aria-label={t("projects.featured")}
                            className="h-5 w-5 shrink-0 fill-primary text-primary"
                          >
                            <title>{t("projects.featured")}</title>
                          </Star>
                        )}
                      </div>
                    </div>

                    {primaryHref && (
                      <a
                        href={primaryHref}
                        target={isExternal(primaryHref) ? "_blank" : undefined}
                        rel={
                          isExternal(primaryHref)
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={`${project.title} — ${t("projects.live")}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="rounded-lg bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target={isExternal(project.live) ? "_blank" : undefined}
                        rel={
                          isExternal(project.live)
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-1.5 font-mono text-[11.5px] text-primary transition-opacity hover:opacity-80"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t("projects.live")}
                      </a>
                    )}

                    {project.isPrivate ? (
                      <span className="flex items-center gap-1.5 font-mono text-[11.5px] text-muted-foreground">
                        <Lock className="h-3.5 w-3.5" />
                        {t("projects.private")}
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-3.5 w-3.5" />
                        {t("projects.code")}
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
