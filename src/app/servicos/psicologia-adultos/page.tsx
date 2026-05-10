import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconLeaf } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Terapia Individual para Adultos em Almada | Jarbas Garcia",
  description:
    "Psicólogo clínico para adultos em Almada. Terapia individual para ansiedade, stress, autoestima e bem-estar emocional. Online e presencial. OPP 31641.",
  alternates: { canonical: "/servicos/psicologia-adultos" },
};

export default function PsicologiaAdultosPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconLeaf />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Terapia Individual para Adultos
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Acompanhamento psicológico individual para adultos que procuram
            bem-estar emocional, autoconhecimento e ferramentas para uma vida
            mais equilibrada.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Posso ajudar com...
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ansiedade e preocupação crónica",
                "Stress e burnout",
                "Baixa autoestima e autocrítica excessiva",
                "Dificuldades relacionais",
                "Regulação emocional",
                "Tristeza persistente",
                "Crise de identidade ou de sentido",
                "Transições de vida (carreira, relações, parentalidade)",
                "Competências socioemocionais",
                "Autoconhecimento e crescimento pessoal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-6">
            <h2 className="font-display text-xl font-bold text-stone-900 mb-3">
              Como é o acompanhamento?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              Começo por compreender o seu contexto, história e objetivos — sem
              pressa, sem julgamentos. A partir daí, definimos juntos um plano
              de intervenção claro e adaptado ao que faz sentido para si.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Trabalho com estratégias cognitivo-comportamentais, análise do
              comportamento e técnicas de regulação emocional — integradas
              de forma prática no seu quotidiano.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              Não precisa de estar em crise para começar
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Muitos adultos procuram acompanhamento psicológico por quererem
              crescer emocionalmente, conhecer-se melhor ou prevenir problemas
              futuros. Esse é um motivo tão válido como qualquer outro.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
