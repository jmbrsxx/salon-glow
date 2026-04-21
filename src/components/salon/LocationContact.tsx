import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Phone, MapPin, Navigation } from "lucide-react";

export const LocationContact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="rounded-3xl overflow-hidden shadow-card min-h-[360px] lg:min-h-[460px]">
          <iframe
            title="Mapa Lumière Studio"
            src="https://maps.google.com/maps?q=Rua%20Oscar%20Freire%20Jardins%20S%C3%A3o%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Visite ou fale conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            Nosso espaço é <em className="text-primary not-italic">o seu refúgio</em>
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Endereço</p>
                <p className="text-foreground/70 text-sm">Rua das Flores, 123 — Jardins, São Paulo · SP</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Telefone</p>
                <p className="text-foreground/70 text-sm">(11) 9 9999-9999</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-foreground/70 text-sm">@lumiere.studio</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a
                href="https://maps.google.com/?q=Rua+Oscar+Freire+Jardins"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" /> Como chegar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
