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
        { name: "Node.js", level: "Intermediate" },
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
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "German", level: "Fluent (B2)" },
        { name: "English", level: "Intermediate" },
        { name: "Spanish", level: "Native" },
        { name: "Catalan", level: "Native" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary/20 text-primary";
      case "Intermediate":
        return "bg-accent/20 text-accent-foreground";
      case "Learning":
        return "bg-secondary/20 text-secondary-foreground";
      case "Fluent (B2)":
      case "Native":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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
