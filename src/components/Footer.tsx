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
            <a href="https://www.instagram.com/lit_digitalhub?igsh=NXNnM3ZjNnBydGRu" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Instagram">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/18TzVeypWs/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 md:flex md:justify-between md:items-center">
          <p className="text-white/30 text-xs mb-3 md:mb-0">© {year} LIT Digital Hub. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="/aviso-legal" className="text-white/30 text-xs hover:text-white/60 transition-colors">Aviso Legal</a>
            <a href="/politica-privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">Política de Privacidad</a>
            <a href="/cookies" className="text-white/30 text-xs hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
