import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_LINK, WHATSAPP_LINKS, BUSINESS } from '../lib/config';

const NAV_LINKS = [
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sorrisos', label: 'Sorrisos' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-brand-line/60 shadow-sm' : 'bg-transparent'
        }`}
        style={{ top: 'var(--banner-height, 0px)' }}
      >
        <div className="container-page flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[0.92rem] font-medium text-brand-ink/75 hover:text-brand-primary transition-colors rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_LINK}
              aria-label={`Ligar para ${BUSINESS.phoneDisplay}`}
              className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full text-brand-primary border border-brand-line hover:border-brand-primary hover:bg-brand-cream transition-colors"
            >
              <Phone size={18} strokeWidth={2.2} />
            </a>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-display font-semibold text-white bg-brand-whatsapp hover:bg-[#1ebc56] transition-colors shadow-md"
            >
              <MessageCircle size={16} strokeWidth={2.4} />
              Agendar
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-brand-ink bg-white border border-brand-line"
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col`}
        >
          <div className="flex items-center justify-between p-5 border-b border-brand-line">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-line text-brand-ink"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3.5 text-lg font-display font-medium text-brand-ink hover:text-brand-primary border-b border-brand-line/60"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="p-5 space-y-3 border-t border-brand-line bg-brand-cream pb-safe">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full"
            >
              <MessageCircle size={18} strokeWidth={2.4} />
              Agendar pelo WhatsApp
            </a>
            <a
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white border border-brand-line text-brand-ink font-display font-medium"
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
