'use client'

import { WHATSAPP_NUMBER } from '@/lib/constants'

const WA_MESSAGE = encodeURIComponent(
  '¡Hola! Me gustaría probar el Pack Prueba LIT gratis 🎁\n\n' +
  '¿Podéis enviarme los 3 diseños y textos de muestra con mi logo y colores de marca?'
)

export default function PruebaLIT() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`

  return (
    <section id="prueba" className="py-20 px-5 bg-gradient-to-br from-brand-navy via-[#2d2d2d] to-brand-red">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-white/10 text-brand-cyan text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-5">
          Prueba LIT
        </span>

        <div className="inline-flex items-center gap-2 bg-brand-cyan/20 border border-brand-cyan/40 text-sm font-bold px-5 py-2 rounded-full mb-6">
          <span className="text-white/60 line-through">Valorado en 65€</span>
          <span className="text-brand-cyan">— Hoy: 0€</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Transformamos tu marca<br className="hidden md:block" /> hoy mismo.
        </h2>
        <p className="text-xl font-bold text-brand-cyan mb-2">Solicita tu LIT START KIT.</p>
        <p className="text-white/60 text-base mb-1">Incluye 3 posts de diseño profesional totalmente gratis.</p>
        <p className="text-white/40 text-sm mb-12">Para que compruebes nuestra calidad antes de decidirte.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
          {[
            { icon: '🎨', title: '3 Diseños exclusivos', desc: 'Creados con tu logo y colores de marca.' },
            { icon: '✍️', title: '3 Textos profesionales', desc: 'Adaptados a tu tono de comunicación.' },
            { icon: '⚡', title: 'Entrega en 48/72h', desc: 'Sin compromiso ni permanencia.' },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
              <span className="text-2xl mt-0.5">{item.icon}</span>
              <div>
                <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-cyan text-brand-navy font-extrabold text-lg px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30"
        >
          Quiero mis 3 posts gratis →
        </a>
      </div>
    </section>
  )
}
