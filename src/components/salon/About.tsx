import teamImg from "@/assets/team.jpg";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary/15 -z-10" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-accent -z-10" />
          <img
            src={teamImg}
            alt="Equipe do Lumière Studio"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-elegant w-full h-auto object-cover"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Sobre o Lumière
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            Mais que beleza. <br />
            <em className="text-primary not-italic">Uma experiência.</em>
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4">
            Há mais de 8 anos, o Lumière Studio é referência em beleza e bem-estar.
            Nossa equipe é formada por profissionais certificados, apaixonados pelo
            que fazem e em constante atualização nas tendências internacionais.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            Trabalhamos com produtos premium das melhores marcas do mundo, num
            ambiente pensado para o seu conforto absoluto.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { n: "8+", l: "Anos de história" },
              { n: "5k+", l: "Clientes felizes" },
              { n: "12", l: "Especialistas" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl text-primary">{s.n}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#agendar">Conheça o espaço</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
