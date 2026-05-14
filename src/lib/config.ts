export const BUSINESS = {
  name: 'Odonto Vital',
  tagline: 'Seu sorriso em boas mãos',
  city: 'Maracanaú',
  state: 'CE',
  phone: '558533821191',
  phoneDisplay: '(85) 3382-1191',
  rating: 4.8,
  reviewsCount: 371,
  yearsExperience: 15,
  clientsServed: 1113,
  specialtiesCount: 6,
  whatsappBase: 'https://wa.me/558533821191',
  address: 'Maracanaú — CE',
  hours: {
    weekdays: 'Seg a Sex: 08h às 19h',
    saturday: 'Sábados: 08h às 13h',
  },
} as const;

export const buildWhatsappLink = (message: string) =>
  `${BUSINESS.whatsappBase}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINKS = {
  hero: buildWhatsappLink('Olá! Vi o site da Odonto Vital e gostaria de agendar uma avaliação gratuita.'),
  general: buildWhatsappLink('Olá! Vi o site da Odonto Vital e gostaria de mais informações.'),
  emergency: buildWhatsappLink('Olá! Estou com uma EMERGÊNCIA dental e preciso de atendimento urgente.'),
  service: (service: string) =>
    buildWhatsappLink(`Olá! Tenho interesse em ${service} na Odonto Vital. Pode me passar mais informações?`),
  faq: buildWhatsappLink('Olá! Tenho uma dúvida sobre os tratamentos da Odonto Vital.'),
} as const;

export const PHONE_LINK = `tel:+${BUSINESS.phone}`;
