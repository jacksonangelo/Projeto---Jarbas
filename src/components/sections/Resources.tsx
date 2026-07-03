import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { THERAPEUTIC_RESOURCES } from "@/lib/resources";
import { cn } from "@/lib/utils";

interface ResourcesProps {
  className?: string;
  titleAs?:   "h1" | "h2";
}

export function Resources({ className, titleAs: Title = "h2" }: ResourcesProps) {
  return (
    <section className={cn("py-20 md:py-28 bg-gradient-to-br from-beige-100 to-white", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Gratuito
          </p>
          <Title className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-balance">
            Recursos Terapêuticos
          </Title>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-base leading-relaxed">
            Disponibilizamos gratuitamente materiais desenvolvidos para apoiar pais, cuidadores e
            profissionais na aplicação de estratégias terapêuticas baseadas em evidências. Estes
            recursos foram pensados para facilitar o trabalho realizado em consulta e promover a
            continuidade das aprendizagens em casa.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {THERAPEUTIC_RESOURCES.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <Reveal key={resource.slug} delay={i * 80}>
                <div className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5 text-green-600 group-hover:bg-green-100 transition-colors">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                    {resource.shortDescription}
                  </p>
                  <Link
                    href={`/recursos/${resource.slug}`}
                    className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold group-hover:gap-3 transition-all"
                  >
                    Ver recurso <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
