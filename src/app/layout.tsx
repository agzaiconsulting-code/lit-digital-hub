import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'LIT Digital Hub — Gestión de Redes Sociales en Galicia',
  description:
    'Gestión profesional de redes sociales, contenido y estrategia digital en Galicia. Desde 250€/mes. Resultados reales.',
  icons: {
    icon: '/favicon.jpeg',
  },
  openGraph: {
    title: 'LIT Digital Hub — Gestión de Redes Sociales en Galicia',
    description: 'Gestión profesional de redes sociales en Galicia. Desde 250€/mes.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}
