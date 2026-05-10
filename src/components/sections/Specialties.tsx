import Image from "next/image";
import logoImg     from "@/assets/logo.png";
import { Reveal } from "@/components/ui/Reveal";
import evidenceImg from "@/assets/evidence.webp";
import relacionImg from "@/assets/relacion.webp";
import familyImg   from "@/assets/family.webp";
import onlineImg   from "@/assets/online.webp";

const steps = [
  {
    number: "01",
    title:  "Primeiro contacto",
    body:   "Entre em contacto via WhatsApp ou formulário. Respondo rapidamente para agendar uma sessão inicial sem compromisso.",
  },
  {
    number: "02",
    title:  "Avaliação inicial",
    body:   "Na primeira sessão, ouço e compreendo a sua situação em detalhe. Num ambiente seguro, sem pressão e totalmente confidencial.",
  },
  {
    number: "03",
    title:  "Plano de intervenção",
    body:   "Com base na avaliação, definimos um plano claro, com objetivos concretos e adaptados às necessidades específicas.",
  },
  {
    number: "04",
    title:  "Acompanhamento contínuo",
    body:   "Sessões regulares com monitorização do progresso. Ajustamos a intervenção sempre que necessário.",
  },
];

const differentials = [
  {
    icon:  evidenceImg,
    title: "Baseado em evidências",
    body:  "Métodos validados pela investigação científica em psicologia clínica e comportamental.",
  },
  {
    icon:  relacionImg,
    title: "Relação terapêutica sólida",
    body:  "Um espaço sem julgamentos, de confiança genuína e respeito mútuo.",
  },
  {
    icon:  familyImg,
    title: "Foco na Família",
    body:  "Pais e cuidadores são parceiros ativos no processo terapêutico.",
  },
  {
    icon:  onlineImg,
    title: "Presencial e online",
    body:  "Atendimento em Almada e por videochamada para todo o país.",
  },
];

export function Specialties() {
  return (
    <>
      {/* How it works */}
      <section className="py-20 md:py-28 bg-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-green-200 font-semibold text-sm uppercase tracking-widest mb-3">
              Como funciona
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Começar é mais simples do que pensa
            </h2>
            <p className="mt-4 text-green-100/70 max-w-xl mx-auto text-base">
              Do primeiro contacto ao acompanhamento — um processo claro, humano e sem burocracia.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:block absolute top-7 h-px bg-green-500/40 z-0"
                      style={{ width: "calc(100% - 2rem)", left: "calc(100% - 0.5rem)" }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-green-600 border border-green-500 flex items-center justify-center mb-5">
                      <span className="font-display font-bold text-xl text-green-200">{step.number}</span>
                    </div>
                    <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                    <p className="text-green-100/70 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 md:py-24 bg-beige-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <Image
              src={logoImg}
              alt="Clínica de Psicologia Jarbas Garcia"
              className="h-20 w-auto mx-auto mb-5"
            />
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Porquê escolher a Clínica Jarbas Garcia
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-balance">
              Uma intervenção que faz a diferença no quotidiano
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentials.map((d, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 text-center h-full">
                  <Image src={d.icon} alt={d.title} className="w-[73px] h-[73px] object-contain mx-auto mb-4" />
                  <h3 className="font-display font-bold text-stone-900 mb-2">{d.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
