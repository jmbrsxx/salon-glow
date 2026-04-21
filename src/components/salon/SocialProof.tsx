import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Cliente há 3 anos",
    text: "Sempre saio do Lumière me sentindo outra pessoa. Atendimento impecável e resultado perfeito todas as vezes.",
  },
  {
    name: "Beatriz O.",
    role: "Noiva 2024",
    text: "Cuidaram de mim no dia mais importante da minha vida. Profissionalismo e carinho que eu nunca esqueço.",
  },
  {
    name: "Camila R.",
    role: "Cliente",
    text: "Ambiente lindo, equipe acolhedora e produtos premium. Virou meu lugar favorito da cidade.",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Quem vive, recomenda
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
            Histórias que viram <em className="text-primary not-italic">tradição</em>
          </h2>
          <div className="flex items-center justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary" />
            ))}
            <span className="ml-2 text-foreground/70 text-sm">4.9 · 320+ avaliações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 font-serif text-lg italic">
                “{t.text}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
