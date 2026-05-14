import { motion } from 'framer-motion';
import { Star, ShieldCheck, Sparkles, Award, ArrowRight } from 'lucide-react';
import { WhatsAppButton, PhoneButton } from '../components/Buttons';
import { SmartImage } from '../components/SmartImage';
import { WHATSAPP_LINKS, PHONE_LINK, BUSINESS } from '../lib/config';
import { IMAGES } from '../lib/images';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden mesh-hero noise-overlay pb-20 lg:pb-28" style={{ paddingTop: 'calc(6rem + var(--banner-height, 0px))' }}>
      {/* Mesh animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full opacity-60 blur-3xl animate-mesh-shift"
          style={{ background: 'radial-gradient(circle, rgba(4,130,178,0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[10%] right-[-15%] w-[50%] h-[50%] rounded-full opacity-50 blur-3xl animate-mesh-shift"
          style={{
            background: 'radial-gradient(circle, rgba(35,71,198,0.3) 0%, transparent 70%)',
            animationDelay: '-6s',
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] w-[45%] h-[45%] rounded-full opacity-40 blur-3xl animate-mesh-shift"
          style={{
            background: 'radial-gradient(circle, rgba(141,50,16,0.18) 0%, transparent 70%)',
            animationDelay: '-12s',
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,25,41,1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,25,41,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-line/80 shadow-sm mb-7"
            >
              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-brand-whatsapp/40 animate-ping" />
                <span className="relative inline-block w-2 h-2 rounded-full bg-brand-whatsapp" />
              </span>
              <span className="text-xs font-semibold text-brand-ink tracking-wide">
                Agenda aberta em {BUSINESS.city}
              </span>
              <span className="text-brand-mute">•</span>
              <span className="text-xs text-brand-mute">Resposta em até 2h</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="h-display text-brand-ink"
            >
              Seu <span className="underline-brand">sorriso</span>
              <br />
              em boas mãos
              <span
                className="inline-block ml-1 align-baseline"
                style={{
                  background: 'linear-gradient(135deg, #0482b2 0%, #2347c6 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                .
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 text-lg sm:text-xl text-brand-ink-soft leading-relaxed max-w-xl"
            >
              Clínica odontológica completa em {BUSINESS.city} com{' '}
              <strong className="font-semibold">6 especialidades sob o mesmo teto</strong>. Avaliação inicial gratuita,
              equipe especialista e resultados que devolvem sua confiança.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <WhatsAppButton href={WHATSAPP_LINKS.hero} size="lg">
                Quero minha avaliação gratuita
              </WhatsAppButton>
              <PhoneButton href={PHONE_LINK}>{BUSINESS.phoneDisplay}</PhoneButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 flex items-center gap-1.5 text-sm text-brand-mute"
            >
              <ShieldCheck size={16} className="text-brand-primary" strokeWidth={2.2} />
              Sem compromisso • Atendimento humanizado • Convênios aceitos
            </motion.div>

            {/* Trust bar — google reviews */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mt-10 inline-flex flex-wrap items-center gap-x-5 gap-y-4 rounded-2xl bg-white/60 backdrop-blur border border-brand-line/60 px-4 py-3 sm:px-5 sm:py-4 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-card shrink-0">
                  {/* Google "G" minimal */}
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.41-1.12 2.6-2.39 3.4v2.83h3.86c2.25-2.07 3.58-5.13 3.58-8.47z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.83c-1.07.71-2.43 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.29v3.11C3.26 21.3 7.31 24 12 24z" />
                    <path fill="#FBBC05" d="M5.27 14.43A7.16 7.16 0 0 1 4.88 12c0-.85.14-1.67.39-2.43V6.46H1.29A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.29 5.54l3.98-3.11z" />
                    <path fill="#EA4335" d="M12 4.74c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.17 15.23 0 12 0 7.31 0 3.26 2.7 1.29 6.46l3.98 3.11C6.22 6.85 8.87 4.74 12 4.74z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-brand-ink text-[15px] tabular leading-none">{BUSINESS.rating}</span>
                    <div className="flex" aria-label={`Avaliação ${BUSINESS.rating} de 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill="#fbbf24"
                          strokeWidth={0}
                          className={i < Math.floor(BUSINESS.rating) ? '' : 'opacity-30'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-brand-mute leading-tight mt-0.5">
                    <span className="tabular">{BUSINESS.reviewsCount}</span> avaliações
                  </p>
                </div>
              </div>

              <div className="w-px h-8 bg-brand-line" />

              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream text-brand-primary shrink-0">
                  <Award size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-ink text-[15px] leading-none">+{BUSINESS.yearsExperience} anos</p>
                  <p className="text-[11px] text-brand-mute leading-tight mt-0.5">de experiência</p>
                </div>
              </div>

              <div className="w-px h-8 bg-brand-line" />

              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream text-brand-secondary shrink-0">
                  <Sparkles size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-ink text-[15px] tabular leading-none">
                    +{BUSINESS.clientsServed.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-[11px] text-brand-mute leading-tight mt-0.5">pacientes</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — visual collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Mobile-only visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden mt-12"
        >
          <HeroVisual compact />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#depoimentos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-1.5 text-xs font-medium text-brand-mute hover:text-brand-primary transition-colors"
        aria-label="Continuar para depoimentos"
      >
        Explore <ArrowRight size={14} className="rotate-90" />
      </motion.a>
    </section>
  );
}

function HeroVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? 'aspect-[5/4]' : 'aspect-[4/5]'} max-w-md mx-auto`}>
      {/* Main card — foto real */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-lift bg-brand-primary">
        <SmartImage
          src={IMAGES.hero}
          alt="Paciente sorrindo após tratamento na Odonto Vital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tonalização azul brand sobre a foto, para harmonizar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(4,130,178,0.15) 0%, rgba(35,71,198,0.18) 100%)',
          }}
        />
        {/* Glow accent top */}
        <div
          className="absolute -top-12 -left-12 w-56 h-56 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.5)' }}
        />
      </div>

      {/* Floating card — rating */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 sm:-left-8 top-10 bg-white rounded-2xl shadow-card-hover p-3.5 flex items-center gap-2.5 max-w-[180px]"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill="#fbbf24" strokeWidth={0} />
            ))}
          </div>
          <p className="text-[11px] text-brand-mute mt-0.5 leading-tight">
            "Atendimento incrível, super recomendo!"
          </p>
          <p className="text-[10px] font-semibold text-brand-ink mt-0.5">— Mariana B.</p>
        </div>
      </motion.div>

      {/* Floating card — stat */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-3 sm:-right-6 bottom-12 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #25D366, #1cb053)' }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12l4-4h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
        <div>
          <p className="font-display font-bold text-brand-ink text-sm tabular">+1.1k</p>
          <p className="text-[11px] text-brand-mute leading-tight">sorrisos restaurados</p>
        </div>
      </motion.div>

      {/* Decorative dot pattern */}
      <div
        className="absolute -bottom-4 -left-8 w-20 h-20 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #0482b2 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
    </div>
  );
}
