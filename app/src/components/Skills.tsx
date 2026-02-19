import { Card, CardContent } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code2,
  Server,
  Wrench,
  Languages,
  Layout,
  Cpu
} from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: [
        { name: "JavaScript", level: t('skills.legend.intermediate') },
        { name: "React", level: t('skills.legend.intermediate') },
        { name: "TypeScript", level: t('skills.legend.intermediate') },
        { name: "HTML5", level: t('skills.legend.advanced') },
        { name: "CSS3 / SCSS", level: t('skills.legend.advanced') },
        { name: "Tailwind CSS", level: t('skills.legend.intermediate') },
        /* { name: "Next.js", level: t('skills.legend.working') }, */
      ],
    },
    {
      title: t('skills.categories.backend'),
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: [
        { name: "PHP", level: t('skills.legend.advanced') },
        { name: "MySQL", level: t('skills.legend.advanced') },
        { name: "PostgreSQL", level: t('skills.legend.intermediate') },
        { name: "Node.js", level: t('skills.legend.working') },
      ],
    },
    {
      title: t('skills.categories.tools'),
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Git", level: t('skills.legend.intermediate') },
        { name: "Jira", level: t('skills.legend.advanced') },
        { name: "GitHub Actions", level: t('skills.legend.working') },
        { name: "Moodle Development", level: t('skills.legend.advanced') },
        { name: "Docker", level: t('skills.legend.intermediate') },
        { name: "Agile Methodologies", level: t('skills.legend.advanced') },
        { name: "REST APIs", level: t('skills.legend.intermediate') },
        { name: "Slack", level: t('skills.legend.intermediate') },
        { name: "Supabase", level: t('skills.legend.intermediate') },
        { name: "Neon", level: t('skills.legend.working') },
        { name: "Microsoft Teams", level: t('skills.legend.intermediate') },
        { name: "Visual Studio Code", level: t('skills.legend.intermediate') },
        { name: "Antigravity", level: t('skills.legend.intermediate') },
        { name: "Vercel", level: t('skills.legend.intermediate') },
        { name: "Render", level: t('skills.legend.working') },
        { name: "Resend API", level: t('skills.legend.working') },
        { name: "Cron Jobs", level: t('skills.legend.working') },
      ],
    },
    {
      title: t('skills.categories.ai'),
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Google AI Studio", level: t('skills.legend.working') },
        { name: "Chat GPT", level: t('skills.legend.intermediate') },
        { name: "Gemini Pro", level: t('skills.legend.intermediate') },
        { name: "AI API Integration in Web Applications", level: t('skills.legend.intermediate') },
      ],
    },
    {
      title: t('skills.categories.languages'),
      icon: <Languages className="w-6 h-6 text-primary" />,
      skills: [
        { name: "German", level: t('skills.legend.intermediate') },
        { name: "English", level: t('skills.legend.intermediate') },
        { name: "Spanish", level: t('skills.legend.advanced') },
        { name: "Catalan", level: t('skills.legend.advanced') },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    const advanced = t('skills.legend.advanced');
    const intermediate = t('skills.legend.intermediate');
    const working = t('skills.legend.working');

    if (level === advanced) {
      return "bg-emerald-100/50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20";
    }
    if (level === intermediate) {
      return "bg-blue-100/50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20";
    }
    if (level === working) {
      return "bg-amber-100/50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20";
    }
    return "bg-muted text-muted-foreground border border-border";
  };

  const legendItems = [
    { label: t('skills.legend.advanced'), color: "bg-emerald-500" },
    { label: t('skills.legend.intermediate'), color: "bg-blue-500" },
    { label: t('skills.legend.working'), color: "bg-amber-500" },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/5">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Code2 className="w-10 h-10 text-primary animate-pulse" />
              {t('skills.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('skills.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mt-4">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/50 shadow-sm">
                  <span className={`w-3 h-3 rounded-full ${item.color.split(' ')[0]}`} />
                  <span className="text-muted-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SpotlightCard key={index} className="border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg group">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${getLevelColor(skill.level)}`}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {t('skills.learning')}{" "}
              <span className="text-foreground font-medium bg-primary/10 px-2 py-0.5 rounded">
                React 19, TypeScript, Node.js
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
