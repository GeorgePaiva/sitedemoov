/**
 * Centralized image references.
 * All URLs from Unsplash (free for commercial use, no attribution required).
 * https://unsplash.com/license
 *
 * Width is set via the `w` query param for responsive loading.
 */

const u = (id: string, w = 1200, q: number = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  // Hero — close-up nítido, sorriso natural (aspiracional, não procedimento)
  hero: u('1489278353717-f64c6ee8a4d2', 1200, 85),

  // Clínica / consultório
  clinic: u('1629909613654-28e377c37b09', 1200), // modern dental chair
  clinic2: u('1588776814546-1ffcf47267a5', 900), // dental office

  // Team — profissionais (4 doutores)
  team: [
    u('1559839734-2b71ea197ec2', 600), // dentist woman 1
    u('1612531386530-97286d97c2d2', 600), // dentist man 1
    u('1622253692010-333f2da6031d', 600), // dentist woman 2
    u('1537368910025-700350fe46c7', 600), // doctor man
  ],

  // About
  team_working: u('1609840114035-3c981b782dfe', 1200),
};

/** Tags usadas pelos filtros da seção Galeria */
export type GalleryCaseTag = 'Estética' | 'Implantes' | 'Ortodontia';

export type GalleryCaseDef = {
  treatment: string;
  duration: string;
  tag: GalleryCaseTag;
  /** Sorriso com imperfeições / aspecto “antes” (Unsplash) */
  beforeImage: string;
  /** Sorriso alinhado e saudável “depois” (Unsplash) */
  afterImage: string;
};

/**
 * Galeria “Antes e depois” — imagens de banco gratuito (Unsplash).
 * Pares são ilustrativos (não são o mesmo indivíduo em todas as fotos).
 */
export const GALLERY_CASES: GalleryCaseDef[] = [
  {
    treatment: 'Lentes de contato dental',
    duration: '4 meses',
    tag: 'Estética',
    beforeImage: u('1597780429637-151fe9eb48ef', 1000, 82),
    afterImage: u('1548382131-e0ebb1f0cdea', 1000, 85),
  },
  {
    treatment: 'Implante + Coroa',
    duration: '6 meses',
    tag: 'Implantes',
    beforeImage: u('1660732205495-f65510d8180e', 1000, 82),
    afterImage: u('1489278353717-f64c6ee8a4d2', 1000, 85),
  },
  {
    treatment: 'Ortodontia invisível',
    duration: '14 meses',
    tag: 'Ortodontia',
    beforeImage: u('1562337404-3044c84ac061', 1000, 82),
    afterImage: u('1567516364473-233c4b6fcfbe', 1000, 85),
  },
  {
    treatment: 'Clareamento dental',
    duration: '3 sessões',
    tag: 'Estética',
    beforeImage: u('1609840113322-a70583f106eb', 1000, 82),
    afterImage: u('1611695434369-a8f5d76ceb7b', 1000, 85),
  },
];

/**
 * Inline SVG placeholder (data URI) — fallback se a imagem remota falhar.
 * Composição abstrata em gradient brand com ondas suaves e sparkles.
 * Funciona como skeleton/placeholder elegante.
 */
export const IMAGE_FALLBACK =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0482b2"/>
          <stop offset="55%" stop-color="#1a6cc9"/>
          <stop offset="100%" stop-color="#2347c6"/>
        </linearGradient>
        <radialGradient id="glow" cx="30%" cy="20%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(%23bg)"/>
      <rect width="400" height="500" fill="url(%23glow)"/>
      <g fill="rgba(255,255,255,0.10)">
        <circle cx="80" cy="120" r="3"/>
        <circle cx="320" cy="180" r="2"/>
        <circle cx="60" cy="380" r="2.5"/>
        <circle cx="350" cy="420" r="2"/>
        <circle cx="200" cy="60" r="1.8"/>
      </g>
      <g transform="translate(200 290)" opacity="0.18" fill="white">
        <path d="M -70 -10 Q -70 60 0 60 Q 70 60 70 -10 Q 70 -28 50 -32 L -50 -32 Q -70 -28 -70 -10 Z"/>
      </g>
    </svg>`
  );
