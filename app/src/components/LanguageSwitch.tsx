import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/i18n";

const languageCycle: Record<Language, Language> = {
    de: 'en',
    en: 'es',
    es: 'de',
};

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            className="font-medium w-12"
            onClick={() => setLanguage(languageCycle[language])}
            aria-label="Toggle Language"
        >
            {language.toUpperCase()}
        </Button>
    );
}

