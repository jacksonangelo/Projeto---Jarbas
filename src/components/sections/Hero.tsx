import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL, SITE } from "@/lib/constants";
import profilePhoto from "@/assets/perfil.png";

const badges = [
  "Psicólogo Licenciado",
  "Mestre em Pisicopatologia do Desenvolvimento",
  "Presencial em Almada e Online",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-beige-100 via-white to-green-50">

      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-beige-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">

            <div className="opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <ShieldCheck size={12} />
                <span>Psicólogo Clínico · Almada</span>
              </div>
            </div>

            <h1 className="opacity-0 animate-fade-up animate-delay-100 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight text-balance mb-6">
              Um espaço seguro{" "}
              <span className="text-green-600 relative">
                para crescer e florescer
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M2 9C50 3 100 1 150 5C200 9 250 7 298 3"
                    stroke="#5B9B7A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>.
            </h1>

            <p className="opacity-0 animate-fade-up animate-delay-200 text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
              Intervenções baseadas em evidência para promover mudanças reais
              no desenvolvimento emocional de crianças, adolescentes e adultos.
            </p>

            <ul className="opacity-0 animate-fade-up animate-delay-300 flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-stone-600">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="opacity-0 animate-fade-up animate-delay-400 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-4 rounded-full shadow-green hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
              >
                Agendar Consulta
                <ArrowRight size={16} />
              </a>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-200 text-green-700 hover:border-green-400 hover:bg-green-50 font-semibold px-7 py-4 rounded-full transition-all duration-200 text-sm md:text-base"
              >
                Conhecer o psicólogo
              </Link>
            </div>
          </div>

          {/* Visual card */}
          <div className="opacity-0 animate-fade-up animate-delay-200 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">

              {/* Main photo */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-card-hover">
                <Image
                  src={profilePhoto}
                  alt="Jarbas Garcia — Psicólogo Clínico"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                  priority
                />
                <div aria-hidden className="absolute inset-0 bg-green-900/10" />
              </div>

              {/* Floating stat cards — hidden on xs to avoid overflow */}
              <div className="hidden sm:flex absolute -left-8 top-8 bg-white rounded-2xl shadow-card p-3.5 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                  🧩
                </div>
                <div>
                  <p className="text-xs text-stone-500">Especialidade</p>
                  <p className="text-sm font-bold text-stone-800">ABA & Infantil</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-6 bottom-12 bg-white rounded-2xl shadow-card p-3.5 items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center text-lg">
                  💻
                </div>
                <div>
                  <p className="text-xs text-stone-500">Modalidade</p>
                  <p className="text-sm font-bold text-stone-800">Online & Presencial</p>
                </div>
              </div>

              <div className="absolute -bottom-4 left-4 sm:left-8 bg-white rounded-2xl shadow-card p-3.5 flex items-center gap-3 animate-float" style={{ animationDelay: "0.8s" }}>
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-stone-500">Registado na OPP</p>
                  <p className="text-sm font-bold text-stone-800">{SITE.opp}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 text-xs animate-bounce">
        <span className="hidden sm:block">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
