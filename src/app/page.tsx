import type { Metadata } from "next";
import { Hero }         from "@/components/sections/Hero";
import { Problems }     from "@/components/sections/Problems";
import { Services }     from "@/components/sections/Services";
import { About }        from "@/components/sections/About";
import { Specialties }  from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA }          from "@/components/sections/CTA";

export const metadata: Metadata = {
  title:      "Psicólogo em Almada | ABA, Psicologia Infantil e Ansiedade",
  description:
    "Jarbas Garcia — psicólogo clínico em Almada especializado em ABA, psicologia infantil, ansiedade e treino parental. Atendimento presencial e online. OPP 31641.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <About />
      <Specialties />
      <Testimonials />
      <CTA />
    </>
  );
}
