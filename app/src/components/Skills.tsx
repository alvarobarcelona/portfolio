import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const getLevelKey = (level: string) => {
    switch (level) {
      case "Advanced": return "advanced";
      case "Native": return "advanced";
      case "Intermediate": return "intermediate";
      case "Working Knowledge": return "working";
      default: return "working";
    }
  };

  // We keep the structure but fetch titles and levels via t()
  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: "JavaScript", level: t('skills.legend.intermediate') },
        { name: "React", level: t('skills.legend.working') },
        { name: "TypeScript", level: t('skills.legend.working') },
        { name: "HTML5", level: t('skills.legend.advanced') },
        { name: "CSS3 / SCSS", level: t('skills.legend.advanced') },
        { name: "Tailwind CSS", level: t('skills.legend.intermediate') },
        { name: "Next.js", level: t('skills.legend.working') },
      ],
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "PHP", level: t('skills.legend.advanced') },
        { name: "MySQL", level: t('skills.legend.advanced') },
        { name: "PostgreSQL", level: t('skills.legend.working') },
        { name: "Supabase", level: t('skills.legend.working') },
        { name: "Neon", level: t('skills.legend.working') },
        { name: "Node.js", level: t('skills.legend.working') },
      ],
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: "Git", level: t('skills.legend.intermediate') },
        { name: "Jira", level: t('skills.legend.advanced') },
        { name: "Moodle Development", level: t('skills.legend.advanced') },
        { name: "Agile Methodologies", level: t('skills.legend.advanced') },
        { name: "REST APIs", level: t('skills.legend.intermediate') },
        { name: "Slack", level: t('skills.legend.intermediate') },
        { name: "Microsoft Teams", level: t('skills.legend.intermediate') },
        { name: "Visual Studio Code", level: t('skills.legend.intermediate') },
        { name: "Antigravity", level: t('skills.legend.intermediate') },
        { name: "GitHub Actions", level: t('skills.legend.working') },
        { name: "Vercel", level: t('skills.legend.working') },
        { name: "Render", level: t('skills.legend.working') },
        { name: "Resend API", level: t('skills.legend.working') },
        { name: "Cron Jobs", level: t('skills.legend.working') },
      ],
    },
    {
      title: t('skills.categories.languages'),
      skills: [
        { name: "German", level: t('skills.legend.intermediate') },
        { name: "English", level: t('skills.legend.intermediate') },
        { name: "Spanish", level: t('skills.legend.advanced') },
        { name: "Catalan", level: t('skills.legend.advanced') },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    // We check against translated strings
    // But better usage would be to use the keys. 
    // For now, let's reverse match or check if the level *contains* the key words or matches the translated value of 'advanced' etc.
    // However, simplest is to check against the translated values since they are unique enough.
    const advanced = t('skills.legend.advanced');
    const intermediate = t('skills.legend.intermediate');
    const working = t('skills.legend.working');

    // Note: The "Languages" category uses "Native" which maps to "Advanced / Native" in translation

    if (level === advanced) {
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20";
    }
    if (level === intermediate) {
      return "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20";
    }
    if (level === working) {
      return "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20";
    }
    return "bg-muted text-muted-foreground border border-border";
  };


  const legendItems = [
    { label: t('skills.legend.advanced'), color: "bg-emerald-500" },
    { label: t('skills.legend.intermediate'), color: "bg-blue-500" },
    { label: t('skills.legend.working'), color: "bg-amber-500" },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t('skills.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('skills.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${item.color.split(' ')[0]}`} />
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border/50 bg-card/50">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium ${getLevelColor(skill.level)}`}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {t('skills.learning')}{" "}
              <span className="text-foreground font-medium">
                React 19, TypeScript, Next.js, Node.js
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
