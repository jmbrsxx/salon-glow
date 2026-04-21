import { Award, Gem, Clock, MapPin, MessageCircle, Heart } from "lucide-react";

const items = [
  { icon: Award, title: "Profissionais certificados", desc: "Equipe formada e em constante atualização." },
  { icon: Gem, title: "Produtos premium", desc: "Marcas internacionais selecionadas a dedo." },
  { icon: Clock, title: "Pontualidade", desc: "Respeitamos o seu tempo. Sempre." },
  { icon: MapPin, title: "Localização acessível", desc: "No coração dos Jardins, com estacionamento." },
  { icon: MessageCircle, title: "Atendimento via WhatsApp", desc: "Resposta rápida e atendimento humanizado." },
  { icon: Heart, title: "Cuidado personalizado", desc: "Cada cliente é única. Cada serviço também." },
];

export const Differentials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Por que o Lumière
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Diferenciais que <em className="text-primary not-italic">você sente</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex gap-4 p-6 rounded-2xl bg-card/60 hover:bg-card transition-smooth"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center text-primary-foreground">
                <it.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-1">{it.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
