import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, BookOpen, ShieldCheck } from "lucide-react";
import profilePhoto from "@/assets/jarbas.png";
import { Reveal } from "@/components/ui/Reveal";

const credentials = [
  { icon: ShieldCheck, label: "Psicólogo registado na OPP — nº 31641" },
  { icon: Award,       label: "Especialista em Análise do Comportamento (ABA)" },
  { icon: BookOpen,    label: "Mestre em Psicopatologia do Desenvolvimento" },
];

export function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual */}
          <Reveal direction="left">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-card-hover">
                  <Image
                    src={profilePhoto}
                    alt="Jarbas Garcia — Psicólogo Clínico em Almada"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-beige-100 border border-beige-200 rounded-2xl px-5 py-4 shadow-card">
                  <p className="text-xs text-stone-500">Registado na OPP</p>
                  <p className="text-sm font-display font-bold text-green-700 mt-0.5">nº 31641</p>
                </div>

                <div
                  aria-hidden
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-green-100 -z-10"
                />
              </div>
            </div>
          </Reveal>

          {/* Text content */}
          <Reveal direction="right" delay={100}>
            <div>
              <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Sobre mim
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-5 text-balance">
                Ciência aplicada à vida real — com rigor e humanidade
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Sou o <strong>Jarbas Garcia</strong>, psicólogo clínico registado na Ordem dos
                Psicólogos Portugueses (OPP 31641) e no Conselho Regional de Psicologia
                (CRP 11/13047). A minha prática é orientada por um princípio central:
                as intervenções têm de funcionar na vida real.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Trabalho com crianças, adolescentes, adultos e famílias em Almada e
                online, com especialização em ABA, ansiedade e competências socioemocionais.
                Cada acompanhamento é desenhado à medida — sem atalhos, sem receitas iguais
                para pessoas diferentes.
              </p>

              <ul className="space-y-3 mb-8">
                {credentials.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-green-700" />
                    </div>
                    <span className="text-stone-700 text-sm">{label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all group"
              >
                Saber mais sobre a minha abordagem
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
