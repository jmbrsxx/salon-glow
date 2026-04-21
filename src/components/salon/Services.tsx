import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Eye, Flower2 } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cabelo",
    desc: "Corte, coloração, mechas, hidratação profunda e finalização para todos os tipos de fio.",
    price: "a partir de R$ 120",
  },
  {
    icon: Sparkles,
    title: "Unhas",
    desc: "Manicure, pedicure, esmaltação em gel, alongamento e nail art exclusiva.",
    price: "a partir de R$ 60",
  },
  {
    icon: Eye,
    title: "Sobrancelha",
    desc: "Design personalizado, henna, brow lamination e micropigmentação.",
    price: "a partir de R$ 80",
  },
  {
    icon: Flower2,
    title: "Estética",
    desc: "Limpeza de pele, peelings, massagem facial e tratamentos anti-idade.",
    price: "a partir de R$ 180",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Nossos serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
            Cuidado completo, do <em className="text-primary not-italic">topo aos detalhes</em>
          </h2>
          <p className="text-foreground/70">
            Tratamentos pensados para realçar a sua beleza com técnica, produtos premium e um toque de carinho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth border border-border/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-gradient-rose group-hover:text-primary-foreground transition-smooth">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="text-xs text-muted-foreground mb-6">{s.price}</p>
              <Button asChild variant="ghost" className="px-0 hover:bg-transparent text-primary hover:text-primary/80">
                <a href="#agendar">Agendar →</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
