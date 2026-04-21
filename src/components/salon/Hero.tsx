import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior do Lumière Studio"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background/70 backdrop-blur-sm border border-border text-xs font-medium tracking-widest uppercase text-primary mb-6">
            Salão de Beleza Premium
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] mb-6 text-foreground">
            Beleza, autoestima <br className="hidden md:block" />
            e cuidado em <em className="text-primary not-italic">um só lugar</em>
          </h1>
          <p className="text-lg md:text-xl text-foreground/75 max-w-xl mx-auto mb-10 leading-relaxed">
            Experiências exclusivas em cabelo, unhas, sobrancelha e estética —
            desenhadas para realçar a sua essência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="rounded-full text-base px-8 h-14 shadow-soft">
              <a href="#agendar">Agendar horário</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-14 bg-background/60 backdrop-blur-sm">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-foreground/80">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Rua das Flores, 123 — Jardins
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" /> 4.9 no Google · 320 avaliações
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Seg–Sáb · 9h às 19h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
