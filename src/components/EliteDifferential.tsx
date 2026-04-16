const items = [
  { icon: '📸', text: 'Sesión de fotos y vídeo en tu local' },
  { icon: '🎬', text: 'Contenido nativo, auténtico y diferencial' },
  { icon: '🗺️', text: 'Presencia física en toda Galicia' },
]

export default function EliteDifferential() {
  return (
    <section className="py-20 px-5 bg-brand-dark">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">
        <div>
          <span className="inline-block bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            Solo Pack Elite
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Vamos a tu negocio. Capturamos tu esencia.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            No somos una agencia lejana. Vamos a tu negocio, capturamos la esencia de tu trabajo en fotos y vídeos profesionales y los transformamos en contenido de alto impacto.
          </p>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-3.5">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-white font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center mt-8 md:mt-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
            <div className="text-8xl mb-5">🎥</div>
            <p className="text-white font-semibold text-lg">Visita presencial incluida</p>
            <p className="text-white/40 text-sm mt-2">Solo disponible en Pack Elite</p>
          </div>
        </div>
      </div>
    </section>
  )
}
