const benefits = [
  { icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', title: 'Identidad local', desc: 'Contenido bilingüe (ES/GL) que conecta con tu cliente gallego.' },
  { icon: '📅', title: 'Consistencia garantizada', desc: 'Publicaciones constantes, sin huecos vacíos ni semanas en silencio.' },
  { icon: '📈', title: 'Resultados reales', desc: 'Estrategias basadas en métricas, no en suerte ni intuición.' },
]

export default function WhyLIT() {
  return (
    <section id="why" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-red-50 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3">
          ¿Por qué nosotros?
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-3 leading-tight">
          Tu negocio merece más que redes improvisadas.
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-10">
          Sabemos que no tienes tiempo para diseñar, escribir copies o entender el algoritmo. Si tus redes están estancadas, nosotros les damos la chispa que necesitan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-[#f8f9ff] rounded-2xl p-7 border-t-4 border-brand-navy">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-brand-navy font-bold text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
