import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-rose text-primary-foreground shadow-elegant flex items-center justify-center hover:scale-110 transition-smooth animate-float"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping" />
    </a>
  );
};
