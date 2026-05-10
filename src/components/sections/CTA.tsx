import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-green-700 to-green-900 relative overflow-hidden">

      {/* Background decoration */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-800/40 blur-3xl" />
      </div>

      <Reveal direction="scale" className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-4xl mb-5">🌱</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
          O primeiro passo começa com uma mensagem.
        </h2>
        <p className="text-green-100/80 text-lg leading-relaxed mb-3 max-w-xl mx-auto">
          Intervenções baseadas em evidência para promover mudanças reais
          no desenvolvimento emocional.
        </p>
        <p className="text-green-100/60 text-base mb-10 max-w-xl mx-auto">
          Entre em contacto hoje. Respondo brevemente para agendarmos
          uma primeira sessão, sem pressão e sem compromisso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            <MessageCircle size={20} fill="white" strokeWidth={1.5} />
            Falar no WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            <Phone size={18} />
            {SITE.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-green-200/70 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="text-green-300">✓</span> Resposta rápida
          </span>
          <span className="hidden sm:block w-px h-4 bg-green-600" />
          <span className="flex items-center gap-1.5">
            <span className="text-green-300">✓</span> Primeira sessão sem compromisso
          </span>
          <span className="hidden sm:block w-px h-4 bg-green-600" />
          <span className="flex items-center gap-1.5">
            <span className="text-green-300">✓</span> Total confidencialidade
          </span>
        </div>
      </Reveal>
    </section>
  );
}
