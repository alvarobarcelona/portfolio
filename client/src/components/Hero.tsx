import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect } from "react";
import { initHeroAnimation } from "@/lib/iniHeroAnimation";


export default function Hero() {

  useEffect(() => {
    const cleanup = initHeroAnimation();
    return cleanup;
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container">
        {/* efecto nieve sol para el HERO */}
        <canvas id="c2"></canvas>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Álvaro</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Junior / Mid Full Stack Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in web development with 3 years of experience building
            modern, responsive applications using Javascript ,React, TypeScript,
            PHP, MySQL, CSS(Tailwind), .
          </p>

          <div id="fixed-bg">
            <canvas id="c"></canvas>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/alvarobarcelona"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/alvaro-barcelona-peralta-851788153/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:alvaro90barcelona@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
}
