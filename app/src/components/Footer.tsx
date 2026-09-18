import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-primary font-display text-sm font-bold text-primary-foreground">
              Á
            </span>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {currentYear} Álvaro Barcelona Peralta. {t("footer.rights")}
            </p>
          </div>

          <p className="font-mono text-[11.5px] text-muted-foreground">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
