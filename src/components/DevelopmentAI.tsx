'use client'

export default function DevelopmentAI() {
  const services = [
    {
      icon: '🌐',
      title: 'Web & Landing Pages',
      desc: 'No las vendas como "páginas", véndelas como herramientas de venta.',
      items: [
        'Landing Pages: Rápidas y directas a la conversión',
        'Webs Corporativas: Tu casa digital con diseño profesional',
      ],
    },
    {
      icon: '📱',
      title: 'Apps para el bolsillo',
      desc: 'iOS & Android sin complicaciones',
      items: [
        'Aplicaciones Web: Soluciones sencillas en móvil',
        'Sistemas de reservas, catálogos y gestión interna',
      ],
    },
    {
      icon: '🤖',
      title: 'El Futuro: Automatizaciones e IA',
      desc: 'Lo que le da caché a tu marca',
      items: [
        'Agentes de IA: Chatbots inteligentes 24/7',
        'Automatizaciones: Tareas repetitivas hechas solas',
      ],
    },
    {
      icon: '🔐',
      title: 'Gestión Total',
      desc: 'Control absoluto de tu presencia digital',
      items: [
        'Hosting incluido y mantenimiento',
        'Control de versiones: tu código seguro y accesible',
      ],
    },
  ]

  return (
    <section id="desarrollo" className="py-20 px-5 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Desarrollo & IA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight max-w-2xl mx-auto">
            Digitalizamos tu negocio para que trabaje por ti.
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Desde landing pages hasta agentes de IA. Todo lo que necesitas para transformar tu negocio en digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-brand-navy transition-colors"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 italic mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-brand-cyan font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
            ¿Necesitas digitalizar tu negocio o mejorar tu presencia digital? Hablamos de todo: desde una landing page hasta un agente de IA personalizado.
          </p>
          <a
            href="https://wa.me/34690735533?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20desarrollo%20de%20webs%2C%20apps%20y%20automatizaciones%20con%20IA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-brand-cyan text-white font-bold px-8 py-3.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            💬 Cuéntame tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
