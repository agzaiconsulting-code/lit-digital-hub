'use client'

const services = [
  {
    icon: '✏️',
    title: 'Logotipos e Identidad',
    desc: 'Su marca, reconocible y memorable',
    items: [
      'Creamos o renovamos su marca desde cero',
      'Paleta de colores, tipografía y manual de estilo corporativo',
    ],
  },
  {
    icon: '💼',
    title: 'Tarjetas de Visita',
    desc: 'Su primer contacto con los clientes',
    items: [
      'Diseños limpios, modernos y listos para imprimir',
      'Adaptados a su imagen corporativa',
    ],
  },
  {
    icon: '📋',
    title: 'Plantillas para Tiendas',
    desc: 'Documentos profesionales con su sello',
    items: [
      'Formularios de pedido, albaranes y facturas personalizados',
      'Con su logotipo y colores corporativos',
    ],
  },
  {
    icon: '🎉',
    title: 'Felicitaciones y Eventos',
    desc: 'Las fechas especiales de su empresa, con estilo',
    items: [
      'Carteles y felicitaciones navideñas',
      'Menús conmemorativos y material para eventos',
    ],
  },
]

export default function IdentidadVisual() {
  return (
    <section id="identidad-visual" className="py-20 px-5 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Identidad Visual
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight max-w-3xl mx-auto">
            🎨 Diseño Gráfico e Identidad Visual
          </h2>
          <p className="text-gray-500 text-base italic mb-3 max-w-2xl mx-auto">
            "Damos vida a la imagen de su negocio (digitalmente y en papel)"
          </p>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            No solo administramos sus redes, también creamos todo el universo visual que su negocio necesita para dar una imagen profesional y ordenada. Diseñamos soluciones a medida para su día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  )
}
