'use client'

interface PricingPlansProps {
  onSelectPack: (pack: string) => void
}

type TooltipInfo = {
  title: string
  price: string
  items: string[]
  objective: string
  why: string
  ideal: string
}

const plans: Array<{
  name: string; tagline: string; price: string; packKey: string; popular: boolean
  features: string[]; tooltip: TooltipInfo
}> = [
  {
    name: 'Esencial', tagline: 'Tu escaparate profesional', price: 'Desde 250€',
    packKey: 'Pack Esencial — 250€/mes', popular: false,
    features: ['Instagram + Facebook', '2 posts/semana', 'Stories semanales', 'Atención básica de comunidad'],
    tooltip: {
      title: 'Pack ESENCIAL',
      price: 'Desde 250€/mes + IVA',
      items: [
        'Gestión completa: Instagram + Facebook',
        '2 publicaciones/semana (edición fotográfica y copy bilingüe ES o GL)',
        'Stories: Creaciones semanales',
        'Comunidad: Revisión de mensajes y comentarios (respuesta básica)',
        'Optimización: Ajuste de horarios según resultados',
        'Soporte: Coordinación continua con el cliente',
      ],
      objective: 'Mantener presencia constante e imagen profesional.',
      why: 'Porque quieres dejar de preocuparte por "qué publicar" y centrarte en tu negocio. Porque buscas una imagen profesional y coherente sin grandes inversiones.',
      ideal: 'Autónomos y pequeños negocios que quieren empezar a cuidar su presencia digital.',
    },
  },
  {
    name: 'Crecimiento', tagline: 'Impulsa tu crecimiento real', price: 'Desde 450€',
    packKey: 'Pack Crecimiento — 450€/mes', popular: true,
    features: ['IG + FB + Google Business', '3 posts/semana (inc. Reels)', 'Campaña de Ads básica', 'Reporte mensual de resultados'],
    tooltip: {
      title: 'Pack CRECIMIENTO (El más popular)',
      price: 'Desde 450€/mes + IVA',
      items: [
        'Todo lo del Pack Esencial',
        '3 publicaciones/semana (incluye 1 Reel)',
        'Redes: Gestión de 3 redes (IG + FB + Google Business)',
        'Ads: Diseño de 1 campaña básica (inversión aparte)',
        'Informes: Reporte mensual de métricas',
      ],
      objective: 'Aumentar alcance y captar nuevos clientes.',
      why: 'Porque tu negocio ya funciona y ahora quieres que crezca de verdad. Porque quieres aprovechar el algoritmo de los Reels y el posicionamiento en Google.',
      ideal: 'Negocios que buscan atraer nuevos clientes y ganar visibilidad activa.',
    },
  },
  {
    name: 'Elite', tagline: 'Dominio total de tu presencia con planes personalizados', price: 'Desde 850€',
    packKey: 'Pack Elite — 850€/mes', popular: false,
    features: ['Estrategia Omnicanal completa', '5 posts/semana', 'Visita presencial para contenido', 'Ads: Sistema de Adquisición Predictiva'],
    tooltip: {
      title: 'Pack ELITE (Premium)',
      price: 'Planes personalizados desde 850€/mes',
      items: [
        'Todo lo del Pack Crecimiento',
        '5 publicaciones/semana (Reels, Carruseles, Fotos)',
        'Stories: Presencia diaria (L-V)',
        'Producción: 1 visita presencial al mes para captura de material',
        'Comunidad: Gestión avanzada y búsqueda de colaboraciones',
        'Ads: Sistema de Adquisición Predictiva y Escalado de Audiencias',
      ],
      objective: 'Dominio total del sector y máxima autoridad.',
      why: 'Porque quieres dominar tu sector y que tu marca sea la referencia visual. Porque necesitas delegar el 100% (incluida la creación de contenido real en tu local).',
      ideal: 'Empresas que buscan resultados máximos y una imagen de marca premium.',
    },
  },
]

function PlanCard({ plan, onSelectPack }: { plan: typeof plans[0]; onSelectPack: (pack: string) => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onSelectPack(plan.packKey)
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  return (
    <div
      key={plan.name}
      className={`relative bg-white rounded-2xl p-8 border-2 flex flex-col ${plan.popular ? 'border-brand-red shadow-xl md:scale-105' : 'border-gray-200'}`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          ⭐ El más popular
        </span>
      )}
      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">{plan.name}</p>
      <h3 className="text-base font-bold text-brand-navy mb-4">{plan.tagline}</h3>
      <p className="text-lg font-extrabold text-brand-navy mb-5 whitespace-nowrap">
        {plan.price} <span className="text-xs font-medium text-gray-400">/ mes + IVA</span>
      </p>

      <div className="mb-6 pt-5 border-t border-gray-200 space-y-4 flex-grow">
        <div>
          <p className="text-sm font-bold text-gray-800 mb-2">📋 Qué incluye:</p>
          <ul className="space-y-1">
            {plan.tooltip.items.map((item) => (
              <li key={item} className="flex gap-2 text-xs text-gray-700">
                <span className="text-brand-navy font-bold flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-xs mb-1"><strong>Objetivo:</strong> {plan.tooltip.objective}</p>
          <p className="text-xs text-gray-600 italic mb-2">{plan.tooltip.why}</p>
          <p className="text-xs"><strong>Ideal para:</strong> {plan.tooltip.ideal}</p>
        </div>
      </div>

      <a
        href="#contacto"
        onClick={handleClick}
        className={`relative z-10 block text-center w-full py-3 rounded-lg text-sm font-bold text-white transition-colors hover:opacity-90 active:scale-95 cursor-pointer ${plan.popular ? 'bg-brand-red shadow-lg' : 'bg-brand-navy'}`}
      >
        Quiero este pack
      </a>
    </div>
  )
}

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
          Packs "We Do It All" — tú te centras en tu negocio, nosotros en tus redes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onSelectPack={onSelectPack} />
          ))}
        </div>
      </div>
    </section>
  )
}
