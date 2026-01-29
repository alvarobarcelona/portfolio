import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            className="font-medium w-12"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            aria-label="Toggle Language"
        >
            {language.toUpperCase()}
        </Button>
    );
}
