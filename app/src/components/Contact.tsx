import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EMAIL = "alvaro90barcelona@gmail.com";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "alvarobarcelona",
    link: "https://github.com/alvarobarcelona",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Álvaro Barcelona Peralta",
    link: "https://www.linkedin.com/in/alvaro-barcelona-peralta-851788153/",
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-8">
          <div>
            <p className="eyebrow mb-2">05 — {t("nav.contact")}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t("contact.title")}
            </h2>
          </div>

          <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:gap-14">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-2 pr-4 pl-3">
                <span className="h-[7px] w-[7px] rounded-full bg-primary" />
                <span className="font-mono text-[11.5px] tracking-[0.06em] text-primary">
                  {t("hero.available")}
                </span>
              </span>

              <h3 className="text-2xl leading-snug font-semibold md:text-[28px]">
                {t("contact.subtitle")}
              </h3>

              <div>
                <p className="mb-2 font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                  {t("contact.email")}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display text-xl font-semibold break-all transition-colors hover:text-primary sm:text-2xl"
                >
                  {EMAIL}
                </a>
              </div>

              <Button
                size="lg"
                asChild
                className="w-fit rounded-full px-6"
              >
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  {t("contact.sendEmail")}
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-background p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-[17px] w-[17px] text-primary" />
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                    {t("contact.location")}
                  </p>
                  <p className="mt-1 text-[14.5px]">
                    {t("contact.braunschweig")}
                  </p>
                </div>
              </div>

              {socialLinks.map(({ icon: Icon, label, handle, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-[17px] w-[17px] text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-[14.5px]">{handle}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
