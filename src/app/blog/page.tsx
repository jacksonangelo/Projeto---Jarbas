import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title:      "Blog | Psicologia, ABA e Parentalidade · Jarbas Garcia",
  description:
    "Artigos sobre psicologia infantil, ABA, ansiedade, competências socioemocionais e treino parental. Recursos gratuitos do psicólogo Jarbas Garcia.",
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    title:    "ABA: o que é, para quem é indicada e como funciona na prática",
    excerpt:  "A Análise do Comportamento Aplicada é muito mais do que uma sigla. Perceba os princípios, os mitos mais comuns e o que realmente acontece nas sessões.",
    date:     "Abril, 2026",
    category: "ABA",
    emoji:    "🧩",
  },
  {
    title:    "Comportamentos difíceis: o que está por trás deles e como reagir",
    excerpt:  "Birras, agressão, recusa — estes comportamentos têm sempre uma função. Compreender o porquê é o primeiro passo para responder de forma eficaz.",
    date:     "Março, 2026",
    category: "Comportamento",
    emoji:    "😤",
  },
  {
    title:    "Ansiedade em crianças: sinais precoces que os pais devem conhecer",
    excerpt:  "A ansiedade infantil é frequentemente confundida com timidez ou má disposição. Saiba quando se torna um sinal a que deve prestar atenção.",
    date:     "Março, 2026",
    category: "Ansiedade",
    emoji:    "😰",
  },
  {
    title:    "Competências socioemocionais: por que são tão importantes e como desenvolvê-las",
    excerpt:  "Identificar emoções, gerir frustrações e criar relações saudáveis — estas competências aprendem-se. Veja como apoiar o seu filho neste processo.",
    date:     "Fevereiro, 2026",
    category: "Desenvolvimento",
    emoji:    "💚",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-beige-100 to-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Recursos gratuitos para si
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Artigos sobre psicologia, ABA, parentalidade e desenvolvimento emocional
            — escritos com rigor científico e linguagem acessível.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-beige-200 hover:border-green-100 overflow-hidden transition-all duration-200 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="h-32 bg-gradient-to-br from-green-100 to-beige-100 flex items-center justify-center">
                <span className="text-5xl">{article.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-stone-400">
                    <Calendar size={11} />
                    {article.date}
                  </span>
                </div>
                <h2 className="font-display font-bold text-lg text-stone-900 mb-2 group-hover:text-green-700 transition-colors text-balance">
                  {article.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-green-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Ler artigo
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center bg-green-50 border border-green-100 rounded-2xl p-8">
          <p className="text-green-800 font-semibold mb-1">Mais artigos em breve</p>
          <p className="text-stone-500 text-sm">
            Conteúdos publicados regularmente sobre ABA, ansiedade, desenvolvimento
            infantil e parentalidade. Siga no Instagram para ser notificado.
          </p>
        </div>
      </div>
    </section>
  );
}
