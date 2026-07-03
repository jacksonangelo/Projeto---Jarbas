import { FileText, ClipboardList, type LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import copaImage from "@/assets/copa.webp";
import abcImage   from "@/assets/abc.webp";

export interface ResourceDownload {
  label: string;
  href:  string;
}

export interface TherapeuticResource {
  slug:             string;
  icon:             LucideIcon;
  title:            string;
  shortDescription: string;
  metaDescription:  string;
  image:            StaticImageData;
  imageAlt:         string;
  intro:            string;
  instructions:     string[];
  scientificInfo:   string;
  downloads:        ResourceDownload[];
}

// Novos recursos: adicionar uma entrada aqui é suficiente — listagem e página
// de detalhe (/recursos/[slug]) são geradas automaticamente a partir deste array.
export const THERAPEUTIC_RESOURCES: TherapeuticResource[] = [
  {
    slug:             "cartoes-da-copa",
    icon:             FileText,
    title:            "Cartões da Copa",
    shortDescription: "Material terapêutico personalizável para trabalhar competências de autorregulação emocional de forma lúdica através do universo do futebol.",
    metaDescription:  "Cartões da Copa — recurso terapêutico gratuito para trabalhar autorregulação emocional em crianças através do futebol. Download em PDF.",
    image:            copaImage,
    imageAlt:         "Cartões terapêuticos da Copa para autorregulação emocional",
    intro:
      "Os Cartões da Copa são um recurso lúdico-terapêutico que utiliza o universo do futebol para " +
      "ensinar e treinar competências de autorregulação emocional em crianças. Cada cartão representa " +
      "uma pequena pausa de \"1 minuto\" — à semelhança de um cartão de arbitragem — associada a uma " +
      "estratégia concreta de regulação emocional, como respiração, pausa sensorial ou verbalização de " +
      "emoções. O formato de jogo torna a aprendizagem mais acessível e motivadora, promovendo a " +
      "generalização das competências para o contexto familiar e escolar.",
    instructions: [
      "Imprima os cartões e, se preferir, monte a caixa de arrumação seguindo o modelo fornecido.",
      "Apresente os cartões à criança como um \"jogo\", explicando que cada cartão corresponde a uma pequena pausa de regulação emocional.",
      "Utilize os cartões em momentos de maior ativação emocional, preferencialmente antes que o comportamento desregulado se instale.",
      "Reforce positivamente a criança sempre que recorrer à estratégia indicada no cartão.",
      "Adapte a linguagem e os exemplos à idade e aos interesses específicos da criança.",
    ],
    scientificInfo:
      "Este recurso integra princípios da Terapia Cognitivo-Comportamental e da Análise do Comportamento " +
      "Aplicada (ABA), nomeadamente técnicas de autorregulação emocional, reforço positivo e generalização " +
      "de competências. A utilização de um tema de interesse da criança — neste caso, o futebol — é uma " +
      "estratégia amplamente reconhecida para aumentar a motivação e a adesão à intervenção.",
    downloads: [
      { label: "Download dos Cards",          href: "/pdf/cartas-copa.pdf" },
      { label: "Download do Modelo da Caixa",  href: "/pdf/modelo-para-caixa.pdf" },
    ],
  },
  {
    slug:             "registo-abc",
    icon:             ClipboardList,
    title:            "Registo ABC",
    shortDescription: "Ferramenta clínica utilizada para registar antecedentes, comportamentos e consequências, facilitando a análise funcional do comportamento infantil.",
    metaDescription:  "Registo ABC — ferramenta clínica gratuita para análise funcional do comportamento infantil (Antecedente, Comportamento, Consequência). Download em PDF.",
    image:            abcImage,
    imageAlt:         "Modelo de Registo ABC para análise funcional do comportamento",
    intro:
      "O Registo ABC é um instrumento clínico fundamental na Análise do Comportamento, utilizado para " +
      "documentar de forma sistemática os Antecedentes, o Comportamento observado e as Consequências " +
      "(ABC) de episódios de comportamento disruptivo. Este registo permite identificar padrões " +
      "funcionais do comportamento, apoiando a construção de planos de intervenção individualizados e " +
      "eficazes, em estreita articulação entre a família e o acompanhamento clínico.",
    instructions: [
      "Utilize este documento para registar situações de comportamento disruptivo à medida que ocorrem.",
      "Preencha cada coluna de forma clara e objetiva: o que aconteceu antes (antecedente), o que a criança fez (comportamento) e o que aconteceu depois (consequência).",
      "Registe também a data, o horário e a duração aproximada de cada episódio.",
      "Sempre que possível, acrescente notas ou detalhes adicionais relevantes no final do registo.",
      "Traga o registo preenchido à consulta, para apoiar a análise funcional do comportamento.",
    ],
    scientificInfo:
      "O registo ABC (Antecedente-Comportamento-Consequência) é uma das ferramentas mais utilizadas na " +
      "Análise Funcional do Comportamento, permitindo compreender a função de um comportamento e desenhar " +
      "estratégias de intervenção baseadas em evidência.",
    downloads: [
      { label: "Download do Registo ABC", href: "/pdf/registro-abc.pdf" },
    ],
  },
];

export function getResourceBySlug(slug: string): TherapeuticResource | undefined {
  return THERAPEUTIC_RESOURCES.find((r) => r.slug === slug);
}
