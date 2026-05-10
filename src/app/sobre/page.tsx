import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, ShieldCheck, Heart, GraduationCap } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import jarbasImg    from "@/assets/jarbas.png";
import scienceImg   from "@/assets/cience-analysis .png";
import handshakeImg from "@/assets/handshake.png";
import familyImg    from "@/assets/family.png";
import rocketImg    from "@/assets/rocket.png";

export const metadata: Metadata = {
  title:      "Sobre | Jarbas Garcia · Psicólogo Clínico",
  description:
    "Conheça o Jarbas Garcia, psicólogo clínico em Almada (OPP 31641 · CRP 11/13047). Especialização em ABA, ansiedade e intervenção infantil. Atendimento presencial e online.",
  alternates: { canonical: "/sobre" },
};

const registrations = [
  { icon: ShieldCheck, label: "Membro da Ordem dos Psicólogos Portugueses",  detail: "OPP nº 31641"  },
  { icon: ShieldCheck, label: "Registado no Conselho Regional de Psicologia", detail: "CRP nº 11/13047" },
];

const formation = [
  { degree: "Licenciatura em Psicologia",                                             institution: "Universidade de Fortaleza (UNIFOR)" },
  { degree: "Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual", institution: "Centro Universitário Celso Lisboa" },
  { degree: "Mestrado em Psicopatologias do Desenvolvimento da Criança e do Adolescente", institution: "Universidade de Lisboa" },
];

const specializations = [
  { icon: BookOpen, label: "Psicologia Clínica (adultos)" },
  { icon: BookOpen, label: "Intervenção com crianças e adolescentes" },
  { icon: Award,    label: "Análise do Comportamento Aplicada (ABA)" },
  { icon: BookOpen, label: "Ansiedade e regulação emocional" },
  { icon: BookOpen, label: "Competências socioemocionais" },
];

const experience = [
  {
    years: "7 anos",
    title: "Análise do Comportamento Aplicada ao PEA",
    body:  "Implementação de estratégias comportamentais para a Perturbação do Espetro do Autismo, incluindo experiência internacional em Portugal com supervisão por BCBA.",
  },
  {
    years: "3 anos",
    title: "Atividades Socioeducativas",
    body:  "Desenvolvimento e execução de atividades direcionadas a crianças diagnosticadas com PEA.",
  },
  {
    years: "1 ano",
    title: "Acompanhamento em Ensino Regular",
    body:  "Acompanhamento de alunos com Transtornos do Desenvolvimento em instituições de ensino regular.",
  },
];

const values = [
  { icon: scienceImg,   title: "Rigor científico",    body: "Cada intervenção é sustentada por evidências — não por intuição ou modas terapêuticas." },
  { icon: handshakeImg, title: "Relação humana",       body: "A aliança terapêutica é o alicerce de qualquer mudança real. Construo confiança antes de construir planos." },
  { icon: familyImg,    title: "Foco na família",      body: "Pais e cuidadores são parceiros — não espectadores — no processo terapêutico." },
  { icon: rocketImg,    title: "Autonomia como meta",  body: "O objetivo é que a pessoa ganhe ferramentas próprias, não que dependa eternamente de acompanhamento." },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Sobre mim
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                Jarbas Garcia
              </h1>
              <p className="text-xl text-green-700 font-semibold mb-6">
                Psicólogo Clínico ·{" "}
                <span className="text-stone-500 font-normal text-base">
                  Clínica de Psicologia Jarbas Garcia
                </span>
              </p>

              {/* Registration badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {registrations.map(({ icon: Icon, label, detail }) => (
                  <div
                    key={detail}
                    className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-3 py-1.5"
                  >
                    <Icon size={13} className="text-green-600 shrink-0" />
                    <span className="text-xs font-semibold text-green-800">{detail}</span>
                  </div>
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed mb-4">
                Sou psicólogo clínico com especialização em Análise do Comportamento
                Aplicada (ABA) e intervenções cognitivo-comportamentais. A minha prática
                é orientada por um princípio central: as intervenções têm de funcionar
                na vida real — não apenas em contexto clínico.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Trabalho com crianças, adolescentes, adultos e famílias em Almada e em
                formato online para todo o país. Cada acompanhamento é desenhado à medida,
                com objetivos claros e avaliação contínua do progresso.
              </p>

              {/* Formation */}
              <div className="pt-6 border-t border-beige-200">
                <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
                  Formação académica
                </h2>
                <ul className="space-y-2.5">
                  {formation.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <GraduationCap size={14} className="text-green-600 mt-0.5 shrink-0" />
                      <span>
                        <span className="font-medium text-stone-800">{f.degree}</span>
                        <span className="text-stone-500"> — {f.institution}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-card-hover">
                  <Image
                    src={jarbasImg}
                    alt="Jarbas Garcia, Psicólogo Clínico em Almada"
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-card text-center">
                  <p className="text-xs text-stone-500">Registado na</p>
                  <p className="text-sm font-display font-bold text-green-700">OPP 31641</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-stone-900 mb-10">
            Áreas de especialização
          </h2>
          <div className="space-y-3">
            {specializations.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-beige-50 border border-beige-200 rounded-2xl p-5 hover:border-green-200 hover:shadow-card transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-green-700" />
                </div>
                <p className="font-medium text-stone-800">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-beige-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-stone-900 mb-10">
            Experiência profissional
          </h2>
          <div className="space-y-4">
            {experience.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card flex gap-6 items-start">
                <div className="shrink-0 text-center min-w-[4rem]">
                  <span className="font-display font-bold text-green-700 text-lg leading-none">
                    {item.years}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-5">
                Abordagem terapêutica
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                A minha prática integra a <strong>Análise do Comportamento Aplicada (ABA)</strong>,
                com a maior evidência científica disponível para intervenção no autismo e
                desenvolvimento comportamental, e estratégias <strong>cognitivo-comportamentais</strong>,
                eficazes para a gestão da ansiedade, regulação emocional e mudança de padrões
                de pensamento.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                Não aplico modelos de forma rígida. Cada pessoa traz consigo uma história,
                um contexto e necessidades únicas — e a intervenção tem de refletir isso.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Acredito que a psicologia deve ser acessível, clara e centrada em resultados
                que fazem sentido para quem está em acompanhamento — não apenas nas métricas
                clínicas.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "ABA",                      body: "Intervenção estruturada baseada na análise funcional do comportamento, com forte evidência para o autismo e outras necessidades de desenvolvimento." },
                { title: "Cognitivo-Comportamental",  body: "Identificação e modificação de padrões de pensamento e comportamento que mantêm o sofrimento emocional." },
                { title: "Avaliação comportamental",  body: "Análise sistemática do comportamento para identificar causas, padrões e oportunidades de intervenção eficaz." },
              ].map((item, i) => (
                <div key={i} className="bg-beige-50 border border-beige-200 rounded-2xl p-5">
                  <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart size={28} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-stone-900">
              O que orienta cada sessão
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-beige-200 rounded-2xl p-6 text-center hover:shadow-card hover:border-green-200 transition-all duration-200 hover:-translate-y-1"
              >
                <Image src={v.icon} alt={v.title} className="w-[73px] h-[73px] object-contain mx-auto mb-4" />
                <h3 className="font-display font-bold text-stone-900 mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
