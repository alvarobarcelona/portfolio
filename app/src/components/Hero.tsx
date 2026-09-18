import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ArrowRight,
  FileText,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  {
    href: "https://github.com/alvarobarcelona",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/alvaro-barcelona-peralta-851788153/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "mailto:alvaro90barcelona@gmail.com",
    label: "Email",
    Icon: Mail,
  },
];

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: "4", label: t("hero.stats.years") },
    { value: "9", label: t("hero.stats.projects") },
    { value: "4", label: t("hero.stats.languages") },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 lg:pt-24 lg:pb-24"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-2 pr-4 pl-3">
              <span className="h-[7px] w-[7px] rounded-full bg-primary" />
              <span className="font-mono text-[11.5px] tracking-[0.06em] text-primary">
                {t("hero.available")}
              </span>
            </span>

            <div>
              <p className="mb-3.5 font-mono text-[13px] tracking-[0.1em] text-muted-foreground">
                {t("hero.greeting")} Álvaro Barcelona Peralta
              </p>
              <h1 className="font-display text-5xl leading-[1.02] font-semibold tracking-[-0.035em] md:text-6xl lg:text-7xl">
                {t("hero.roleShort")}
                <span className="text-primary">.</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                size="lg"
                className="group rounded-full px-6"
                onClick={() => scrollToSection("contact")}
              >
                {t("hero.getInTouch")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-6"
              >
                <a
                  href="/Cv_Alvaro_Barcelona_Peralta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {t("hero.downloadCV")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-6"
                onClick={() => scrollToSection("projects")}
              >
                {t("hero.viewProjects")}
              </Button>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Tope de 360px: la foto original mide 400px de ancho, así que por
              encima de eso se ampliaría y se vería blanda. El tope va en la
              columna entera para que foto, métricas y stack queden alineados. */}
          <div className="mx-auto flex w-full max-w-[360px] flex-col gap-3.5 lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src="/picture/profile_work.webp"
                alt="Álvaro Barcelona Peralta"
                className="h-auto w-full"
                loading="eager"
                decoding="sync"
              />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-2 backdrop-blur-sm">
                <MapPin className="h-[13px] w-[13px] text-primary" />
                <span className="font-mono text-[11.5px]">
                  {t("contact.braunschweig")}
                </span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card px-3.5 py-4"
                >
                  <p className="font-display text-2xl leading-none font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 overflow-hidden rounded-2xl border border-border bg-card px-4 py-3.5">
              <span className="font-mono text-[11px] text-primary">$</span>
              <span className="truncate font-mono text-[11.5px] text-muted-foreground">
                react · typescript · node · php · postgres
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block"
        aria-label={t("hero.scrollAbout")}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
}
