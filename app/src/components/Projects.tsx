import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardDate,
} from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";
import { Github, Calendar, ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Projects() {
  const { language, t } = useLanguage();

  const projectMetadata = [
    {
      id: 'padelUp',
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
      live: "https://padel-up-nine.vercel.app/",
      isPrivate: false,
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
      live: "#",
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
    const translatedItem = translations[language].projects.items[meta.id as keyof typeof translations['en']['projects']['items']];
    return {
      ...meta,
      title: translatedItem.title,
      description: translatedItem.description,
    };
  });

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t('projects.title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="border-border/50 bg-card/50 hover:bg-card transition-colors flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex flex-wrap mt-4 gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.isPrivate ? (
                        <Button variant="outline" size="sm" disabled>
                          <Lock className="h-4 w-4 mr-2" />
                          {t('projects.private')}
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            {t('projects.code')}
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t('projects.live')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/alvarobarcelona"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                {t('projects.viewGitHub')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
