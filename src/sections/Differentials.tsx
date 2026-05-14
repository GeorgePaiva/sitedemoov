import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, HeartHandshake, Sparkles, CreditCard } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: 'Equipe multidisciplinar',
    desc: '6 especialistas certificados sob o mesmo teto. Seu tratamento completo sem precisar correr de clínica em clínica.',
    accent: 'from-brand-primary to-brand-secondary',
  },
  {
    icon: HeartHandshake,
    title: 'Avaliação gratuita',
    desc: 'Primeira consulta sem compromisso, sem cobrança escondida. Saia com um plano claro e orçamento detalhado.',
    accent: 'from-brand-whatsapp to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Tecnologia de ponta',
    desc: 'Scanner 3D, radiografia digital e estúdio fotográfico para planejamento preciso de cada caso.',
    accent: 'from-brand-secondary to-brand-primary',
  },
  {
    icon: CreditCard,
    title: 'Parcelamos no cartão',
    desc: 'Até 12x sem juros, Pix com desconto, boleto e financiamento próprio. O tratamento que cabe no seu bolso.',
    accent: 'from-amber-500 to-brand-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia em todos os tratamentos',
    desc: 'Garantia escrita para próteses, implantes e tratamentos estéticos. Seu sorriso protegido por muito mais tempo.',
    accent: 'from-brand-primary to-brand-primary-dark',
  },
  {
    icon: Clock,
    title: 'Atendimento humanizado',
    desc: 'Sem fila de espera, sem pressa. Cada consulta tem o tempo necessário para você se sentir realmente cuidado.',
    accent: 'from-brand-accent to-amber-600',
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-brand-cream noise-overlay">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Por que Odonto Vital
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-section mt-4 text-brand-ink"
            >
              Não somos apenas mais uma clínica.
              <br />
              <span className="text-brand-mute">Somos o seu novo padrão de cuidado.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-brand-ink-soft leading-relaxed lg:max-w-md lg:ml-auto"
          >
            Cada detalhe da nossa clínica foi pensado para devolver aquilo que mais importa: a sua vontade de sorrir.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card p-7 group relative overflow-hidden"
            >
              {/* Hover background glow */}
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br ${d.accent}`}
                style={{ filter: 'blur(40px)' }}
                aria-hidden="true"
              />
              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${d.accent} text-white shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  style={{ boxShadow: '0 10px 24px -6px rgba(4, 130, 178, 0.35)' }}
                >
                  <d.icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand-ink mb-2.5 tracking-tight">{d.title}</h3>
                <p className="text-[0.95rem] text-brand-ink-soft leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
