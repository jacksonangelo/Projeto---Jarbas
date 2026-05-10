import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconAssessment } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Avaliação Comportamental em Almada | Jarbas Garcia Psicólogo",
  description:
    "Avaliação comportamental especializada em Almada para crianças, adolescentes e adultos. Identificação de padrões, causas e estratégias de intervenção eficaz. OPP 31641.",
  alternates: { canonical: "/servicos/avaliacao-comportamental" },
};

export default function AvaliacaoComportamentalPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconAssessment />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Avaliação Comportamental
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Avaliação sistemática e rigorosa do comportamento para identificar
            padrões, causas e oportunidades de intervenção — antes de qualquer
            plano terapêutico.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              O que é e para que serve?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              A avaliação comportamental é um processo estruturado de recolha e
              análise de informação sobre o comportamento de uma pessoa — o que
              o despoleta, o que o mantém e quais as suas consequências no
              quotidiano.
            </p>
            <p className="text-stone-600 leading-relaxed">
              É o ponto de partida para qualquer intervenção eficaz. Sem uma
              avaliação rigorosa, qualquer plano terapêutico está a trabalhar
              às cegas. Com ela, as intervenções são mais precisas, mais rápidas
              e com resultados mais duradouros.
            </p>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-6">
            <h2 className="font-display text-xl font-bold text-stone-900 mb-4">
              O que inclui a avaliação?
            </h2>
            <ul className="space-y-2.5">
              {[
                "Entrevista clínica detalhada com o paciente e/ou cuidadores",
                "Análise funcional do comportamento (antecedentes, comportamento, consequências)",
                "Observação comportamental direta (quando aplicável)",
                "Recolha de informação de múltiplos contextos (casa, escola, social)",
                "Identificação de fatores de manutenção do comportamento-problema",
                "Relatório com recomendações concretas de intervenção",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h3 className="font-semibold text-stone-900 mb-2 text-sm">Para crianças e adolescentes</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Avaliação do comportamento em contexto familiar e escolar, com
                envolvimento dos pais/professores no processo.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h3 className="font-semibold text-stone-900 mb-2 text-sm">Para adultos</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Identificação de padrões comportamentais que mantêm o sofrimento
                emocional ou as dificuldades relacionais.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
