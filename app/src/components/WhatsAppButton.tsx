import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
    const { t } = useLanguage();
    const phoneNumber = "34630437634";

    const handleClick = () => {
        const message = encodeURIComponent(t('whatsapp.message'));
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-300">
            <Button
                onClick={handleClick}
                className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center p-0"
                aria-label={t('whatsapp.tooltip')}
            >
                <MessageCircle className="w-8 h-8" />
            </Button>
        </div>
    );
}
