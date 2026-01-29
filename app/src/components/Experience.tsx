import { Card, CardContent, CardHeader, CardTitle, CardDate } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Experience() {
  const { language, t } = useLanguage();
  const experiences = translations[language].experience.items;

  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t('experience.title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('experience.subtitle')}
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[1.875rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <Card className="border-border/50 bg-card">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">
                        {t('experience.responsibilities')}
                      </h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="text-primary">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
