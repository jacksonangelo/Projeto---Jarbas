"use client";

import { useState }      from "react";
import Image             from "next/image";
import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/constants";
import clinicaImg        from "@/assets/clinica-ambiente-infantil.webp";

const MAPS_URL =
  "https://maps.google.com/maps/place//data=!4m2!3m1!1s0xd1935178828fb19:0xde14136caed82d79?entry=s&sa=X&ved=2ahUKEwi7qILU2IuTAxWuQEEAHegSOPMQ4kB6BAgDEAA&hl=pt";

const contactCards = [
  {
    icon:  MessageCircle,
    title: "WhatsApp",
    body:  SITE.phone,
    href:  WHATSAPP_URL,
    cta:   "Enviar mensagem",
    color: "bg-[#25D366] text-white",
  },
  {
    icon:  Mail,
    title: "Email",
    body:  SITE.email,
    href:  `mailto:${SITE.email}`,
    cta:   "Enviar email",
    color: "bg-green-600 text-white",
  },
  {
    icon:  MapPin,
    title: "Localização",
    body:  "Rua Polónio Febrero Júnior 6B, Almada",
    href:  MAPS_URL,
    cta:   "Como chegar",
    color: "bg-beige-200 text-stone-800",
  },
];

const hours = [
  { day: "Segunda a Sexta", time: "08h00 – 18h00" },
  { day: "Sábado",          time: "Encerrado" },
  { day: "Domingo",         time: "Encerrado" },
];

export default function ContatoPage() {
  const [form,    setForm]    = useState({ name: "", email: "", phone: "", message: "" });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-beige-100 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Dê o primeiro passo hoje.
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto text-lg">
            Escreva pelo WhatsApp ou preencha o formulário. Responderei com
            brevidade para agendarmos a sua primeira sessão.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactCards.map(({ icon: Icon, title, body, href, cta, color }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group bg-beige-50 border border-beige-200 hover:border-green-200 rounded-2xl p-6 hover:shadow-card transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center mb-4`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-stone-900 mb-1">{title}</h3>
                <p className="text-stone-500 text-sm mb-4">{body}</p>
                <span className="text-green-600 text-sm font-semibold group-hover:underline">{cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Hours */}
      <section className="py-16 bg-beige-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <span className="text-5xl">✅</span>
                  <h2 className="font-display text-2xl font-bold text-stone-900">
                    Mensagem enviada!
                  </h2>
                  <p className="text-stone-500 max-w-xs">
                    Obrigado pelo contacto. Responderei em breve para agendarmos a sua sessão.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">
                    Envie uma mensagem
                  </h2>
                  <p className="text-stone-500 text-sm mb-6">
                    Descreva brevemente a situação. Toda a comunicação é confidencial.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Nome *
                        </label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="O seu nome"
                          className="w-full border border-beige-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all bg-beige-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Telefone
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+351 9XX XXX XXX"
                          className="w-full border border-beige-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all bg-beige-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="o-seu@email.com"
                        className="w-full border border-beige-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all bg-beige-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Como posso ajudar? *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Descreva brevemente o que o traz até aqui. Pode ser sobre si, sobre o seu filho ou sobre a sua família..."
                        className="w-full border border-beige-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all bg-beige-50 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green"
                    >
                      {loading ? (
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensagem
                        </>
                      )}
                    </button>
                    <p className="text-xs text-stone-400 text-center">
                      Os seus dados são confidenciais e nunca partilhados com terceiros.
                      Todas as comunicações são protegidas pelo sigilo profissional.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Hours + Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock size={16} className="text-green-700" />
                  </div>
                  <h3 className="font-display font-bold text-stone-900">Horários</h3>
                </div>
                <ul className="space-y-3">
                  {hours.map(({ day, time }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className="text-stone-600">{day}</span>
                      <span className={`font-medium ${time === "Encerrado" ? "text-stone-400" : "text-stone-900"}`}>
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp highlight */}
              <div className="bg-green-700 rounded-2xl p-6 text-white">
                <MessageCircle size={24} className="mb-3" fill="white" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-lg mb-2">
                  WhatsApp é mais rápido
                </h3>
                <p className="text-green-100/80 text-sm mb-4 leading-relaxed">
                  A maioria das questões são respondidas com mais rapidez pelo
                  WhatsApp. Escreva diretamente — sem formulários, sem espera.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  Abrir WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin size={16} className="text-green-700" />
                  </div>
                  <h3 className="font-display font-bold text-stone-900">Localização</h3>
                </div>
                <address className="not-italic">
                  <p className="text-stone-700 font-medium text-sm">
                    Clínica de Psicologia Jarbas Garcia
                  </p>
                  <p className="text-stone-500 text-sm mt-1">
                    Rua Polónio Febrero Júnior 6B
                  </p>
                  <p className="text-stone-500 text-sm">2810-227 Almada</p>
                </address>
                <p className="text-stone-400 text-xs mt-2 mb-4">
                  Consultas presenciais em Almada e online para todo o país.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-green-700 hover:text-green-800 text-sm font-semibold hover:underline transition-colors"
                >
                  <MapPin size={14} />
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clínica — imagem + endereço */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Esquerda — texto + endereço + botão */}
            <div>
              <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Onde estamos
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Venha conhecer a clínica
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
              Um espaço acolhedor e pensado com carinho para crianças e famílias, onde cada criança se sente segura, confortável e livre para crescer e desenvolver-se com confiança.
              </p>

              <address className="not-italic mb-8">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                    <MapPin size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 group-hover:text-green-700 transition-colors">
                      Rua Polónio Febrero Júnior 6B
                    </p>
                    <p className="text-stone-500 text-sm mt-0.5">2810-227 Almada, Portugal</p>
                  </div>
                </a>
              </address>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green"
              >
                <MapPin size={16} />
                Como chegar
              </a>
            </div>

            {/* Direita — imagem */}
            <div className="relative">
              <Image
                src={clinicaImg}
                alt="Ambiente terapêutico infantil acolhedor com decoração natural"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-md"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
