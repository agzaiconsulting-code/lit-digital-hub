import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:justify-between md:items-center mb-8">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <Image src="/LogoLIT.jpeg" alt="LIT Digital Hub" width={40} height={40} className="rounded-lg object-contain bg-white p-1" />
            <div>
              <p className="text-white font-extrabold text-lg tracking-wide leading-none">
                LIT <span className="text-brand-red">Digital Hub</span>
              </p>
              <p className="text-white/50 text-xs mt-0.5">Encendemos el potencial digital de tu negocio.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              📸 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              👍 Facebook
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 md:flex md:justify-between md:items-center">
          <p className="text-white/30 text-xs mb-3 md:mb-0">© {year} LIT Digital Hub. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="/aviso-legal" className="text-white/30 text-xs hover:text-white/60 transition-colors">Aviso Legal</a>
            <a href="/privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
