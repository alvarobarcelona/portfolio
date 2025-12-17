import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "3 years of experience(Ausbildung) + Continuing education in modern web technologies",
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Specialized in agile development and team collaboration",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Currently advancing skills in React 19, TypeScript, and JS",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-muted-foreground text-lg">
              Get to know more about my background and expertise
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer with a solid foundation in both
              frontend and backend technologies. My journey in software
              development began with a professional training as an{" "}
              <span className="text-foreground font-medium">
                Application Developer (Fachinformatiker für
                Anwendungsentwicklung)
              </span>
              , where I specialized in web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Throughout my career, I've worked extensively with web
              technologies{" "}
              <span className="text-foreground font-medium">
                (JavaScript, PHP, HTML, CSS and MySQL)
              </span>{" "}
              and now learning by doing{" "}
              <span className="text-foreground font-medium">
                {" "}
                React, TypeScript and Node.js
              </span>
              . I have hands-on experience in agile project environments,
              developing Moodle plugins, building responsive frontends, and
              providing technical support to end users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm expanding my expertise in the <span className="text-foreground font-medium">React ecosystem</span> and
              modern development practices. I'm fluent in German (B2 certified),
              English, Spanish, and Catalan, which enables me to work
              effectively in international teams and communicate with diverse
              stakeholders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recently, I’ve been actively exploring the practical use of AI in modern web applications. 
              This includes integrating AI APIs, designing automation workflows, experimenting with prompt engineering, and applying AI-driven features to improve productivity, user experience, and decision-making within applications. My focus is on real, applied AI, not only theory—using it as a tool to build smarter and more efficient software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 hover:bg-card transition-colors"
                >
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
