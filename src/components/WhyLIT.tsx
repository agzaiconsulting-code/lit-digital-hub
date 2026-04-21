'use client'

import { useEffect, useRef, useState } from 'react'

const benefits = [
  { icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', title: 'Identidad local', desc: 'Creamos contenido que entiende nuestra cultura, para que tu marca se sienta como en casa.' },
  { icon: '📅', title: 'Consistencia garantizada', desc: 'Publicaciones constantes, sin huecos vacíos ni semanas en silencio.' },
  { icon: '📈', title: 'Resultados reales', desc: 'Estrategias basadas en métricas, no en suerte ni intuición.' },
  { icon: '👨‍🦰', title: 'Soporte Humano y Directo', desc: 'Nada de tickets de soporte ni esperas eternas. Tienes un consultor asignado con el que hablar por WhatsApp o tomarte un café.' },
  { icon: '🎨', title: 'Diseño profesional', desc: 'Contenido visual que destaca y representa tu marca con coherencia.' },
  { icon: '💬', title: 'Copys que venden', desc: 'Textos estratégicos que convierten seguidores en clientes.' },
  { icon: '🔒', title: 'Sin permanencia', desc: 'Flexibilidad total: cancela cuando quieras, sin compromisos.' },
  { icon: '🤝', title: 'Atención personalizada', desc: 'Un gestor dedicado que conoce tu negocio y sus objetivos.' },
  { icon: '⚡', title: 'Entrega puntual', desc: 'Siempre a tiempo, para que nunca falte contenido en tu perfil.' },
]

const TOTAL = benefits.length

export default function WhyLIT() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(2)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 768 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = TOTAL - visible

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[0] as HTMLElement
    if (!card) return
    el.scrollTo({ left: index * (card.offsetWidth + 16), behavior: 'smooth' })
    setCurrent(index)
  }


  const onScroll = () => {
    const el = scrollRef.current
    const card = el?.children[0] as HTMLElement | undefined
    if (!el || !card) return
    setCurrent(Math.round(el.scrollLeft / (card.offsetWidth + 16)))
  }

  const cardStyle = visible === 2
    ? { width: 'calc(50% - 8px)', flexShrink: 0 }
    : { width: 'calc(33.333% - 11px)', flexShrink: 0 }

  return (
    <section id="why" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-red-50 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3">
          ¿Por qué nosotros?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight mb-3">
          Tu negocio merece más que redes improvisadas.
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-6">
          Sabemos que no tienes tiempo para diseñar, escribir copies o entender el algoritmo. Si tus redes están estancadas, nosotros les damos la chispa que necesitan.
        </p>

        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button
            onClick={() => scrollTo(Math.max(0, current - 1))}
            disabled={current === 0}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border-2 border-brand-navy text-brand-navy text-xl flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >‹</button>
          <button
            onClick={() => scrollTo(Math.min(maxIndex, current + 1))}
            disabled={current === maxIndex}
            aria-label="Siguiente"
            className="w-9 h-9 rounded-full border-2 border-brand-navy text-brand-navy text-xl flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >›</button>
        </div>

        {/* Contenedor con scrollbar oculto */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4"
            style={{ scrollbarWidth: 'none' } as React.CSSProperties}
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                style={cardStyle}
                className="snap-start bg-[#f8f9ff] rounded-2xl p-7 border-t-4 border-brand-navy"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-brand-navy font-bold text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-brand-navy' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
