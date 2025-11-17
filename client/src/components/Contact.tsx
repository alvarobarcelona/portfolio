import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alvaro90barcelona@gmail.com",
      link: "mailto:alvaro90barcelona@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Braunschweig, Germany",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/alvarobarcelona",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/alvaro-barcelona-peralta-851788153/",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Feel free to reach out for opportunities or just to say hello
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-border/50 bg-card">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold">{item.label}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-foreground transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button key={index} variant="outline" size="lg" asChild>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="pt-8">
              <Button size="lg" asChild>
                <a href="mailto:alvaro90barcelona@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send me an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
