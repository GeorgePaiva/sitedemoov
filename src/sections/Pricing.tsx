import { motion } from 'framer-motion';
import { useState } from 'react';
import { CreditCard, ShieldCheck, Wallet, Check, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINKS } from '../lib/config';

const POPULAR_TREATMENTS = [
  { name: 'Avaliação completa', price: 'Gratuita', highlight: true },
  { name: 'Limpeza profissional', price: 'a partir de R$ 120' },
  { name: 'Clareamento dental', price: '12x R$ 99' },
  { name: 'Implante + coroa', price: '12x R$ 285' },
  { name: 'Aparelho ortodôntico', price: '18x R$ 165' },
  { name: 'Lentes de contato dental', price: '12x R$ 320' },
];

const CONVENIOS = ['Amil Dental', 'Unimed Odonto', 'Odontoprev', 'Bradesco Dental', 'SulAmérica', 'Caixa Dental'];

export function Pricing() {
  const [installments, setInstallments] = useState(12);
  const [treatmentValue, setTreatmentValue] = useState(3000);
  const monthly = (treatmentValue / installments).toFixed(2).replace('.', ',');

  return (
    <section id="precos" className="relative py-20 lg:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT — heading + treatments */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Preços & convênios
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-section mt-4 text-brand-ink"
            >
              Tratamento de qualidade
              <br />
              <span className="text-brand-mute">com preço que cabe.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-lg text-brand-ink-soft leading-relaxed"
            >
              Trabalhamos com os principais convênios e oferecemos parcelamento em até 12x sem juros. Sem letras miúdas.
            </motion.p>

            <ul className="mt-7 space-y-2.5">
              {POPULAR_TREATMENTS.map((t, i) => (
                <motion.li
                  key={t.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border transition-colors ${
                    t.highlight
                      ? 'bg-gradient-to-r from-brand-primary/8 to-brand-secondary/5 border-brand-primary/25'
                      : 'border-brand-line hover:border-brand-primary/30'
                  }`}
                >
                  <span className="font-medium text-brand-ink">{t.name}</span>
                  <span
                    className={`font-display font-semibold tabular text-sm sm:text-base ${
                      t.highlight ? 'text-brand-primary' : 'text-brand-ink'
                    }`}
                  >
                    {t.price}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-brand-mute">
              * Valores referenciais. Plano final é definido na avaliação gratuita.
            </p>
          </div>

          {/* RIGHT — simulator + payment methods */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Simulator card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative p-7 sm:p-8 rounded-3xl overflow-hidden text-white noise-overlay"
              style={{
                background: 'linear-gradient(135deg, #0482b2 0%, #1a5cbc 50%, #2347c6 100%)',
                boxShadow: '0 30px 60px -20px rgba(4, 130, 178, 0.45)',
              }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard size={20} />
                  <span className="text-sm font-semibold tracking-wide opacity-90">Simulador de parcelamento</span>
                </div>
                <h3 className="font-display font-semibold text-2xl mt-2">Quanto cabe no seu mês?</h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="value" className="text-xs font-medium opacity-80 uppercase tracking-wide">
                        Valor do tratamento
                      </label>
                      <span className="font-display font-bold tabular">
                        R$ {treatmentValue.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <input
                      id="value"
                      type="range"
                      min={500}
                      max={15000}
                      step={500}
                      value={treatmentValue}
                      onChange={(e) => setTreatmentValue(Number(e.target.value))}
                      className="w-full accent-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium opacity-80 uppercase tracking-wide mb-2 block">
                      Parcelas
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[3, 6, 10, 12].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setInstallments(n)}
                          className={`py-2.5 rounded-xl text-sm font-display font-semibold transition-all ${
                            installments === n
                              ? 'bg-white text-brand-primary shadow-lg'
                              : 'bg-white/10 text-white hover:bg-white/15'
                          }`}
                        >
                          {n}x
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <p className="text-xs uppercase tracking-wide opacity-70">Você paga apenas</p>
                    <p className="font-display font-bold text-4xl mt-1 tabular">
                      <span className="text-base align-top opacity-70">{installments}x </span>
                      <span className="text-base align-top opacity-70">R$ </span>
                      {monthly}
                    </p>
                    <p className="text-xs opacity-70 mt-1">sem juros no cartão</p>
                  </div>

                  <a
                    href={WHATSAPP_LINKS.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-brand-primary font-display font-semibold hover:bg-brand-cream transition-colors"
                  >
                    <MessageCircle size={18} />
                    Quero meu orçamento personalizado
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Payment methods */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <p className="text-xs font-display font-semibold uppercase tracking-wide text-brand-mute mb-4">
                Formas de pagamento
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { icon: '💳', label: 'Cartão' },
                  { icon: '⚡', label: 'Pix' },
                  { icon: '📄', label: 'Boleto' },
                  { icon: '💰', label: 'Dinheiro' },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cream text-sm font-medium text-brand-ink"
                  >
                    <span>{p.icon}</span> {p.label}
                  </span>
                ))}
              </div>

              {/* <div className="mt-5 pt-5 border-t border-brand-line">
                <p className="text-xs font-display font-semibold uppercase tracking-wide text-brand-mute mb-3">
                  Convênios aceitos
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CONVENIOS.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-brand-line text-xs text-brand-ink-soft"
                    >
                      <Check size={11} className="text-brand-whatsapp" strokeWidth={3} />
                      {c}
                    </span>
                  ))}
                </div>
              </div> */}

              <div className="mt-5 pt-5 border-t border-brand-line flex items-center gap-2 text-sm text-brand-ink-soft">
                <ShieldCheck size={16} className="text-brand-primary shrink-0" />
                Pagamento 100% seguro • CNPJ ativo • Recibo emitido
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
