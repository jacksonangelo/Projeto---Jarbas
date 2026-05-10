import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconFamily } from "@/components/icons/service-icons";

export const metadata: Metadata = {
  title:      "Treino Parental em Almada | Apoio a Pais e Famílias",
  description:
    "Treino parental em Almada com o psicólogo Jarbas Garcia. Ferramentas práticas para pais gerirem comportamentos difíceis, estabelecerem limites e fortalecerem a relação com os filhos.",
  alternates: { canonical: "/servicos/orientacao-parental" },
};

export default function OrientacaoParentalPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#3A7D5C]">
            <IconFamily />
          </div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Serviço</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
            Treino Parental
          </h1>
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Suporte especializado para pais e cuidadores que querem responder
            melhor aos filhos — com mais confiança, consistência e menos culpa.
          </p>

          <div className="bg-white rounded-2xl shadow-card p-8 mb-6">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Para que serve o treino parental?
            </h2>
            <ul className="space-y-3">
              {[
                "Gerir comportamentos difíceis e birras sem perder o controlo",
                "Estabelecer limites de forma firme e amorosa",
                "Melhorar a comunicação com a criança ou adolescente",
                "Compreender o desenvolvimento infantil e o que é esperado",
                "Criar rotinas e estrutura familiar estável",
                "Apoiar filhos em momentos de crise (divórcio, luto, mudanças)",
                "Implementar estratégias ABA no quotidiano (para pais de crianças com TEA)",
                "Fortalecer a vinculação e a relação afetiva",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-beige-100 rounded-2xl p-8 mb-6">
            <h2 className="font-display text-xl font-bold text-stone-900 mb-3">
              Como funciona?
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              O treino parental começa por compreender o contexto familiar, os
              padrões de interação e os desafios específicos. A partir daí,
              trabalhamos de forma prática — com estratégias concretas para
              aplicar no dia a dia, não apenas teoria.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              As sessões podem ser individuais ou em casal, presencialmente
              em Almada ou por videochamada.
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              Não precisa de estar em crise para pedir ajuda
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              O treino parental é igualmente valioso como prevenção —
              para pais que querem fortalecer a relação com os filhos
              e sentir-se mais seguros no papel de cuidadores.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
