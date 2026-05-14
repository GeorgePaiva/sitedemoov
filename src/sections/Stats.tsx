import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, Smile } from 'lucide-react';
import { BUSINESS } from '../lib/config';

type Stat = {
  icon: typeof Star;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  {
    icon: Star,
    value: BUSINESS.rating,
    decimals: 1,
    label: 'no Google',
    sub: `${BUSINESS.reviewsCount} avaliações`,
  },
  { icon: Users, value: BUSINESS.clientsServed, prefix: '+', label: 'pacientes', sub: 'sorrisos transformados' },
  { icon: Award, value: BUSINESS.yearsExperience, prefix: '+', label: 'anos', sub: 'cuidando da sua saúde bucal' },
  { icon: Smile, value: BUSINESS.specialtiesCount, label: 'especialidades', sub: 'sob o mesmo teto' },
];

function CountUp({ value, decimals = 0, duration = 1.5, active }: { value: number; decimals?: number; duration?: number; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const animate = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = (t - startRef.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, active]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals).replace('.', ',') : Math.floor(display).toLocaleString('pt-BR');
  return <span className="tabular">{formatted}</span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="numeros" className="relative py-20 lg:py-24 bg-white border-y border-brand-line">
      <div className="container-page" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="eyebrow !inline-flex justify-center"
          >
            Em números
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-section mt-4 text-brand-ink"
          >
            Confiança que se constrói
            <br />
            <span className="text-brand-mute">um sorriso de cada vez.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-line rounded-3xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-6 sm:p-8 text-center"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 text-brand-primary"
                style={{ background: 'linear-gradient(135deg, #f0f6f9, #e1eff5)' }}
              >
                <stat.icon size={22} strokeWidth={2} fill={stat.icon === Star ? '#fbbf24' : 'none'} stroke={stat.icon === Star ? '#fbbf24' : 'currentColor'} />
              </div>
              <p className="font-display font-bold text-4xl sm:text-5xl text-brand-ink leading-none">
                {stat.prefix}
                <CountUp value={stat.value} decimals={stat.decimals} active={inView} />
                {stat.suffix}
              </p>
              <p className="mt-2 font-display font-medium text-base text-brand-primary">{stat.label}</p>
              <p className="text-xs text-brand-mute mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
