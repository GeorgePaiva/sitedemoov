import { useEffect, useRef, useState } from 'react';
import { AlertCircle, X, Phone } from 'lucide-react';
import { WHATSAPP_LINKS, PHONE_LINK } from '../lib/config';

export function EmergencyBanner() {
  const [closed, setClosed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      const h = closed ? 0 : ref.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--banner-height', `${h}px`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [closed]);

  if (closed) return null;

  return (
    <div ref={ref} className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-brand-accent via-[#a13a14] to-brand-accent text-white">
      <div className="container-page flex items-center justify-between gap-3 py-2.5 text-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative inline-flex shrink-0">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            <AlertCircle size={18} strokeWidth={2.4} className="relative" />
          </span>
          <p className="font-medium truncate">
            <span className="hidden sm:inline">Ambiente Demonstrativo:</span>
            {/* <span className="sm:hidden">Emergência?</span>{' '} */}
            <a
              // href={WHATSAPP_LINKS.emergency}
              // target="_blank"
              // rel="noopener noreferrer"
              // className="underline underline-offset-2 font-semibold hover:text-white/90"
            >
              Nenhuma funcionalidade comercial aqui exibida possui validade jurídica, contratual ou operacional. Dados eventualmente exibidos são fictícios ou utilizados apenas para fins ilustrativos.
            </a>
            <span className="hidden md:inline"> — chamamos você em até 5 minutos.</span>
          </p>
        </div>
        {/* <div className="flex items-center gap-1.5">
          <a
            href={PHONE_LINK}
            aria-label="Ligar para emergência"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
          >
            <Phone size={14} strokeWidth={2.4} />
          </a>
          <button
            type="button"
            onClick={() => setClosed(true)}
            aria-label="Fechar aviso"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/15 transition-colors"
          >
            <X size={16} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
