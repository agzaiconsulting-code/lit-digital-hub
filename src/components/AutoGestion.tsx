'use client'

interface AutoGestionProps {
  onSelectPack: (pack: string) => void
}

type TooltipInfo = {
  title: string
  subtitle: string
  includes: string[]
  benefits: string[]
  price: string
  note: string
}

const packs: Array<{
  qty: string; label: string; price: string; packKey: string
  name: string; tagline: string; tooltip: TooltipInfo
}> = [
  {
    qty: '8', label: 'diseños + textos', price: '170€',
    packKey: 'Pack Autogestión 8 — 170€/mes',
    name: 'Pack Autogestión 8',
    tagline: 'Presencia Constante',
    tooltip: {
      title: 'Pack Autogestión 8 (Presencia Constante)',
      subtitle: 'Ideal para mantener tu perfil activo y profesional sin esfuerzo.',
      includes: [
        '8 Diseños personalizados (con tu logo y colores)',
        '8 Textos (copys) profesionales con hashtags',
        'Entrega mensual en tu email lista para subir',
      ],
      benefits: [
        '2 publicaciones por semana',
        'Ahorras +15 horas de trabajo al mes',
        'Imagen de marca profesional y coherente',
      ],
      price: '170€ + IVA/mes',
      note: 'Sin permanencia, tú decides cuándo subir cada post.',
    },
  },
  {
    qty: '12', label: 'diseños + textos', price: '250€',
    packKey: 'Pack Autogestión 12 — 250€/mes',
    name: 'Pack Autogestión 12',
    tagline: 'Máximo Crecimiento',
    tooltip: {
      title: 'Pack Autogestión 12 (Máximo Crecimiento)',
      subtitle: 'Nuestra opción más recomendada para ganar visibilidad y autoridad.',
      includes: [
        '12 Diseños premium de alta calidad',
        '12 Textos estratégicos enfocados en venta/interacción',
        'Guía de contenidos mensual directa a tu correo',
      ],
      benefits: [
        '3 publicaciones por semana (presencia total)',
        'Feed estético que genera confianza a tus clientes',
        'Te olvidas de diseñar y redactar para siempre',
      ],
      price: '250€ + IVA/mes',
      note: 'La mejor relación calidad-precio por post.',
    },
  },
]

function PackCard({ pack, onSelectPack }: { pack: typeof packs[0]; onSelectPack: (pack: string) => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onSelectPack(pack.packKey)
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  return (
    <div key={pack.packKey} className="bg-white/10 border border-white/20 rounded-2xl p-8 flex flex-col">
      <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-3">{pack.name}</p>
      <p className="text-brand-cyan text-sm font-semibold mb-5">{pack.tagline}</p>
      <div className="text-6xl font-extrabold text-brand-cyan leading-none mb-1">{pack.qty}</div>
      <div className="text-white/50 text-sm mb-5">{pack.label}</div>
      <div className="text-white text-3xl font-bold mb-0.5">{pack.price}</div>
      <div className="text-white/40 text-xs mb-6">+ IVA / mes</div>

      <div className="mb-6 pb-4 border-b border-white/20 space-y-3 flex-grow">
        <p className="text-white/80 text-xs italic">{pack.tooltip.subtitle}</p>
        <div>
          <p className="text-sm font-bold text-brand-cyan mb-2">✅ ¿Qué incluye?</p>
          <ul className="space-y-1">
            {pack.tooltip.includes.map((item) => (
              <li key={item} className="flex gap-2 text-xs text-white/70">
                <span className="flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-cyan mb-2">🚀 Beneficios:</p>
          <ul className="space-y-1">
            {pack.tooltip.benefits.map((item) => (
              <li key={item} className="flex gap-2 text-xs text-white/70">
                <span className="flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-white/60 italic">{pack.tooltip.note}</p>
      </div>

      <a
        href="#contacto"
        onClick={handleClick}
        className="relative z-10 block text-center w-full py-3 rounded-lg text-sm font-bold text-brand-navy bg-brand-cyan hover:opacity-90 transition-colors active:scale-95 cursor-pointer"
      >
        Quiero este pack
      </a>
    </div>
  )
}

export default function AutoGestion({ onSelectPack }: AutoGestionProps) {
  return (
    <section id="autogestion" className="py-20 px-5 bg-brand-navy">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-white/10 text-brand-cyan text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
          Autogestión
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
          ¿Prefieres publicar tú? Nosotros diseñamos.
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          Packs Autogestión — No hagas nada, nosotros nos ocupamos. Recibes los diseños y textos listos para publicar cuando quieras.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((pack) => (
            <PackCard key={pack.packKey} pack={pack} onSelectPack={onSelectPack} />
          ))}
        </div>
      </div>
    </section>
  )
}
