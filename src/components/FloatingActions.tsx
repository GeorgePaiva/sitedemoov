import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_LINKS, PHONE_LINK } from '../lib/config';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className={`fixed bottom-24 md:bottom-7 right-5 md:right-7 z-[60] group transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="relative inline-flex">
        <span className="pulse-ring" aria-hidden="true" />
        <span className="pulse-ring" aria-hidden="true" style={{ animationDelay: '1.2s' }} />
        <span
          className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white"
          style={{
            background: 'linear-gradient(135deg, #2ddb6f 0%, #25D366 50%, #1cb053 100%)',
            boxShadow:
              '0 12px 30px -6px rgba(37, 211, 102, 0.6), 0 6px 14px -2px rgba(37, 211, 102, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          }}
        >
          <MessageCircle size={28} strokeWidth={2.2} fill="currentColor" fillOpacity={0.08} />
        </span>
      </span>
      <span className="hidden md:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3.5 py-2 rounded-xl bg-brand-ink text-white text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none">
        Falar no WhatsApp
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-brand-ink" />
      </span>
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
      <div className="px-4 pt-3 pb-3 bg-white/95 backdrop-blur-xl border-t border-brand-line shadow-[0_-8px_24px_-12px_rgba(10,25,41,0.18)]">
        <div className="grid grid-cols-[1fr_auto] gap-2.5">
          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta w-full !py-3.5 text-sm"
          >
            <MessageCircle size={18} strokeWidth={2.4} />
            Agendar pelo WhatsApp
          </a>
          <a
            href={PHONE_LINK}
            aria-label="Ligar agora"
            className="inline-flex items-center justify-center w-14 rounded-2xl bg-white border border-brand-line text-brand-primary"
          >
            <Phone size={20} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </div>
  );
}
