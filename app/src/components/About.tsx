import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, Brain, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Focus",
      description:
        "Building end-to-end solutions using React 19, TypeScript, Node.js and modern databases.",
    },
    {
      icon: Briefcase,
      title: "Business Mindset",
      description: "About 10 years in logistics & logistics management. I build software that solves real business problems.",
    },
    {
      icon: Brain,
      title: "AI-Enhanced Workflow",
      description: "Leveraging AI as an external skeleton to code faster, prototype rapidly, and focus on architecture.",
    },
    {
      icon: Rocket,
      title: "Agile & Teamwork",
      description: "Proven track record in agile environments, cross-functional teams.",
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
            {""}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm expanding my expertise in the <span className="text-foreground font-medium">React ecosystem</span> and
              modern development practices. I'm fluent in German (B2 certified),
              English, Spanish, and Catalan, which enables me to work
              effectively in international teams and communicate with diverse
              stakeholders.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My background involves more than just code. With over a decade of experience in
              <span className="text-foreground font-medium"> logistics management and startup operations</span>,
              I bring a unique "business-first" perspective to development. I understand that code is a means to an end:
              solving efficient problems, optimizing workflows, and delivering value to users.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I embrace the future of coding by integrating <span className="text-foreground font-medium">Artificial Intelligence</span> into my daily workflow.
              I don't just "generate" code; I use AI as a powerful exoskeleton to accelerate scaffolding,
              debug complex logic, and prototype ideas at record speed. This allows me to focus my human energy on what matters most:
              <span className="text-foreground font-medium"> System Architecture, User Experience, and solving high-level logic puzzles.</span>
              I am a pilot, and AI is my co-pilot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
