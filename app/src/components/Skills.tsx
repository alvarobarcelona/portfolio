import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Server, Wrench, Languages, Layout, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * El nivel se guarda como clave estable, no como texto traducido.
 * Antes se comparaba `skill.level` con `t('skills.legend.advanced')`, así que
 * retocar una traducción rompía el color en silencio y sin fallar el build.
 */
type Level = "advanced" | "intermediate" | "working";

const LEVEL_SEGMENTS: Record<Level, number> = {
  advanced: 3,
  intermediate: 2,
  working: 1,
};

const LEVEL_LABEL_KEY: Record<Level, string> = {
  advanced: "skills.legend.advanced",
  intermediate: "skills.legend.intermediate",
  working: "skills.legend.working",
};

type Skill = { name: string; level: Level };

function LevelBar({ level }: { level: Level }) {
  const filled = LEVEL_SEGMENTS[level];

  return (
    <span className="flex shrink-0 gap-[2px]">
      {[0, 1, 2].map(index => (
        <span
          key={index}
          className={cn(
            "h-1 w-[9px] rounded-full",
            index < filled ? "bg-primary" : "bg-border"
          )}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories: {
    title: string;
    icon: LucideIcon;
    skills: Skill[];
  }[] = [
    {
      title: t("skills.categories.frontend"),
      icon: Layout,
      skills: [
        { name: "HTML5", level: "advanced" },
        { name: "CSS3 / SCSS", level: "advanced" },
        { name: "JavaScript", level: "intermediate" },
        { name: "React", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Tailwind CSS", level: "intermediate" },
      ],
    },
    {
      title: t("skills.categories.backend"),
      icon: Server,
      skills: [
        { name: "PHP", level: "advanced" },
        { name: "MySQL", level: "advanced" },
        { name: "PostgreSQL", level: "intermediate" },
        { name: "Node.js", level: "working" },
      ],
    },
    {
      title: t("skills.categories.ai"),
      icon: Cpu,
      skills: [
        { name: "AI API Integration", level: "intermediate" },
        { name: "Chat GPT", level: "intermediate" },
        { name: "Gemini Pro", level: "intermediate" },
        { name: "Google AI Studio", level: "working" },
        { name: "Claude", level: "working" },
      ],
    },
    {
      title: t("skills.categories.languages"),
      icon: Languages,
      skills: [
        { name: "Spanish", level: "advanced" },
        { name: "Catalan", level: "advanced" },
        { name: "German", level: "intermediate" },
        { name: "English", level: "intermediate" },
      ],
    },
  ];

  // Herramientas va aparte: son 17 y como tarjeta estrecha se convierte en
  // una columna interminable. Ocupa el ancho completo con chips.
  const tools: Skill[] = [
    { name: "Jira", level: "advanced" },
    { name: "Moodle Development", level: "advanced" },
    { name: "Agile Methodologies", level: "advanced" },
    { name: "Git", level: "intermediate" },
    { name: "Docker", level: "intermediate" },
    { name: "REST APIs", level: "intermediate" },
    { name: "Supabase", level: "intermediate" },
    { name: "Vercel", level: "intermediate" },
    { name: "Visual Studio Code", level: "intermediate" },
    { name: "Microsoft Teams", level: "intermediate" },
    { name: "Slack", level: "intermediate" },
    { name: "Antigravity", level: "intermediate" },
    { name: "GitHub Actions", level: "working" },
    { name: "Neon", level: "working" },
    { name: "Resend API", level: "working" },
    { name: "Render", level: "working" },
    { name: "Cron Jobs", level: "working" },
  ];

  const legend: Level[] = ["advanced", "intermediate", "working"];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">02 — {t("nav.skills")}</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                {t("skills.title")}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("skills.subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {legend.map(level => (
                <span
                  key={level}
                  className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground"
                >
                  <LevelBar level={level} />
                  {t(LEVEL_LABEL_KEY[level])}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map(({ title, icon: Icon, skills }) => (
              <SpotlightCard
                key={title}
                className="rounded-3xl p-5"
                spotlightColor="rgba(79, 217, 196, 0.12)"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <h3 className="text-[16.5px] font-semibold">{title}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {skills.map(skill => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 text-[13.5px] text-secondary-foreground"
                    >
                      <span className="truncate" title={skill.name}>
                        {skill.name}
                      </span>
                      <LevelBar level={skill.level} />
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}

            <SpotlightCard
              className="rounded-3xl p-6 sm:col-span-2 lg:col-span-4"
              spotlightColor="rgba(79, 217, 196, 0.12)"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-4 w-4 text-primary" />
                  </span>
                  <h3 className="text-[16.5px] font-semibold">
                    {t("skills.categories.tools")}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {tools.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tools.map(tool => (
                  <span
                    key={tool.name}
                    title={t(LEVEL_LABEL_KEY[tool.level])}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[13px] transition-colors",
                      tool.level === "advanced" &&
                        "border border-primary/30 bg-primary/10 text-primary",
                      tool.level === "intermediate" &&
                        "border border-border bg-secondary text-secondary-foreground",
                      tool.level === "working" &&
                        "border border-dashed border-border text-muted-foreground"
                    )}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>

          <p className="font-mono text-[12.5px] text-muted-foreground">
            <span className="text-primary">{t("skills.learning")}</span> React
            19, TypeScript, Node.js
          </p>
        </div>
      </div>
    </section>
  );
}
