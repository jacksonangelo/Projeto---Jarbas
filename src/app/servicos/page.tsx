import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import {
  IconChild,
  IconTeen,
  IconLeaf,
  IconNodes,
  IconFamily,
  IconWaves,
  IconAssessment,
} from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Serviços | Psicólogo em Almada · Jarbas Garcia",
  description:
    "Serviços de psicologia do Jarbas Garcia em Almada: intervenção infantil, ABA, ansiedade, treino parental, terapia individual e avaliação comportamental.",
  alternates: { canonical: "/servicos" },
};

const services = [
  {
    icon:        <IconChild />,
    title:       "Intervenção Infantil",
    href:        "/servicos/psicologo-infantil",
    description: "Acompanhamento especializado para crianças, com foco no desenvolvimento emocional, comportamental e social.",
  },
  {
    icon:        <IconTeen />,
    title:       "Atendimento a Adolescentes",
    href:        "/servicos/psicologo-infantil",
    description: "Apoio na gestão emocional, identidade, relações sociais e desafios próprios da adolescência.",
  },
  {
    icon:        <IconLeaf />,
    title:       "Terapia Individual",
    href:        "/servicos/psicologia-adultos",
    description: "Acompanhamento psicológico individual para adultos que procuram bem-estar, autoconhecimento e crescimento pessoal.",
  },
  {
    icon:        <IconNodes />,
    title:       "Intervenção ABA",
    href:        "/servicos/aba",
    description: "Análise do Comportamento Aplicada para crianças com autismo (TEA) e outras necessidades de desenvolvimento.",
  },
  {
    icon:        <IconFamily />,
    title:       "Treino Parental",
    href:        "/servicos/orientacao-parental",
    description: "Ferramentas práticas para pais que querem comunicar melhor, estabelecer limites e fortalecer a relação com os filhos.",
  },
  {
    icon:        <IconWaves />,
    title:       "Ansiedade e Regulação Emocional",
    href:        "/servicos/ansiedade",
    description: "Estratégias cognitivo-comportamentais para compreender e gerir a ansiedade em qualquer fase da vida.",
  },
  {
    icon:        <IconAssessment />,
    title:       "Avaliação Comportamental",
    href:        "/servicos/avaliacao-comportamental",
    description: "Avaliação sistemática do comportamento para identificar padrões, causas e oportunidades de intervenção eficaz.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Serviços
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-balance">
              Uma resposta especializada para cada necessidade
            </h1>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">
              Cada serviço é desenhado à medida da pessoa e da sua situação.
              Selecione para saber mais sobre cada área de intervenção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group bg-white border border-beige-200 hover:border-green-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 flex gap-5 items-start"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#3A7D5C] transition-transform duration-200 group-hover:scale-110">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-bold text-lg text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-green-600 text-sm font-semibold group-hover:gap-3 transition-all">
                    Saber mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
