import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Marca en la píldora la sección que se está leyendo. Sin esto la píldora
  // es decorativa; con esto sustituye a la barra de progreso.
  useEffect(() => {
    const ids = ["hero", ...navItems.map(item => item.id)];
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
    // Las secciones del DOM no cambian con el idioma, solo sus etiquetas.
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label="Ir al inicio"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-primary font-display text-sm font-bold text-primary-foreground">
              Á
            </span>
            <span className="font-display text-[15px] font-semibold">
              Barcelona
            </span>
          </button>

          {/* Navegación de escritorio: píldora flotante */}
          <div
            className={cn(
              "hidden items-center gap-1 rounded-full border border-border p-1.5 transition-colors duration-300 lg:flex",
              isScrolled ? "bg-card/80 backdrop-blur-md" : "bg-transparent"
            )}
          >
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <ThemeToggle />
            <Button
              size="sm"
              asChild
              className="hidden rounded-full px-5 xl:inline-flex"
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
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Navegación móvil */}
        {isMobileMenuOpen && (
          <div className="mt-3 flex flex-col gap-1 rounded-3xl border border-border bg-card/95 p-3 backdrop-blur-md lg:hidden">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button asChild className="mt-1 rounded-2xl">
              <a
                href="/Cv_Alvaro_Barcelona_Peralta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
