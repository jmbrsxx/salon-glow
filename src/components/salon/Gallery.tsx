import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g5, alt: "Maquiagem profissional", span: "row-span-2" },
  { src: g2, alt: "Manicure em rosa nude", span: "" },
  { src: g3, alt: "Design de sobrancelha", span: "" },
  { src: g4, alt: "Sala de estética", span: "" },
  { src: g1, alt: "Produtos premium", span: "" },
  { src: g6, alt: "Ferramentas de styling", span: "" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Galeria
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
            Resultados que <em className="text-primary not-italic">falam por si</em>
          </h2>
          <p className="text-foreground/70">
            Uma seleção dos nossos trabalhos favoritos. Inspire-se.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {items.map((item, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-3xl shadow-card group ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
