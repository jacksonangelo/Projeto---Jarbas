export const SITE = {
  name:        "Jarbas Garcia | Psicólogo Clínico em Almada",
  description: "Psicólogo clínico em Almada especializado em ABA, psicologia infantil, ansiedade e treino parental. Intervenções baseadas em evidência para crianças, adolescentes e adultos.",
  url:         "https://www.psijarbas.pt",
  phone:       "+351 920 132 818",
  whatsapp:    "351920132818",
  email:       "psijarbas@gmail.com",
  address:     "Almada, Portugal",
  instagram:   "https://instagram.com/psijarbas",
  crp:         "CRP 11/13047",
  opp:         "OPP 31641",
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.`;

export const NAV_LINKS = [
  { label: "Início",                 href: "/" },
  { label: "Sobre",                  href: "/sobre" },
  { label: "Serviços",               href: "/servicos" },
  { label: "Recursos Terapêuticos",  href: "/recursos" },
  { label: "Blog",                   href: "/blog" },
  { label: "Contacto",               href: "/contato" },
];

export const SERVICES = [
  {
    title:       "Intervenção Infantil",
    slug:        "psicologo-infantil",
    icon:        "child",
    description: "Acompanhamento do desenvolvimento emocional e comportamental de crianças.",
    color:       "green",
  },
  {
    title:       "Atendimento a Adolescentes",
    slug:        "psicologo-infantil",
    icon:        "teen",
    description: "Apoio especializado na gestão emocional e no desenvolvimento de competências sociais.",
    color:       "sage",
  },
  {
    title:       "Análise do Comportamento (ABA)",
    slug:        "aba",
    icon:        "brain",
    description: "Intervenção baseada em evidências para crianças com autismo e outras necessidades especiais.",
    color:       "beige",
  },
  {
    title:       "Treino Parental",
    slug:        "orientacao-parental",
    icon:        "family",
    description: "Ferramentas práticas para pais que querem responder melhor aos filhos.",
    color:       "green",
  },
  {
    title:       "Terapia Individual",
    slug:        "psicologia-adultos",
    icon:        "person",
    description: "Acompanhamento psicológico individual para adultos em busca de bem-estar e crescimento pessoal.",
    color:       "sage",
  },
  {
    title:       "Ansiedade e Regulação Emocional",
    slug:        "ansiedade",
    icon:        "heart",
    description: "Estratégias eficazes para compreender e gerir a ansiedade em qualquer fase da vida.",
    color:       "beige",
  },
  {
    title:       "Avaliação Comportamental",
    slug:        "avaliacao-comportamental",
    icon:        "chart",
    description: "Avaliação detalhada do comportamento para orientar uma intervenção personalizada e eficaz.",
    color:       "green",
  },
];
