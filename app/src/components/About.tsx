import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, Brain, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.fullstack.title'),
      description: t('about.highlights.fullstack.desc'),
    },
    {
      icon: Briefcase,
      title: t('about.highlights.business.title'),
      description: t('about.highlights.business.desc'),
    },
    {
      icon: Brain,
      title: t('about.highlights.ai.title'),
      description: t('about.highlights.ai.desc'),
    },
    {
      icon: Rocket,
      title: t('about.highlights.agile.title'),
      description: t('about.highlights.agile.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.p1')}{" "}
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
