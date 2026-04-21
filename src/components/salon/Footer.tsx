import { Instagram, MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl font-semibold mb-3">
            Lumière <span className="text-primary">Studio</span>
          </p>
          <p className="text-background/65 max-w-sm leading-relaxed">
            Beleza, autoestima e cuidado em um só lugar. Há 8 anos cuidando da
            sua melhor versão.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-background">Horários</h4>
          <ul className="text-sm text-background/70 space-y-1.5">
            <li>Seg – Sex · 9h às 20h</li>
            <li>Sábado · 9h às 18h</li>
            <li>Domingo · Fechado</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-background">Contato</h4>
          <ul className="text-sm text-background/70 space-y-2">
            <li>Rua das Flores, 123 — Jardins</li>
            <li>(11) 9 9999-9999</li>
            <li className="flex gap-3 pt-2">
              <a href="https://wa.me/5511999999999" aria-label="WhatsApp" className="hover:text-primary transition-smooth">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+5511999999999" aria-label="Telefone" className="hover:text-primary transition-smooth">
                <Phone className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container py-5 text-xs text-background/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Lumière Studio. Todos os direitos reservados.</p>
          <p>Feito com cuidado para você brilhar ✦</p>
        </div>
      </div>
    </footer>
  );
};
