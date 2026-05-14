import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Mail, Navigation } from 'lucide-react';
import { WHATSAPP_LINKS, PHONE_LINK, BUSINESS } from '../lib/config';

export function Contact() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14">
          {/* LEFT — info */}
          <div>
            <span className="eyebrow">Estamos aqui</span>
            <h2 className="h-section mt-4 text-brand-ink">
              Venha tomar um cafezinho
              <br />
              <span className="text-brand-mute">e conhecer a clínica.</span>
            </h2>
            <p className="mt-4 text-lg text-brand-ink-soft leading-relaxed">
              Sem cobrança na primeira visita. Sem pressão. Apenas uma conversa para entendermos o que você precisa.
            </p>

            <div className="mt-8 space-y-4">
              <ContactCard icon={MapPin} title="Endereço" color="from-brand-primary to-brand-secondary">
                <p className="font-medium text-brand-ink">{BUSINESS.address}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maracana%C3%BA+CE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline mt-1"
                >
                  <Navigation size={14} /> Como chegar
                </a>
              </ContactCard>

              <ContactCard icon={Clock} title="Horário de atendimento" color="from-brand-secondary to-brand-primary">
                <p className="text-sm text-brand-ink-soft">{BUSINESS.hours.weekdays}</p>
                <p className="text-sm text-brand-ink-soft">{BUSINESS.hours.saturday}</p>
                <p className="text-xs text-brand-mute mt-1">Domingos: emergências (via WhatsApp)</p>
              </ContactCard>

              <ContactCard icon={Phone} title="Telefone" color="from-brand-accent to-amber-600">
                <a href={PHONE_LINK} className="font-display font-semibold text-brand-ink tabular hover:text-brand-primary">
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-xs text-brand-mute mt-0.5">Clique para ligar</p>
              </ContactCard>

              <ContactCard icon={MessageCircle} title="WhatsApp" color="from-brand-whatsapp to-emerald-500">
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-brand-ink hover:text-brand-primary"
                >
                  Conversar agora →
                </a>
                <p className="text-xs text-brand-mute mt-0.5">Respondemos em até 2h em horário comercial</p>
              </ContactCard>
            </div>
          </div>

          {/* RIGHT — map + CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Map */}
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden border border-brand-line shadow-card">
              <iframe
                title={`Localização ${BUSINESS.name} em ${BUSINESS.city}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6!2d-38.6266!3d-3.8772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sMaracana%C3%BA%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
              {/* Pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-brand-primary/30 animate-ping" />
                  <span
                    className="relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #0482b2, #2347c6)' }}
                  >
                    <MapPin size={20} strokeWidth={2.4} fill="white" />
                  </span>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="relative overflow-hidden rounded-3xl p-7 sm:p-8 text-white"
              style={{
                background: 'linear-gradient(135deg, #0a1929 0%, #0a3050 50%, #0482b2 100%)',
              }}
            >
              <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, #25D366, transparent)' }}
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="font-display font-semibold text-2xl mb-2">Pronto pra começar?</h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  Agende sua avaliação gratuita agora. Sem cobrança, sem compromisso — só uma conversa pra entender suas
                  necessidades.
                </p>
                <a href={WHATSAPP_LINKS.hero} target="_blank" rel="noopener noreferrer" className="btn-cta w-full">
                  <MessageCircle size={18} strokeWidth={2.4} />
                  Quero agendar minha avaliação
                </a>
                <a
                  href={PHONE_LINK}
                  className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur border border-white/15 text-white font-display font-medium transition-colors"
                >
                  <Phone size={16} />
                  Ou ligue: {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  color,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-line hover:border-brand-primary/30 hover:shadow-card transition-all duration-200">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${color} text-white shrink-0`}
        style={{ boxShadow: '0 8px 16px -4px rgba(4,130,178,0.25)' }}
      >
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <p className="font-display font-semibold text-brand-ink text-sm uppercase tracking-wide mb-1">{title}</p>
        {children}
      </div>
    </div>
  );
}
