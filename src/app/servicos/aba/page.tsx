import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconNodes } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Intervenção ABA em Almada | Análise do Comportamento Aplicada",
  description:
    "Intervenção ABA (Análise do Comportamento Aplicada) para crianças com autismo e TEA em Almada. Psicólogo especialista em ABA — OPP 31641. Presencial e online.",
  alternates: { canonical: "/servicos/aba" },
};

const areas = [
  "Comunicação e linguagem funcional",
  "Habilidades sociais e interação com pares",
  "Autonomia e rotinas do quotidiano",
  "Comportamentos desafiantes (autolesão, agressão, estereotipias)",
  "Aprendizagem académica e pré-académica",
  "Habilidades de vida diária (higiene, alimentação, vestuário)",
  "Gestão sensorial",
  "Generalização de competências para novos contextos",
];

export default function AbaPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconNodes />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Intervenção ABA
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Análise do Comportamento Aplicada (ABA) para crianças com Perturbação
            do Espetro do Autismo (TEA) e outras necessidades de desenvolvimento.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              O que é a ABA?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              A ABA é a abordagem com mais evidência científica para a intervenção
              no autismo. Baseia-se na análise funcional do comportamento — compreender
              o porquê de cada comportamento — para criar estratégias eficazes e
              sustentáveis.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Não é uma abordagem rígida nem mecanizada. Cada plano de intervenção é
              desenhado com base numa avaliação detalhada da criança, em parceria com
              a família, com objetivos concretos e mensuráveis.
            </p>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-6">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Áreas de trabalho
            </h2>
            <ul className="space-y-2.5">
              {areas.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              O papel da família na intervenção ABA
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              A família é parte essencial do processo. Incluo sessões de treino
              parental para que os pais e cuidadores possam aplicar as estratégias
              no dia a dia, maximizando os resultados da intervenção.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
