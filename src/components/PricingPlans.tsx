'use client'

interface PricingPlansProps {
  onSelectPack: (pack: string) => void
}

const plans = [
  {
    name: 'Esencial', tagline: 'Tu escaparate profesional', price: '250€',
    packKey: 'Pack Esencial — 250€/mes', popular: false,
    features: ['Instagram + Facebook', '2 posts/semana', 'Stories semanales', 'Atención básica de comunidad'],
  },
  {
    name: 'Crecimiento', tagline: 'El más elegido por nuestros clientes', price: '450€',
    packKey: 'Pack Crecimiento — 450€/mes', popular: true,
    features: ['IG + FB + Google / LinkedIn', '3 posts/semana (inc. Reels)', 'Campaña de Ads básica', 'Reporte mensual de resultados'],
  },
  {
    name: 'Elite', tagline: 'Dominio total de tu presencia', price: '850€',
    packKey: 'Pack Elite — 850€/mes', popular: false,
    features: ['Estrategia Omnicanal completa', '5 posts/semana', 'Visita presencial para contenido', 'Remarketing avanzado'],
  },
]

export default function PricingPlans({ onSelectPack }: PricingPlansProps) {
  return (
    <section id="planes" className="py-20 px-5 bg-[#f8f9ff]">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-red-50 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3">
          Gestión Integral
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-3 leading-tight">
          Nosotros lo hacemos todo por ti.
        </h2>
        <p className="text-gray-500 text-base mb-10">
          Packs "Do It For You" — tú te centras en tu negocio, nosotros en tus redes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-brand-red shadow-xl md:scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ El más popular
                </span>
              )}
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">{plan.name}</p>
              <h3 className="text-base font-bold text-brand-navy mb-4">{plan.tagline}</h3>
              <div className="text-4xl font-extrabold text-brand-navy">
                {plan.price}<span className="text-sm font-medium text-gray-400"> / mes + IVA</span>
              </div>
              <hr className="my-5 border-gray-200" />
              <ul className="flex flex-col gap-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-gray-600">
                    <span className={`font-bold flex-shrink-0 ${plan.popular ? 'text-brand-red' : 'text-brand-navy'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPack(plan.packKey)}
                className={`w-full py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90 ${plan.popular ? 'bg-brand-red shadow-lg' : 'bg-brand-navy'}`}
              >
                Quiero este pack
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
