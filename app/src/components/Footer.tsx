import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Álvaro Barcelona Peralta. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
