import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="agendar" className="py-20 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-rose px-8 py-20 md:py-24 text-center shadow-elegant">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary-foreground/30 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-background/40 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
              Agende seu horário e <br />
              <em className="not-italic">valorize a sua beleza</em>
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-10">
              Reserve já o seu momento. Atendimento exclusivo, sem espera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full text-base px-10 h-14 bg-background text-foreground hover:bg-background/90"
              >
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio."
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar agora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-base px-10 h-14 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#contato">Falar com a recepção</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
