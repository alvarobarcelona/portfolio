import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardDate,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Calendar, ExternalLink } from "lucide-react";
import { use } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
      github: "https://github.com/alvarobarcelona/portfolio",
      live: "#",
      date: "Last update: 10/01/2026"
    },
    {
      title: "Moodle Plugin Development",
      description:
        "Custom plugins and themes for Moodle LMS, including advanced features for building and trainings web Site of VW Finalcial Services(Trainingsportal) and bug fixes for existing modules.",
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
    },
    {
      title: "Web Application / Urlaubsplaner",
      description:
        "Full-stack web application with frontend and backend. Includes user authentication, data management, and responsive UI.",
      technologies: ["PHP", "JS", "Tailwind CSS", "MySQL", "HTML"],
      github: "https://github.com/alvarobarcelona/urlaubsplaner",
      date: "Last update: 10/06/2025"
    },
    {
      title: "StarWars explorer",
      description:
        "Project with Angular using API queries to receive certain data. Completed during formation",
      technologies: ["Angular", "TypeScript", "CSS", "HTML"],
      github: "https://github.com/alvarobarcelona/starWarsExplorer",
      date: "Last update: 10/05/2025"
    },
    {
      title: "Family Planner",
      description:
        "Task and event log based on Google Calendar. Customizing utilities for daily use and offering a clear and fast overview.",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "PostgreSQL",
      ],
      github: "https://github.com/alvarobarcelona/family-planner",
      date: "Last update: 06/01/2026"
    },
    {
      title: "Padel Tournaments",
      description:
        " Application created to organize small American and Mexican-style tournaments. Designed for use on mobile phones but also on the web. Local storage is local storage in the browser, without a database. If necessary, a database could be created.Totally practical and currently in use for events with friends.",
      technologies: [
        "JavaScript",
        "Tailwind",
        "HTML",
        "CSS",

      ],
      github: "https://github.com/alvarobarcelona/Padel-Tournaments",
      date: "Last update: 05/01/2026"
    },
    {
      title: "Web Aloha Delta",
      description:
        "Full-stack vacation rental platform for my apartment. Features a custom booking engine with real-time availability, an admin dashboard for reservation management, automated email notifications via Resend, and an online guest check-in system.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL, Cron (Vercel)",
        "Resend API"
      ],
      github: "https://github.com/alvarobarcelona/Web-AlohaDelta",
      live: "https://www.apartamentoalohadelta.com/",
      date: "Last update: 10/01/2026"
    },
    {
      title: "PadelUp",
      description:
        "Social platform for padel players that collects match statistics and suggests matches between players of the same level once a few results have been entered. Real-time chat and a system for verifying results between teams. Includes gamification with achievements, friend management, and different rankings to reach the top with your matches. Available in three languages: English, Spanish, and German.",
      technologies: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Supabase"
      ],
      github: "https://github.com/alvarobarcelona/PadelUp",
      live: "https://padel-up-nine.vercel.app/",
      date: "Last update: 28/12/2025"

    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 hover:bg-card transition-colors flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code / Readme
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
                <CardDate>{project.date}</CardDate>
              </Card>
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
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
