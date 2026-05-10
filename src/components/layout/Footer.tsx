import Link from "next/link";
import { MessageCircle, Instagram, Mail, MapPin, Phone, Youtube, Linkedin } from "lucide-react";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold text-white mb-1">
              Jarbas Garcia
            </h3>
            <p className="text-green-200 text-sm mb-5">
              Psicólogo Clínico · {SITE.opp} · {SITE.crp}
            </p>
            <p className="text-green-100/80 text-sm leading-relaxed max-w-xs">
              Clínica de Psicologia Jarbas Garcia — atendimento especializado para
              crianças, adolescentes e adultos, em Almada e online.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@jarbasangelo368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jarbas-%C3%A2ngelo-peroba-garcia-9a3739b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-green-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-green-300 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-100/80 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={15} className="text-green-400 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-green-100/80 hover:text-white text-sm transition-colors"
                >
                  <Mail size={15} className="text-green-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-green-100/80 text-sm">
                <MapPin size={15} className="text-green-400 shrink-0 mt-0.5" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-green-100/80 text-sm">
                <Phone size={15} className="text-green-400 shrink-0" />
                <span>Atendimento presencial e online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-green-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-green-300/60 text-xs">
          <p>© {new Date().getFullYear()} Clínica de Psicologia Jarbas Garcia. Todos os direitos reservados.</p>
          <p>Membro da Ordem dos Psicólogos Portugueses · {SITE.opp}</p>
        </div>
      </div>
    </footer>
  );
}
