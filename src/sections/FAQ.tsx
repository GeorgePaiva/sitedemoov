import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageCircle, HelpCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/config';

const FAQS = [
  {
    q: 'A clínica aceita plano odontológico?',
    a: 'Sim! Trabalhamos com os principais convênios odontológicos da região, além de aceitar plano particular com condições especiais. Entre em contato pelo WhatsApp e confirmamos a aceitação do seu plano em poucos minutos.',
  },
  {
    q: 'Qual o valor da avaliação inicial?',
    a: 'A avaliação inicial é totalmente gratuita e sem compromisso. Inclui exame clínico completo, conversa sobre suas expectativas e um plano de tratamento personalizado com orçamento detalhado.',
  },
  {
    q: 'É possível parcelar os tratamentos?',
    a: 'Sim. Parcelamos em até 12x sem juros no cartão de crédito e oferecemos condições especiais via boleto, Pix e financiamento próprio. Apresentamos todas as opções na sua avaliação inicial.',
  },
  {
    q: 'Quais especialidades estão disponíveis?',
    a: 'Reunimos 6 especialidades sob o mesmo teto: Implantodontia, Ortodontia, Endodontia, Periodontia, Estética Dental (lentes, clareamento) e Próteses. Todos os procedimentos são feitos por especialistas certificados.',
  },
  {
    q: 'Vocês atendem emergências dentais?',
    a: 'Sim, temos atendimento de urgência. Em casos de dor intensa, trauma ou infecção, ligue ou mande mensagem pelo WhatsApp — encaixamos no mesmo dia sempre que possível.',
  },
  {
    q: 'Qual o horário de funcionamento? Atendem aos sábados?',
    a: 'Atendemos de segunda a sexta-feira das 08h às 19h e aos sábados das 08h às 13h. Para emergências fora do horário, deixe mensagem no WhatsApp que retornamos rapidamente.',
  },
  {
    q: 'Quanto tempo dura um tratamento de implante?',
    a: 'Em média, de 3 a 6 meses do início ao fim, considerando cicatrização óssea. Em casos com técnica de carga imediata, é possível sair com a prótese provisória no mesmo dia da cirurgia. Cada caso é avaliado individualmente.',
  },
  {
    q: 'As crianças também podem ser atendidas na clínica?',
    a: 'Sim! Temos odontopediatra na equipe, com ambiente acolhedor pensado para crianças. Atendemos desde a primeira consulta (a partir de 1 ano) até a adolescência, com foco em prevenção e educação em saúde bucal.',
  },
  {
    q: 'Como faço para agendar minha avaliação?',
    a: 'É só clicar no botão do WhatsApp aqui na página ou ligar diretamente. Atendemos rapidamente, escolhemos juntos o melhor horário e você já sai com tudo agendado. Sem burocracia.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          {/* LEFT — heading + CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Tirando dúvidas</span>
            <h2 className="h-section mt-4 text-brand-ink">
              Perguntas que <span className="underline-brand">todo paciente</span> faz antes de começar.
            </h2>
            <p className="mt-4 text-lg text-brand-ink-soft leading-relaxed">
              Reunimos as dúvidas mais comuns. Se sua pergunta não estiver aqui, mande mensagem — respondemos em poucos minutos.
            </p>

            <div className="mt-7 p-5 rounded-2xl bg-brand-cream border border-brand-line">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-brand-primary shrink-0">
                  <HelpCircle size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-display font-semibold text-brand-ink">Ainda com dúvida?</p>
                  <p className="text-sm text-brand-ink-soft mt-1 mb-3">
                    Nossa equipe responde em até 2h pelo WhatsApp.
                  </p>
                  <a
                    href={WHATSAPP_LINKS.faq}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-primary-dark"
                  >
                    <MessageCircle size={16} /> Tirar minha dúvida
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full text-left rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-primary/40 bg-brand-cream shadow-card'
                        : 'border-brand-line bg-white hover:border-brand-primary/30'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-5">
                      <h3
                        className={`font-display font-semibold text-base sm:text-lg leading-snug ${
                          isOpen ? 'text-brand-primary' : 'text-brand-ink'
                        }`}
                      >
                        {faq.q}
                      </h3>
                      <span
                        className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                          isOpen ? 'bg-brand-primary text-white rotate-[135deg]' : 'bg-brand-cream text-brand-ink'
                        }`}
                      >
                        <Plus size={18} strokeWidth={2.4} />
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-0">
                            <p className="text-brand-ink-soft leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
