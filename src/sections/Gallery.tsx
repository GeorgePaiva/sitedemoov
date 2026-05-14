import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { SmartImage } from '../components/SmartImage';
import { GALLERY_CASES } from '../lib/images';

const FILTERS = ['Todos', 'Estética', 'Implantes', 'Ortodontia'] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos');
  const cases = filter === 'Todos' ? GALLERY_CASES : GALLERY_CASES.filter((c) => c.tag === filter);

  return (
    <section id="sorrisos" className="relative py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:items-end mb-10 lg:mb-14">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Galeria de sorrisos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-section mt-4 text-brand-ink"
            >
              Antes e depois.
              <br />
              <span className="text-brand-mute">Referência visual para cada tipo de tratamento.</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex gap-1.5 p-1.5 bg-white rounded-full border border-brand-line shadow-sm overflow-x-auto scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-display font-medium rounded-full transition-all whitespace-nowrap ${
                  filter === f
                    ? 'bg-brand-ink text-white shadow-md'
                    : 'text-brand-ink/70 hover:text-brand-ink hover:bg-brand-cream'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={`${c.treatment}-${filter}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <BeforeAfter case_={c} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center text-sm text-brand-mute max-w-3xl mx-auto leading-relaxed"
        >
          <Sparkles size={14} className="inline mr-1.5 text-brand-primary align-text-bottom" />
          Fotos ilustrativas do Unsplash (banco gratuito): lado &quot;antes&quot; sugere sorriso com imperfeições; lado
          &quot;depois&quot;, sorriso mais alinhado e saudável. Não são pacientes da clínica — arraste a barra para
          comparar.
        </motion.p>
      </div>
    </section>
  );
}

function BeforeAfter({ case_ }: { case_: (typeof GALLERY_CASES)[number] }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos((x / rect.width) * 100);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="group">
      <div
        ref={ref}
        className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize border border-brand-line shadow-card bg-brand-cream"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="slider"
        aria-label={`Comparação antes e depois: ${case_.treatment}`}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
          if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
        }}
      >
        {/* BEFORE — bottom layer */}
        <div className="absolute inset-0 pointer-events-none">
          <SmartImage
            src={case_.beforeImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] font-bold text-white bg-brand-ink/70">
            ANTES
          </span>
        </div>

        {/* AFTER — clipped layer */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <SmartImage
            src={case_.afterImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] font-bold text-white bg-brand-primary">
            DEPOIS
          </span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(4,130,178,0.3)] pointer-events-none z-10"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-primary">
            <MoveHorizontal size={18} strokeWidth={2.4} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-display font-semibold text-brand-ink">{case_.treatment}</p>
          <p className="text-sm text-brand-mute mt-0.5">{case_.duration}</p>
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-cream text-brand-primary text-xs font-semibold">
          {case_.tag}
        </span>
      </div>
    </div>
  );
}
