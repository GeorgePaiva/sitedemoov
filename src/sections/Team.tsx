import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { IMAGES } from '../lib/images';

type Doctor = {
  name: string;
  cro: string;
  specialty: string;
  bio: string;
  photo: string;
  initials: string;
};

const TEAM: Doctor[] = [
  {
    name: 'Dra. Camila Andrade',
    cro: 'CRO-CE 19.247',
    specialty: 'Implantodontia & Reabilitação Oral',
    bio: 'Especialista em implantes com 10+ anos de experiência. Mestrado em prótese sobre implante pela USP.',
    photo: IMAGES.team[0],
    initials: 'CA',
  },
  {
    name: 'Dr. Rodrigo Albuquerque',
    cro: 'CRO-CE 22.108',
    specialty: 'Ortodontia & Ortopedia Facial',
    bio: 'Especialista em alinhadores invisíveis. Mais de 800 casos de ortodontia concluídos com sucesso.',
    photo: IMAGES.team[1],
    initials: 'RA',
  },
  {
    name: 'Dra. Larissa Pontes',
    cro: 'CRO-CE 24.892',
    specialty: 'Estética & Lentes de Contato',
    bio: 'Referência em design de sorriso digital. Pós-graduada em odontologia estética pela ABO.',
    photo: IMAGES.team[2],
    initials: 'LP',
  },
  {
    name: 'Dr. Marcus Vieira',
    cro: 'CRO-CE 20.553',
    specialty: 'Endodontia & Cirurgia',
    bio: 'Especialista em tratamento de canal com microscópio. Salvando dentes que outros já desistiram.',
    photo: IMAGES.team[3],
    initials: 'MV',
  },
];

export function Team() {
  return (
    <section id="equipe" className="relative py-20 lg:py-28 bg-brand-ink overflow-hidden noise-overlay">
      {/* Decorative gradient blobs */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(4,130,178,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,71,198,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="max-w-3xl mb-14 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary-light"
          >
            <span className="inline-block w-6 h-px bg-brand-primary-light" />
            Equipe de especialistas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-section mt-4 text-white"
          >
            Quem cuida do
            <br />
            seu sorriso aqui.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            Profissionais certificados, com pós-graduação e centenas de casos no portfólio. Trabalhamos juntos para que seu
            tratamento seja conduzido por quem mais entende de cada etapa.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {TEAM.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/[0.04] backdrop-blur border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1.5 hover:border-brand-primary-light/30"
            >
              {/* Avatar — foto real */}
              <div className="relative mb-5">
                <div
                  className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary"
                  style={{ boxShadow: '0 16px 36px -10px rgba(4,130,178,0.4)' }}
                >
                  <SmartImage
                    src={doc.photo}
                    alt={`Foto de ${doc.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-brand-ink text-brand-primary">
                  <Award size={16} strokeWidth={2.4} />
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-white tracking-tight">{doc.name}</h3>
              <p className="text-xs font-medium text-brand-primary-light mt-1 tracking-wide tabular">{doc.cro}</p>
              <p className="text-sm text-white/80 mt-2 font-medium">{doc.specialty}</p>
              <p className="text-sm text-white/55 mt-3 leading-relaxed">{doc.bio}</p>
            </motion.article>
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {[
            { icon: GraduationCap, label: 'Especialistas com pós-graduação' },
            { icon: Award, label: 'CRO ativo e atualizado' },
            { icon: Heart, label: 'Atendimento humanizado' },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary/20 text-brand-primary-light shrink-0">
                <b.icon size={20} strokeWidth={2} />
              </div>
              <p className="text-sm text-white/85 font-medium">{b.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
