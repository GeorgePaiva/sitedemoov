import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { WHATSAPP_LINKS, BUSINESS } from '../lib/config';
import { IMAGES } from '../lib/images';

export function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-brand-cream overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md rounded-[2.5rem] overflow-hidden shadow-lift">
              <SmartImage
                src={IMAGES.clinic}
                alt="Consultório moderno da Odonto Vital"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle brand tint */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(4,130,178,0.0) 50%, rgba(10,25,41,0.25) 100%)',
                }}
              />
            </div>

            {/* Floating quote */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 sm:-right-8 max-w-[260px] bg-white p-5 rounded-2xl shadow-card-hover"
            >
              <Quote size={20} className="text-brand-primary opacity-30 mb-1" />
              <p className="text-sm text-brand-ink-soft leading-relaxed italic">
                "Nosso compromisso é fazer você se sentir cuidado — antes, durante e depois do tratamento."
              </p>
              <p className="text-xs font-display font-semibold text-brand-ink mt-2">
                — Equipe Odonto Vital
              </p>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Sobre a Odonto Vital
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-section mt-4 text-brand-ink"
            >
              Há <span className="tabular">{BUSINESS.yearsExperience}</span> anos cuidando de quem mais importa:
              <br />
              <span className="underline-brand">você</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-lg text-brand-ink-soft leading-relaxed"
            >
              A Odonto Vital nasceu em {BUSINESS.city} com uma missão simples: tornar a odontologia de qualidade acessível,
              próxima e verdadeiramente humana. Cada paciente entra aqui como uma pessoa — não um número.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-brand-ink-soft leading-relaxed"
            >
              Reunimos especialistas em 6 áreas, tecnologia de ponta e um ambiente projetado para quebrar o medo
              tradicional do dentista. O resultado: mais de 1.100 sorrisos restaurados e uma das maiores notas no Google
              da região.
            </motion.p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3.5">
              {[
                { icon: ShieldCheck, t: 'Equipe certificada', s: 'CRO ativo em todas as áreas' },
                { icon: Sparkles, t: 'Tecnologia moderna', s: 'Scanner 3D e RX digital' },
              ].map((b) => (
                <div
                  key={b.t}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-line"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-cream text-brand-primary shrink-0">
                    <b.icon size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-brand-ink text-sm">{b.t}</p>
                    <p className="text-xs text-brand-mute mt-0.5">{b.s}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_LINKS.general} target="_blank" rel="noopener noreferrer" className="btn-cta inline-flex mt-8">
              <MessageCircle size={20} strokeWidth={2.4} />
              Quero conhecer a clínica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
