import Image from 'next/image'

export default function Hero() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1a2a6c 0%, #2d2d2d 55%, #ff3131 100%)' }}
      className="px-5 py-16 md:py-0 md:min-h-[580px] md:flex md:items-center"
    >
      <div className="max-w-6xl mx-auto w-full md:flex md:items-center md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-white/10 border border-white/20 text-brand-cyan text-xs font-bold px-4 py-1.5 rounded-full tracking-widest mb-5">
            📍 AGENCIA DIGITAL EN GALICIA
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Encendemos el{' '}
            <span className="text-brand-cyan">potencial digital</span>{' '}
            de tu negocio.
          </h1>
          <p className="text-white/80 text-base leading-relaxed mb-8 md:max-w-lg">
            Gestión profesional de redes sociales, creación de contenido y estrategia digital en
            Galicia. Deléganos tu presencia online para que tú te centres en vender.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="#planes" className="bg-brand-red text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
              Ver Planes y Precios →
            </a>
            <a href="#contacto" className="border-2 border-white/40 text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Hablar con un experto
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8">
            {['🌐 Contenido ES / Galego', '📊 Basado en métricas', '📅 Publicaciones constantes'].map((badge) => (
              <span key={badge} className="bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-shrink-0 justify-center">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-9 text-center">
            <Image src="/LogoLIT.jpeg" alt="LIT Digital Hub" width={160} height={160} className="rounded-xl object-contain bg-white p-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
