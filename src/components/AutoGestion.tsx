'use client'

interface AutoGestionProps {
  onSelectPack: (pack: string) => void
}

const packs = [
  { qty: '8', label: 'diseños + textos', price: '170€', packKey: 'Pack Autogestión 8 — 170€/mes', name: 'Pack Starter' },
  { qty: '12', label: 'diseños + textos', price: '250€', packKey: 'Pack Autogestión 12 — 250€/mes', name: 'Pack Pro' },
]

export default function AutoGestion({ onSelectPack }: AutoGestionProps) {
  return (
    <section id="autogestion" className="py-20 px-5 bg-brand-navy">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
        <div>
          <span className="inline-block bg-white/10 text-brand-cyan text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Autogestión
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            ¿Prefieres publicar tú? Nosotros diseñamos.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Estética profesional sin delegar la cuenta. Recibes los diseños y textos listos para publicar cuando quieras.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {packs.map((pack) => (
              <button key={pack.packKey} onClick={() => onSelectPack(pack.packKey)}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-5xl font-extrabold text-brand-cyan leading-none">{pack.qty}</div>
                <div className="text-white/60 text-xs mt-1">{pack.label}</div>
                <div className="text-white text-xl font-bold mt-3">{pack.price}</div>
                <div className="text-white/50 text-xs">+ IVA / mes</div>
                <div className="text-white/70 text-xs mt-2">{pack.name}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="hidden md:block bg-white/10 rounded-2xl p-8 mt-8 md:mt-0">
          <p className="text-white/80 text-base leading-relaxed">
            Ideal para quienes quieren <strong className="text-brand-cyan">estética profesional</strong> sin delegar la cuenta. Tú mantienes el control, nosotros te damos las herramientas para brillar en redes sociales.
          </p>
        </div>
      </div>
    </section>
  )
}
