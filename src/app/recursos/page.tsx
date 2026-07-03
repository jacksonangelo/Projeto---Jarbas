import type { Metadata } from "next";
import { Resources } from "@/components/sections/Resources";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title:      "Recursos Terapêuticos Gratuitos | Jarbas Garcia",
  description:
    "Materiais terapêuticos gratuitos para pais, cuidadores e profissionais: cartões de autorregulação emocional, registo ABC e outros recursos baseados em evidência.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  return (
    <>
      <Resources className="pt-32 pb-20 md:pt-36 md:pb-24" titleAs="h1" />
      <CTA />
    </>
  );
}
