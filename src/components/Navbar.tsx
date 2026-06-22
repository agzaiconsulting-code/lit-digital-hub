'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const servicios = [
  { label: 'Gestión Integral', href: '/#planes' },
  { label: 'Autogestión', href: '/#autogestion' },
  { label: 'Identidad Visual', href: '/#identidad-visual' },
  { label: 'Desarrollo & IA', href: '/#desarrollo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/LogoLIT.jpeg" alt="LIT Digital Hub" width={36} height={36} className="rounded-md object-contain" />
          <span className="font-extrabold text-brand-navy text-lg tracking-wide">
            LIT <span className="text-brand-red">Digital Hub</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#why" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">¿Por qué nosotros?</a>

          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors"
            >
              Servicios
              <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                {servicios.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-brand-navy transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/#prueba" className="text-sm font-bold text-brand-red hover:opacity-80 transition-opacity">Prueba LIT</a>
          <a href="/#contacto" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">Contacto</a>
        </div>

        <a href="/#planes" className="bg-brand-red text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-md hover:opacity-90 transition-opacity">
          Ver Planes y Precios
        </a>
      </div>
    </nav>
  )
}
