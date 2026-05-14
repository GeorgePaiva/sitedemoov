import { motion } from 'framer-motion';
import { ArrowUpRight, Smile, Sparkles, Zap, Stethoscope, Frown, Crown } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/config';

type Specialty = {
  title: string;
  desc: string;
  icon: typeof Smile;
  highlight?: string;
  span?: 'tall' | 'wide' | 'normal';
  bg: string;
  accent: string;
};

const SPECIALTIES: Specialty[] = [
  {
    title: 'Implantes Dentários',
    desc: 'Substituição completa de dentes perdidos com técnica de carga imediata. Resultado natural, função total — e em alguns casos, prótese provisória no mesmo dia.',
    icon: Crown,
    highlight: 'Carga imediata disponível',
    span: 'tall',
    bg: 'linear-gradient(135deg, #0482b2 0%, #2347c6 100%)',
    accent: 'text-white',
  },
  {
    title: 'Clareamento Dental',
    desc: 'Tons mais brancos em poucas sessões, com protocolos que minimizam sensibilidade. Técnicas a laser e moldeira personalizada.',
    icon: Sparkles,
    highlight: 'Laser e moldeira',
    span: 'wide',
    bg: 'white',
    accent: 'text-brand-accent',
  },
  {
    title: 'Ortodontia',
    desc: 'Aparelhos fixos, autoligados e alinhadores invisíveis. Para todas as idades.',
    icon: Smile,
    highlight: 'Aparelhos invisíveis',
    span: 'wide',
    bg: 'linear-gradient(135deg, #fefbf7 0%, #fff5e8 100%)',
    accent: 'text-brand-accent',
  },
  {
    title: 'Estética Dental',
    desc: 'Lentes de contato, facetas e harmonização do sorriso. Beleza com naturalidade.',
    icon: Sparkles,
    span: 'normal',
    bg: 'linear-gradient(135deg, #f0f6f9 0%, #e1eff5 100%)',
    accent: 'text-brand-secondary',
  },
  {
    title: 'Próteses Dentárias',
    desc: 'Próteses fixas, móveis, sobre implante e em cerâmica de alta estética. Devolvendo função e confiança.',
    icon: Crown,
    span: 'normal',
    bg: 'white',
    accent: 'text-brand-primary',
  },
  {
    title: 'Endodontia',
    desc: 'Tratamento de canal indolor com tecnologia rotatória. Salvando dentes que pareciam perdidos.',
    icon: Stethoscope,
    span: 'normal',
    bg: 'white',
    accent: 'text-brand-secondary',
  },
  {
    title: 'Periodontia',
    desc: 'Cuidado completo das gengivas: limpeza profunda, raspagem e cirurgias estéticas. Base saudável para qualquer tratamento.',
    icon: Zap,
    span: 'wide',
    bg: 'linear-gradient(135deg, #f5f9fb 0%, #e8f4f8 100%)',
    accent: 'text-brand-primary',
  },
  {
    title: 'Odontopediatria',
    desc: 'Atendimento acolhedor para crianças desde o primeiro dentinho. Prevenção que dura a vida toda.',
    icon: Frown,
    span: 'normal',
    bg: 'white',
    accent: 'text-brand-accent',
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="relative py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Especialidades
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-section mt-4 text-brand-ink"
            >
              Uma equipe completa para
              <br />
              cada estágio do seu <span className="underline-brand">cuidado</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-brand-ink-soft leading-relaxed lg:ml-auto lg:max-w-md"
          >
            De uma limpeza preventiva até uma reabilitação completa: nossos especialistas trabalham juntos para entregar o
            melhor resultado.
          </motion.p>
        </div>

        {/* Masonry-like grid (CSS columns for true Pinterest feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(220px,auto)]">
          {SPECIALTIES.map((s, i) => {
            const spanClass =
              s.span === 'tall'
                ? 'sm:row-span-2 lg:row-span-2'
                : s.span === 'wide'
                ? 'lg:col-span-2'
                : '';
            const isDark = s.bg.includes('gradient') && s.bg.includes('#0482b2');
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative rounded-3xl overflow-hidden border border-brand-line/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${spanClass}`}
                style={{ background: s.bg, minHeight: s.span === 'tall' ? '460px' : '240px' }}
              >
                {/* Decorative dot pattern in dark cards */}
                {isDark && (
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      maskImage: 'radial-gradient(ellipse 60% 50% at 80% 30%, black, transparent 70%)',
                    }}
                  />
                )}

                <a
                  href={WHATSAPP_LINKS.service(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col h-full p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                        isDark
                          ? 'bg-white/15 backdrop-blur text-white border border-white/20'
                          : 'bg-brand-cream text-brand-primary'
                      }`}
                    >
                      <s.icon size={22} strokeWidth={2} />
                    </div>
                    <span
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover:scale-110 ${
                        isDark
                          ? 'bg-white/15 text-white group-hover:bg-white/25'
                          : 'bg-white text-brand-ink border border-brand-line group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary'
                      }`}
                    >
                      <ArrowUpRight size={16} strokeWidth={2.4} className="transition-transform group-hover:rotate-45" />
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3
                      className={`font-display font-semibold text-xl sm:text-2xl tracking-tight ${
                        isDark ? 'text-white' : 'text-brand-ink'
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 text-[0.95rem] leading-relaxed flex-1 ${
                        isDark ? 'text-white/80' : 'text-brand-ink-soft'
                      }`}
                    >
                      {s.desc}
                    </p>

                    {s.highlight && (
                      <div
                        className={`mt-5 inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight backdrop-blur border ${
                          isDark
                            ? 'bg-white/15 text-white border-white/20'
                            : 'bg-white/90 text-brand-ink border-brand-line/70 shadow-sm'
                        }`}
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse ${
                            isDark ? 'bg-brand-whatsapp' : 'bg-brand-primary'
                          }`}
                        />
                        {s.highlight}
                      </div>
                    )}

                    {!s.highlight && (
                      <p
                        className={`mt-5 text-xs font-display font-medium ${
                          isDark ? 'text-white/70' : 'text-brand-primary'
                        }`}
                      >
                        Saiba mais →
                      </p>
                    )}
                  </div>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
