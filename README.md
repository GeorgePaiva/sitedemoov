# Odonto Vital — Landing Page

Landing page de alta conversão para a clínica **Odonto Vital** em Maracanaú-CE.

Construída com **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**, seguindo padrões de produto de Apple, Stripe e Linear.

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev          # abre em http://localhost:5173

# 3. Gerar build de produção
npm run build        # gera /dist pronto para deploy

# 4. Preview do build
npm run preview
```

**Requisitos:** Node.js 18+ e npm 9+.

---

## 📦 Deploy

A pasta `dist/` gerada pelo build pode ser publicada em **Vercel**, **Netlify**, **Cloudflare Pages** ou qualquer hospedagem estática.

```bash
# Vercel
npx vercel --prod

# Netlify
npx netlify deploy --prod --dir=dist
```

---

## 🎨 Design System

**Cores (custom — definidas em `tailwind.config.js`):**
- Primária: `#0482b2` (azul-petróleo)
- Secundária: `#2347c6` (índigo)
- Accent: `#8d3210` (terracota)
- WhatsApp: `#25D366`

**Tipografia (Google Fonts):**
- Headings: Space Grotesk
- Body: DM Sans

**Tokens de espaçamento** seguem clamp responsivo. Todos os componentes seguem grid 8pt.

---

## 🗂️ Estrutura

```
src/
├── App.tsx                  # Composição final
├── main.tsx                 # Entry
├── index.css                # Design tokens + utilities
├── lib/
│   └── config.ts            # BUSINESS data + links WhatsApp
├── hooks/
│   └── useMotion.ts         # useReducedMotion + useIsMobile
├── components/
│   ├── Logo.tsx
│   ├── Buttons.tsx          # WhatsAppButton, PrimaryButton, PhoneButton
│   ├── Header.tsx           # Nav fixed com mobile sheet
│   ├── EmergencyBanner.tsx  # Banner topo dismissible
│   └── FloatingActions.tsx  # WhatsApp flutuante + Sticky CTA mobile
└── sections/
    ├── Hero.tsx             # Mesh gradient animado
    ├── Testimonials.tsx     # 1 destaque + 3 menores
    ├── FAQ.tsx              # Accordion com 9 perguntas
    ├── Differentials.tsx    # 6 diferenciais
    ├── HowItWorks.tsx       # 4 passos
    ├── Specialties.tsx      # Masonry Pinterest-style
    ├── Team.tsx             # 4 profissionais
    ├── About.tsx            # Sobre a clínica
    ├── Stats.tsx            # Números animados (CountUp)
    ├── Contact.tsx          # Mapa + dados de contato
    ├── Gallery.tsx          # Antes/depois com slider interativo
    ├── Pricing.tsx          # Simulador de parcelamento
    └── Footer.tsx
```

---

## ✏️ Como personalizar

**Mudar dados da clínica:** edite `src/lib/config.ts` — todos os dados (nome, telefone, rating, avaliações) ficam centralizados ali.

**Mudar cores:** edite `tailwind.config.js` na seção `theme.extend.colors.brand`.

**Mudar conteúdo das seções:** cada seção tem seus arrays de dados no topo do arquivo (ex: `testimonials`, `faqs`, `specialties`).

---

## ✅ Checklist de qualidade

- [x] Build sem erros (`npm run build`)
- [x] TypeScript strict sem warnings
- [x] Mobile-first responsive (320px → 1920px)
- [x] WhatsApp flutuante com pulse + sticky CTA mobile
- [x] Schema.org LocalBusiness + Open Graph
- [x] `prefers-reduced-motion` respeitado
- [x] Acessibilidade WCAG AA: contrast, focus-visible, aria-labels
- [x] Zero layout shift (todas as imagens SVG inline)
- [x] Bundle final: ~63KB JS gzipped + 8KB CSS gzipped

---

## 📞 Integração WhatsApp

Todos os CTAs apontam para `https://wa.me/558533821191` com mensagens contextuais por seção (hero, emergência, serviço, FAQ). Ajuste as mensagens em `src/lib/config.ts → WHATSAPP_LINKS`.
