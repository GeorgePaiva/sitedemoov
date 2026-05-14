import { motion } from 'framer-motion';
import { Star, Quote, PlayCircle, BadgeCheck } from 'lucide-react';
import { BUSINESS } from '../lib/config';

type Testimonial = {
  name: string;
  initials: string;
  treatment: string;
  text: string;
  color: string;
  videoBadge?: boolean;
  duration?: string;
};

const FEATURED: Testimonial = {
  name: 'Mariana B.',
  initials: 'MB',
  treatment: 'Lentes de contato dental + Clareamento',
  duration: '4 meses de tratamento',
  text:
    'Tinha vergonha de sorrir por causa dos meus dentes amarelados e desalinhados. Conheci a Odonto Vital pelas avaliações no Google e, sinceramente, foi uma das melhores decisões da minha vida. A equipe me explicou tudo com paciência, fez um plano que coube no meu bolso e o resultado superou cada expectativa. Hoje sorrio em todas as fotos — e meu marido até reclama que falo demais agora.',
  color: 'from-brand-primary to-brand-secondary',
  videoBadge: true,
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rafael S.',
    initials: 'RS',
    treatment: 'Implante dentário + Coroa',
    text:
      'Perdi um dente em um acidente e fiquei meses evitando sair. Em 3 visitas o implante estava colocado e o resultado é incrível — ninguém percebe. Atendimento impecável do início ao fim.',
    color: 'from-brand-secondary to-brand-primary',
  },
  {
    name: 'Patrícia L.',
    initials: 'PL',
    treatment: 'Ortodontia (alinhador invisível)',
    text:
      'Já indiquei para vários amigos. Equipe super atenciosa, ambiente limpíssimo e modernos. Parcelaram no cartão e a Dra. Camila acompanhou cada etapa. Melhor de Maracanaú, sem dúvida.',
    color: 'from-brand-accent to-brand-primary',
  },
  {
    name: 'João V.',
    initials: 'JV',
    treatment: 'Avaliação + Limpeza profunda',
    text:
      'Cheguei com medo (sou daquele tipo que evita dentista por anos). Saí da primeira consulta tão tranquilo que voltei na semana seguinte para começar o tratamento. Recomendo de olhos fechados.',
    color: 'from-brand-primary to-brand-accent',
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-brand-cream to-white">
      <div className="container-page">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            Histórias reais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-section mt-4 text-brand-ink"
          >
            Mais de <span className="tabular">{BUSINESS.clientsServed.toLocaleString('pt-BR')}</span> sorrisos transformados
            <br />
            <span className="text-brand-mute font-medium">— e contando.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-lg text-brand-ink-soft max-w-2xl"
          >
            Cada paciente carrega uma história. Aqui estão algumas das que nos emocionam todo dia.
          </motion.p>
        </div>

        {/* Layout: 1 destaque + 3 menores */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
          {/* FEATURED — big */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] p-8 lg:p-10 noise-overlay"
            style={{
              background: 'linear-gradient(135deg, #0a1929 0%, #0c2640 50%, #0482b2 100%)',
            }}
          >
            {/* Decorative quote mark */}
            <Quote
              className="absolute top-6 right-6 text-white/10"
              size={120}
              strokeWidth={1.2}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" strokeWidth={0} />
                ))}
                <span className="ml-2 text-xs font-semibold text-white/70 inline-flex items-center gap-1">
                  <BadgeCheck size={14} className="text-brand-whatsapp" /> Avaliação verificada
                </span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2rem] leading-[1.2] text-white tracking-tight">
                "{FEATURED.text}"
              </blockquote>

              <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`avatar-initials w-14 h-14 bg-gradient-to-br ${FEATURED.color} text-lg ring-2 ring-white/20`}
                  >
                    {FEATURED.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-lg">{FEATURED.name}</p>
                    <p className="text-sm text-white/65">
                      {FEATURED.treatment}
                      {FEATURED.duration && <span className="text-white/40"> • {FEATURED.duration}</span>}
                    </p>
                  </div>
                </div>

                {FEATURED.videoBadge && (
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-medium transition-colors"
                  >
                    <PlayCircle size={18} className="text-brand-whatsapp" />
                    Ver depoimento em vídeo
                  </button>
                )}
              </div>
            </div>
          </motion.article>

          {/* Smaller testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`avatar-initials w-11 h-11 bg-gradient-to-br ${t.color} text-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display font-semibold text-brand-ink text-[0.95rem]">{t.name}</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} size={11} fill="#fbbf24" strokeWidth={0} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-brand-primary font-medium mt-0.5">{t.treatment}</p>
                    <p className="text-sm text-brand-ink-soft leading-relaxed mt-2.5">{t.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Trust footer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5 px-6 rounded-2xl bg-white border border-brand-line shadow-card"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#fbbf24" strokeWidth={0} />
              ))}
            </div>
            <span className="font-display font-bold text-brand-ink tabular">{BUSINESS.rating}</span>
            <span className="text-sm text-brand-mute">no Google</span>
          </div>
          <span className="hidden sm:inline text-brand-line">|</span>
          <p className="text-sm text-brand-ink-soft">
            <span className="tabular font-bold text-brand-ink">{BUSINESS.reviewsCount}</span> avaliações verificadas
          </p>
          <span className="hidden sm:inline text-brand-line">|</span>
          <p className="text-sm text-brand-ink-soft inline-flex items-center gap-1.5">
            <BadgeCheck size={16} className="text-brand-primary" /> Pacientes reais, depoimentos reais
          </p>
        </motion.div>
      </div>
    </section>
  );
}
