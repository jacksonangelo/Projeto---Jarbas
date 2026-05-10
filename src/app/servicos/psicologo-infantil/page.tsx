import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconChild } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Psicólogo Infantil e Adolescentes em Almada | Jarbas Garcia",
  description:
    "Atendimento psicológico especializado para crianças e adolescentes em Almada. Apoio no desenvolvimento emocional, comportamental e social — online e presencial.",
  alternates: { canonical: "/servicos/psicologo-infantil" },
};

const topics = [
  "Birras e dificuldades de regulação emocional",
  "Medos e fobias infantis",
  "Ansiedade de separação",
  "Dificuldades de adaptação escolar",
  "Problemas de sono",
  "Baixa autoestima e insegurança",
  "Comportamentos de oposição",
  "Gestão de conflitos com pares",
  "Luto e perdas na infância",
  "Identidade e pressão social (adolescentes)",
  "Isolamento e dificuldades relacionais",
  "Transições de vida (divórcio, mudança de escola)",
];

export default function PsicologoInfantilPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconChild />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Intervenção Infantil e com Adolescentes
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Acompanhamento especializado para crianças e adolescentes em Almada — com foco
            no desenvolvimento emocional, comportamental e social.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Situações em que posso ajudar
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Como funciona o acompanhamento?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              O acompanhamento começa por uma avaliação detalhada da criança ou adolescente —
              compreender o contexto, a história e os padrões de comportamento antes de
              qualquer intervenção.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              As sessões são adaptadas à fase de desenvolvimento, usando o jogo, a expressão
              criativa e estratégias cognitivo-comportamentais de forma lúdica e adequada à
              idade.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Os pais e cuidadores são envolvidos ativamente no processo — porque a mudança
              acontece principalmente fora das sessões, no dia a dia familiar.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              Atendimento presencial em Almada e online
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Disponível para crianças e adolescentes em todo o país, em formato
              de videochamada — especialmente útil para famílias com horários exigentes.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
