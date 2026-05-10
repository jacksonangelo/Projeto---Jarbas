import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconChild,
  IconTeen,
  IconLeaf,
  IconNodes,
  IconFamily,
  IconWaves,
} from "@/components/icons/service-icons";

const services = [
  {
    icon:        <IconChild />,
    title:       "Intervenção Infantil",
    href:        "/servicos/psicologo-infantil",
    description: "Acompanhamento especializado para crianças, com foco no desenvolvimento emocional, comportamental e social.",
    tags:        ["Infância", "Comportamento", "Emoções"],
  },
  {
    icon:        <IconTeen />,
    title:       "Atendimento a Adolescentes",
    href:        "/servicos/psicologo-infantil",
    description: "Apoio na gestão emocional, identidade, relações sociais e desafios próprios desta fase da vida.",
    tags:        ["Adolescência", "Identidade", "Relações"],
  },
  {
    icon:        <IconLeaf />,
    title:       "Terapia Individual",
    href:        "/servicos/psicologia-adultos",
    description: "Acompanhamento psicológico para adultos que procuram bem-estar, autoconhecimento e crescimento pessoal.",
    tags:        ["Adultos", "Stress", "Autoestima"],
  },
  {
    icon:        <IconNodes />,
    title:       "Intervenção baseada em ABA",
    href:        "/servicos/aba",
    description: "Análise do Comportamento Aplicada para crianças com PEA e outras necessidades de desenvolvimento.",
    tags:        ["Autismo", "PEA", "Desenvolvimento"],
  },
  {
    icon:        <IconFamily />,
    title:       "Treino Parental e Psicoeducação",
    href:        "/servicos/orientacao-parental",
    description: "Ferramentas práticas para pais que querem comunicar melhor, estabelecer limites e fortalecer a relação com os filhos.",
    tags:        ["Pais", "Família", "Limites"],
  },
  {
    icon:        <IconWaves />,
    title:       "Ansiedade e Regulação Emocional",
    href:        "/servicos/ansiedade",
    description: "Estratégias cognitivo-comportamentais para compreender e gerir a ansiedade em qualquer fase da vida.",
    tags:        ["Ansiedade", "Regulação", "TCC"],
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-beige-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-14">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Áreas de intervenção
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-balance">
            Uma resposta especializada para cada necessidade
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Cada intervenção é desenhada à medida — sem receitas iguais para
            pessoas diferentes.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="h-full">
              <Link
                href={s.href}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-transparent hover:border-green-100 transition-all duration-200 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#3A7D5C] transition-transform duration-200 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-green-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Saber mais
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={services.length * 70} className="h-full">
            <div className="bg-green-700 rounded-2xl p-6 flex flex-col justify-between text-white h-full">
              <div>
                <span className="text-3xl block mb-4">✨</span>
                <h3 className="font-display text-lg font-bold mb-2">
                  Não sabe por onde começar?
                </h3>
                <p className="text-green-100/80 text-sm leading-relaxed">
                  Fale comigo. Juntos encontramos qual a abordagem mais
                  adequada para si ou para o seu filho.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-5 py-3 rounded-full text-sm hover:bg-green-50 transition-colors"
              >
                Falar com o Jarbas
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
