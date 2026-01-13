import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Working Knowledge" },
        { name: "TypeScript", level: "Working Knowledge" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3 / SCSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Next.js", level: "Working Knowledge" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Working Knowledge" },
        { name: "Supabase", level: "Working Knowledge" },
        { name: "Neon", level: "Working Knowledge" },
        { name: "Node.js", level: "Working Knowledge" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "Jira", level: "Advanced" },
        { name: "Moodle Development", level: "Advanced" },
        { name: "Agile Methodologies", level: "Advanced" },
        { name: "REST APIs", level: "Intermediate" },
        { name: "Slack", level: "Intermediate" },
        { name: "Microsoft Teams", level: "Intermediate" },
        { name: "Visual Studio Code", level: "Intermediate" },
        { name: "Antigravity", level: "Intermediate" },
        { name: "GitHub Actions", level: "Working Knowledge" },
        { name: "Vercel", level: "Working Knowledge" },
        { name: "Render", level: "Working Knowledge" },
        { name: "Resend API", level: "Working Knowledge" },
        { name: "Cron Jobs", level: "Working Knowledge" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "German", level: "Intermediate" },
        { name: "English", level: "Intermediate" },
        { name: "Spanish", level: "Native" },
        { name: "Catalan", level: "Native" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
      case "Native":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20";
      case "Working Knowledge":
        return "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20";
      default:
        return "bg-muted text-muted-foreground border border-border";
    }


  };

  const legendItems = [
    { label: "Advanced / Native", color: "bg-emerald-500" },
    { label: "Intermediate", color: "bg-blue-500" },
    { label: "Working Knowledge", color: "bg-amber-500" },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
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
              Currently learning:{" "}
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
