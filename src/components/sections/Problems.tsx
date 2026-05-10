import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    emoji: "😰",
    title: "\"O meu filho tem comportamentos muito difíceis e não sei como reagir\"",
    tag:   "Pais",
  },
  {
    emoji: "😔",
    title: "\"A ansiedade está a controlar a vida do meu filho — ou a minha\"",
    tag:   "Famílias / Adultos",
  },
  {
    emoji: "🧩",
    title: "\"O meu filho tem autismo e quero saber como apoiá-lo da melhor forma\"",
    tag:   "Famílias",
  },
  {
    emoji: "😮‍💨",
    title: "\"Sinto-me sobrecarregado e sem recursos emocionais para continuar\"",
    tag:   "Adultos",
  },
  {
    emoji: "🧑",
    title: "\"O meu adolescente fechou-se em si mesmo e já não sei como chegar até ele\"",
    tag:   "Pais",
  },
  {
    emoji: "💭",
    title: "\"Quero desenvolver as minhas competências emocionais mas não sei por onde começar\"",
    tag:   "Adultos",
  },
];

export function Problems() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-14">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Reconhece alguma destas situações?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-balance max-w-2xl mx-auto">
            Muitas famílias e adultos passam pelos mesmos desafios
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Não está sozinho. Cada uma destas situações tem solução — e pedir
            ajuda é o primeiro passo mais importante que pode dar.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="group bg-beige-50 hover:bg-green-50 border border-beige-200 hover:border-green-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-card cursor-default h-full">
                <span className="text-3xl mb-4 block">{p.emoji}</span>
                <p className="text-stone-700 font-medium leading-relaxed text-sm italic">
                  {p.title}
                </p>
                <span className="mt-4 inline-block text-xs text-green-600 font-semibold bg-green-100 px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resolution teaser */}
        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-stone-600 mb-4 text-base">
            Com intervenções baseadas em evidência, as coisas mudam — de forma real e sustentável.
          </p>
          <div className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm">
            <span className="w-8 h-px bg-green-300" />
            Veja como posso ajudar
            <span className="w-8 h-px bg-green-300" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
