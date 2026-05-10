import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconWaves } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Ansiedade e Regulação Emocional em Almada | Jarbas Garcia",
  description:
    "Tratamento da ansiedade e regulação emocional em Almada para crianças, adolescentes e adultos. Estratégias cognitivo-comportamentais baseadas em evidência. Online e presencial.",
  alternates: { canonical: "/servicos/ansiedade" },
};

const signs = [
  "Preocupação excessiva e difícil de controlar",
  "Dificuldade em adormecer ou sono agitado",
  "Queixas físicas sem causa médica (dores de cabeça, barriga)",
  "Evitamento de situações sociais ou escolares",
  "Irritabilidade e reatividade emocional elevada",
  "Dificuldade de concentração e rendimento escolar afetado",
  "Medo de errar, de decepcionar ou de ser julgado",
  "Pensamentos intrusivos e ruminação",
];

export default function AnsiedadePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconWaves />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Ansiedade e Regulação Emocional
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Estratégias cognitivo-comportamentais eficazes para compreender, gerir
            e reduzir a ansiedade — em crianças, adolescentes e adultos.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Sinais a que deve estar atento
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {signs.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-amber-500 mt-0.5 shrink-0">⚠</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-6">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Como é feita a intervenção?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Começo por compreender o padrão de ansiedade específico — o que a
              despoleta, o que a mantém e como se manifesta naquela pessoa em
              particular. A intervenção não é igual para toda a gente.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Trabalho com técnicas cognitivo-comportamentais, exposição gradual
              e estratégias de regulação emocional — com o objetivo de que a
              pessoa ganhe autonomia para gerir a ansiedade de forma sustentável,
              muito além das sessões.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              A ansiedade tem tratamento eficaz
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Não precisa de conviver com a ansiedade como se fosse inevitável.
              Com a intervenção certa, é possível mudar padrões de pensamento e
              de comportamento que sustentam o ciclo da ansiedade.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
