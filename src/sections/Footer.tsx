import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight, Mail } from 'lucide-react';
import { Logo } from '../components/Logo';
import { BUSINESS, WHATSAPP_LINKS, PHONE_LINK } from '../lib/config';

const navLinks = [
  { label: 'Início', href: '#top' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

const hours = [
  { day: 'Seg – Sex', time: '08h – 19h' },
  { day: 'Sábado', time: '08h – 13h' },
  { day: 'Domingo', time: 'Fechado' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0482b2 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2347c6 0%, transparent 70%)' }}
      />

      <div className="relative max-w-page mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-[1fr_auto] md:gap-12 md:p-12"
        >
          <div>
            <span className="eyebrow text-white/60">Pronto pra começar?</span>
            <h3 className="font-display mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Agende sua avaliação <span className="text-brand-cream">sem compromisso</span>
            </h3>
            <p className="mt-3 max-w-lg text-white/70">
              Resposta em até 2 horas pelo WhatsApp. Atendimento humanizado, planejamento personalizado e parcelamento que cabe no seu bolso.
            </p>
          </div>
          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta group inline-flex items-center justify-center gap-2 self-start md:self-center"
            aria-label="Falar com a Odonto Vital pelo WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="dark" size="md" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Seu sorriso em boas mãos em {BUSINESS.city}. Odontologia humanizada com tecnologia de ponta, planejamento individualizado e resultados que duram.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm w-fit">
              <span className="text-amber-400">★</span>
              <span className="font-semibold text-white">{BUSINESS.rating}</span>
              <span className="text-white/60">·</span>
              <span className="text-white/70">{BUSINESS.reviewsCount} avaliações no Google</span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-cream transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Contato
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-cream/80" />
                <span className="text-white/80">{BUSINESS.city}</span>
              </li>
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex gap-3 text-white/80 transition-colors hover:text-white"
                  aria-label="Ligar para Odonto Vital"
                >
                  <Phone className="h-5 w-5 shrink-0 text-brand-cream/80" />
                  <span>(85) 3382-1191</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-brand-cream/80" />
                  <span>WhatsApp 24h</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-cream/80" />
                <span className="text-white/80">contato@odontovital.com.br</span>
              </li>
              <li className="pt-2">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-brand-cream/80 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    {hours.map((h) => (
                      <div key={h.day} className="flex gap-3">
                        <span className="text-white/60 w-20">{h.day}</span>
                        <span className="text-white/90 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60">
            <a href="#" className="transition-colors hover:text-white">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-white">Termos de Uso</a>
            <span className="text-white/30">·</span>
            <span>CRO-CE ativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
