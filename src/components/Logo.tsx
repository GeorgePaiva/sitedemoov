type Props = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

export function Logo({ size = 'md' }: Props) {
  const sizeMap = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };
  const iconSize = { sm: 28, md: 34, lg: 40 };
  return (
    <a
      href="#top"
      aria-label="Odonto Vital — voltar ao início"
      className="inline-flex items-center gap-2.5 group"
    >
      <span
        className="relative inline-flex items-center justify-center rounded-xl"
        style={{
          width: iconSize[size],
          height: iconSize[size],
          background: 'linear-gradient(135deg, #0482b2 0%, #2347c6 100%)',
          boxShadow: '0 8px 20px -6px rgba(4, 130, 178, 0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        {/* Símbolo: dente estilizado minimalista */}
        <svg viewBox="0 0 24 24" width={iconSize[size] * 0.6} height={iconSize[size] * 0.6} fill="none" aria-hidden="true">
          <path
            d="M7.5 3C5.5 3 4 4.5 4 6.8c0 1.5.4 3 .9 4.5.5 1.6.8 3.2 1 4.8.3 2.2 1 4.4 2.3 4.4 1 0 1.4-.9 1.7-2.2.3-1.2.6-2.5 2.1-2.5s1.8 1.3 2.1 2.5c.3 1.3.7 2.2 1.7 2.2 1.3 0 2-2.2 2.3-4.4.2-1.6.5-3.2 1-4.8.5-1.5.9-3 .9-4.5C20 4.5 18.5 3 16.5 3c-1.2 0-2.2.5-3.1 1-.9.4-1 .4-1.4.4-.4 0-.5 0-1.4-.4-.9-.5-1.9-1-3.1-1Z"
            fill="white"
          />
        </svg>
      </span>
      <span className={`font-display font-semibold ${sizeMap[size]} tracking-tight`}>
        <span className="text-[#1cb053]">Odonto</span>
        <span className="text-brand-primary">Vital</span>
      </span>
    </a>
  );
}
