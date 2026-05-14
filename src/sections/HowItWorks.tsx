import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Stethoscope, Smile, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/config';

const STEPS = [
  {
    n: '01',
    icon: MessageCircle,
    title: 'Mande um oi pelo WhatsApp',
    desc: 'Conte rapidamente o que está procurando. Nossa equipe responde em até 2h com horários disponíveis.',
  },
  {
    n: '02',
    icon: CalendarCheck,
    title: 'Agende sua avaliação gratuita',
    desc: 'Escolha o melhor dia e horário. A consulta é completa, sem compromisso e sem cobrança.',
  },
  {
    n: '03',
    icon: Stethoscope,
    title: 'Conheça seu plano personalizado',
    desc: 'Apresentamos diagnóstico, etapas, prazos e orçamento detalhado. Você decide com toda informação na mão.',
  },
  {
    n: '04',
    icon: Smile,
    title: 'Recupere sua confiança em sorrir',
    desc: 'Tratamento conduzido por especialistas, com acompanhamento próximo até você adorar o resultado.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow !inline-flex justify-center"
          >
            Simples assim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-section mt-4 text-brand-ink"
          >
            Do primeiro contato ao seu novo sorriso
            <br />
            <span className="text-brand-mute">em 4 passos.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div
            className="hidden lg:block absolute top-[88px] left-[12%] right-[12%] h-0.5"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(4,130,178,0.3) 15%, rgba(4,130,178,0.3) 85%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Icon circle */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <span
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{ background: 'radial-gradient(circle, #0482b2 0%, transparent 70%)' }}
                  />
                  <div
                    className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-brand-line"
                    style={{
                      boxShadow: '0 10px 30px -10px rgba(4,130,178,0.25), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}
                  >
                    <step.icon size={28} strokeWidth={2} className="text-brand-primary" />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-display font-bold tabular"
                    style={{
                      background: 'linear-gradient(135deg, #0482b2 0%, #2347c6 100%)',
                      boxShadow: '0 6px 14px -2px rgba(4,130,178,0.4)',
                    }}
                  >
                    {step.n}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-brand-ink mb-2 px-2">{step.title}</h3>
                <p className="text-sm text-brand-ink-soft leading-relaxed px-3">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a href={WHATSAPP_LINKS.hero} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex">
            <MessageCircle size={20} strokeWidth={2.4} />
            Quero começar agora
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
          <p className="mt-3 text-sm text-brand-mute">Sem compromisso • Resposta em até 2h</p>
        </motion.div>
      </div>
    </section>
  );
}
