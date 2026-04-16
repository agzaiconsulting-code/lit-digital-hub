import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/LogoLIT.jpeg" alt="LIT Digital Hub" width={36} height={36} className="rounded-md object-contain" />
          <span className="font-extrabold text-brand-navy text-lg tracking-wide">
            LIT <span className="text-brand-red">Digital Hub</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">¿Por qué nosotros?</a>
          <a href="#planes" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">Planes</a>
          <a href="#autogestion" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">Autogestión</a>
          <a href="#contacto" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">Contacto</a>
        </div>
        <a href="#planes" className="bg-brand-red text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-md hover:opacity-90 transition-opacity">
          Ver Planes y Precios
        </a>
      </div>
    </nav>
  )
}
