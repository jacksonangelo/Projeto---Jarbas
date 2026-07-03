import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Download, Lightbulb, ArrowLeft } from "lucide-react";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { THERAPEUTIC_RESOURCES, getResourceBySlug } from "@/lib/resources";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return THERAPEUTIC_RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};

  return {
    title:      `${resource.title} | Recursos Terapêuticos · Jarbas Garcia`,
    description: resource.metaDescription,
    alternates: { canonical: `/recursos/${resource.slug}` },
  };
}

export default async function RecursoPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const Icon = resource.icon;

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-green-700 transition-colors">Início</Link>
              <ChevronRight size={14} className="text-stone-300 shrink-0" />
              <Link href="/recursos" className="hover:text-green-700 transition-colors">Recursos Terapêuticos</Link>
              <ChevronRight size={14} className="text-stone-300 shrink-0" />
              <span className="text-stone-700 font-medium">{resource.title}</span>
            </nav>

            <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6 text-green-600">
              <Icon size={26} strokeWidth={1.75} />
            </div>

            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Recurso gratuito
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-5 text-balance">
              {resource.title}
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
              {resource.shortDescription}
            </p>
          </div>

          {/* Apresentação + imagem ilustrativa */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-6 items-start">
            <div className="w-full lg:w-[40%] order-1 lg:order-2 lg:sticky lg:top-[120px]">
              <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={resource.image}
                  alt={resource.imageAlt}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-[60%] order-2 lg:order-1 bg-white rounded-2xl shadow-card p-8">
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
                Apresentação
              </h2>
              <p className="text-stone-600 leading-relaxed">{resource.intro}</p>
            </div>
          </div>

          <div className="max-w-3xl">
            {/* Instruções */}
            <div className="bg-beige-100 rounded-2xl p-8 mb-6">
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-5">
                Como utilizar
              </h2>
              <ol className="space-y-4">
                {resource.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-stone-700 text-sm leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Informação científica */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-10 flex gap-4">
              <Lightbulb size={20} className="text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">Informação científica</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{resource.scientificInfo}</p>
              </div>
            </div>

            {/* Downloads */}
            <div className="bg-white rounded-2xl shadow-card p-8 mb-10">
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-5">
                Downloads
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                {resource.downloads.map((d) => (
                  <Button key={d.href} as="a" href={d.href} download variant="primary" size="md">
                    <Download size={16} />
                    {d.label}
                  </Button>
                ))}
              </div>
            </div>

            <Link
              href="/recursos"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold text-sm transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar aos Recursos
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
