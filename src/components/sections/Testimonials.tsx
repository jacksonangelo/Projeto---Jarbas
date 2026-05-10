import Image        from "next/image";
import { Star, Quote } from "lucide-react";
import { Reveal }   from "@/components/ui/Reveal";
import isaImg       from "@/images/Isa.webp";
import iaraImg      from "@/images/Iara.webp";
import luaImg       from "@/images/Lua.webp";

const testimonials = [
  {
    name:   "Isadora Cordeiro",
    role:   "Tearapeuta Ocupacional Infantil",
    avatar: "IC",
    photo:  isaImg,
    color:  "bg-green-100 text-green-800",
    body:   "Profissional muito competente e dedicado. Um trabalho realizado com sensibilidade, ética e verdadeiro cuidado com as crianças e famílias.",
    rating: 5,
  },
  {
    name:   "Jeferson Weyne",
    role:   "Psicologo Clínico",
    avatar: "JW",
    photo:  null,
    color:  "bg-beige-300 text-stone-700",
    body:   "Excelente profissional, extremamente capacitado e sempre comprometido com o bem-estar e desenvolvimento dos pacientes.",
    rating: 5,
  },
  {
    name:   "Iara Moura",
    role:   "Psicologa Clínica",
    avatar: "IM",
    photo:  iaraImg,
    color:  "bg-green-200 text-green-800",
    body:   "Um profissional atencioso, humano e muito competente. O trabalho desenvolvido transmite confiança e acolhimento.",
    rating: 5,
  },
  {
    name:   "Luana Sousa",
    role:   "Psicóloga clínica especializada em terapia infantil",
    avatar: "LS",
    photo:  luaImg,
    color:  "bg-beige-200 text-stone-800",
    body:   "Profissional ético, competente e muito dedicado. Recomendo pelo cuidado e excelência no acompanhamento.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400/80 fill-amber-400/80" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-14">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-balance">
            Confiança construída através do cuidado
          </h2>
          <p className="mt-4 text-stone-400 text-sm">
            Reconhecido por colegas e profissionais da área pela ética, competência e dedicação.
          </p>
        </Reveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="group relative bg-beige-50 border border-beige-200 hover:border-green-200 rounded-2xl p-7 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 h-full">
                {/* Quote icon */}
                <Quote
                  size={32}
                  className="absolute top-6 right-6 text-beige-300 group-hover:text-green-100 transition-colors duration-300"
                  strokeWidth={1.5}
                />

                <Stars count={t.rating} />

                <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                  &ldquo;{t.body}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-white"
                    />
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-semibold text-xs shrink-0 ring-2 ring-white`}
                    >
                      {t.avatar}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={100} className="mt-8 text-center">
          <p className="text-xs text-stone-400">
            Avaliações reais de colegas e profissionais da área. Apresentadas com autorização.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
