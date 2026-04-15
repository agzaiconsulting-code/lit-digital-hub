# LIT Digital Hub — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first, single-page landing in Next.js 14 that convierte visitas de Instagram/Facebook en clientes de LIT Digital Hub, con formulario que redirige a WhatsApp.

**Architecture:** App Router de Next.js con un `page.tsx` que orquesta 8 componentes independientes. El estado `selectedPack` vive en `page.tsx` y fluye hacia abajo — `PricingPlans` lo actualiza vía callback, `ContactForm` lo recibe como prop. La única lógica con tests unitarios reales es `buildWhatsAppUrl()`.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v3, Poppins (next/font/google), Jest + @testing-library/react, Vercel.

---

## File Map

| Archivo | Responsabilidad |
|---|---|
| `src/app/layout.tsx` | Font Poppins, metadata SEO, Open Graph |
| `src/app/globals.css` | Tailwind directives, reset mínimo |
| `src/app/page.tsx` | Orquesta secciones, estado `selectedPack` |
| `src/lib/constants.ts` | `WHATSAPP_NUMBER`, `PACKS`, `SITE_URL` |
| `src/lib/whatsapp.ts` | `buildWhatsAppUrl()` — única lógica testable |
| `src/lib/whatsapp.test.ts` | Tests unitarios de `buildWhatsAppUrl()` |
| `src/components/Navbar.tsx` | Nav sticky responsive |
| `src/components/Hero.tsx` | Hero gradient, logo, H1, CTAs |
| `src/components/WhyLIT.tsx` | 3 benefit cards |
| `src/components/PricingPlans.tsx` | 3 plan cards + callback a page |
| `src/components/AutoGestion.tsx` | 2 packs autogestión, fondo navy |
| `src/components/EliteDifferential.tsx` | Diferencial visita presencial, fondo oscuro |
| `src/components/ContactForm.tsx` | Form → WhatsApp, recibe `selectedPack` |
| `src/components/Footer.tsx` | Footer con RRSS y legales |
| `src/components/WhatsAppFloat.tsx` | Botón flotante fijo |
| `public/LogoLIT.jpeg` | Logo (mover desde raíz del proyecto) |
| `tailwind.config.ts` | Colores brand, fontFamily poppins |
| `jest.config.ts` | Configuración Jest con next/jest |
| `jest.setup.ts` | Import @testing-library/jest-dom |

---

## Task 1: Inicializar proyecto Next.js + Tailwind + Jest

**Files:**
- Create: todos los archivos del scaffold de Next.js
- Modify: `tailwind.config.ts`
- Create: `jest.config.ts`, `jest.setup.ts`
- Move: `LogoLIT.jpeg` → `public/LogoLIT.jpeg`

- [ ] **Step 1: Crear el proyecto Next.js**

Ejecutar en el directorio `C:\Users\Adrian\OneDrive\Escritorio\Claude\web_Lazaro`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Responder a los prompts: aceptar defaults. Si pregunta si está seguro de crear en directorio no vacío, responder `y`.

- [ ] **Step 2: Instalar dependencias de testing**

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 3: Mover el logo a public/**

```bash
mv LogoLIT.jpeg public/LogoLIT.jpeg
```

- [ ] **Step 4: Configurar Tailwind con colores de marca**

Reemplazar el contenido de `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1a2a6c',
        'brand-red': '#ff3131',
        'brand-cyan': '#00d2ff',
        'brand-dark': '#2d2d2d',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: Crear jest.config.ts**

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 6: Crear jest.setup.ts**

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 7: Añadir scripts de test a package.json**

En `package.json`, dentro de `"scripts"`, añadir:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 8: Verificar que el scaffold funciona**

```bash
npm run dev
```

Abrir http://localhost:3000 — debe mostrar la página de bienvenida de Next.js.

- [ ] **Step 9: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 14 + Tailwind + Jest"
```

---

## Task 2: Constants & WhatsApp URL Builder (TDD)

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/lib/whatsapp.ts`
- Create: `src/lib/whatsapp.test.ts`

- [ ] **Step 1: Crear constants.ts**

```typescript
// src/lib/constants.ts
export const WHATSAPP_NUMBER = '34600000000' // ← Reemplazar con el número real del cliente

export const SITE_URL = 'https://litdigitalhub.com' // ← Reemplazar con el dominio real

export const PACKS = [
  'Pack Esencial — 250€/mes',
  'Pack Crecimiento — 450€/mes',
  'Pack Elite — 850€/mes',
  'Pack Autogestión 8 — 170€/mes',
  'Pack Autogestión 12 — 250€/mes',
] as const

export type Pack = (typeof PACKS)[number]
```

- [ ] **Step 2: Escribir los tests que fallan**

```typescript
// src/lib/whatsapp.test.ts
import { buildWhatsAppUrl } from './whatsapp'

const phone = '34600000000'
const fields = {
  name: 'Ana Lopez',
  email: 'ana@test.com',
  telefono: '666111222',
  pack: 'Pack Crecimiento — 450€/mes',
}

describe('buildWhatsAppUrl', () => {
  it('returns a wa.me URL with the correct phone number', () => {
    const url = buildWhatsAppUrl(phone, fields)
    expect(url).toMatch(/^https:\/\/wa\.me\/34600000000\?text=/)
  })

  it('encodes the name in the message', () => {
    const url = buildWhatsAppUrl(phone, fields)
    const decoded = decodeURIComponent(url.split('?text=')[1])
    expect(decoded).toContain('Ana Lopez')
  })

  it('encodes the pack name in the message', () => {
    const url = buildWhatsAppUrl(phone, fields)
    const decoded = decodeURIComponent(url.split('?text=')[1])
    expect(decoded).toContain('Pack Crecimiento')
  })

  it('encodes the email in the message', () => {
    const url = buildWhatsAppUrl(phone, fields)
    const decoded = decodeURIComponent(url.split('?text=')[1])
    expect(decoded).toContain('ana@test.com')
  })

  it('encodes the phone number in the message', () => {
    const url = buildWhatsAppUrl(phone, fields)
    const decoded = decodeURIComponent(url.split('?text=')[1])
    expect(decoded).toContain('666111222')
  })
})
```

- [ ] **Step 3: Ejecutar los tests — verificar que fallan**

```bash
npm test src/lib/whatsapp.test.ts
```

Expected: `FAIL` — "Cannot find module './whatsapp'"

- [ ] **Step 4: Implementar buildWhatsAppUrl**

```typescript
// src/lib/whatsapp.ts
interface WhatsAppFields {
  name: string
  email: string
  telefono: string
  pack: string
}

export function buildWhatsAppUrl(phone: string, fields: WhatsAppFields): string {
  const { name, email, telefono, pack } = fields
  const message = `Hola, soy ${name}. Me interesa el ${pack}. Mi email es ${email} y mi teléfono es ${telefono}.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
```

- [ ] **Step 5: Ejecutar tests — verificar que pasan**

```bash
npm test src/lib/whatsapp.test.ts
```

Expected: `PASS` — 5 tests passed.

- [ ] **Step 6: Commit**

```bash
git add src/lib/constants.ts src/lib/whatsapp.ts src/lib/whatsapp.test.ts
git commit -m "feat: WhatsApp URL builder with tests + constants"
```

---

## Task 3: Layout + Globals

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Reemplazar globals.css**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Reemplazar layout.tsx**

```tsx
// src/app/layout.tsx
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
  openGraph: {
    title: 'LIT Digital Hub — Gestión de Redes Sociales en Galicia',
    description: 'Gestión profesional de redes sociales en Galicia. Desde 250€/mes.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Verificar visualmente**

```bash
npm run dev
```

Abrir http://localhost:3000 — la fuente debe ser Poppins (verificar en DevTools → Computed → font-family).

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat: layout with Poppins font and SEO metadata"
```

---

## Task 4: Navbar

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Crear Navbar.tsx**

```tsx
// src/components/Navbar.tsx
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/LogoLIT.jpeg"
            alt="LIT Digital Hub"
            width={36}
            height={36}
            className="rounded-md object-contain"
          />
          <span className="font-extrabold text-brand-navy text-lg tracking-wide">
            LIT <span className="text-brand-red">Digital Hub</span>
          </span>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">
            ¿Por qué nosotros?
          </a>
          <a href="#planes" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">
            Planes
          </a>
          <a href="#autogestion" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">
            Autogestión
          </a>
          <a href="#contacto" className="text-sm font-medium text-gray-500 hover:text-brand-navy transition-colors">
            Contacto
          </a>
        </div>

        {/* CTA */}
        <a
          href="#planes"
          className="bg-brand-red text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-md hover:opacity-90 transition-opacity"
        >
          Ver Planes y Precios
        </a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Añadir Navbar a page.tsx provisionalmente para verificar**

Reemplazar el contenido de `src/app/page.tsx` con:

```tsx
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen bg-gray-100 flex items-center justify-center text-gray-400">
        Secciones próximamente...
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Verificar visualmente en móvil y desktop**

```bash
npm run dev
```

- Abrir http://localhost:3000
- En móvil (DevTools toggle): solo logo + botón CTA visible.
- En desktop (≥768px): logo + 4 links + botón CTA.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/page.tsx
git commit -m "feat: responsive Navbar component"
```

---

## Task 5: Hero

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Crear Hero.tsx**

```tsx
// src/components/Hero.tsx
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1a2a6c 0%, #2d2d2d 55%, #ff3131 100%)' }}
      className="px-5 py-16 md:py-0 md:min-h-[580px] md:flex md:items-center"
    >
      <div className="max-w-6xl mx-auto w-full md:flex md:items-center md:gap-16">

        {/* Contenido */}
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
            <a
              href="#planes"
              className="bg-brand-red text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Ver Planes y Precios →
            </a>
            <a
              href="#contacto"
              className="border-2 border-white/40 text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Hablar con un experto
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8">
            {['🌐 Contenido ES / Galego', '📊 Basado en métricas', '📅 Publicaciones constantes'].map(
              (badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Logo box — solo desktop */}
        <div className="hidden md:flex flex-shrink-0 justify-center">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-9 text-center">
            <Image
              src="/LogoLIT.jpeg"
              alt="LIT Digital Hub"
              width={160}
              height={160}
              className="rounded-xl object-contain bg-white p-3"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Actualizar page.tsx para incluir Hero**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Verificar visualmente**

```bash
npm run dev
```

Comprobar en móvil y desktop: gradiente correcto, H1 visible, logo desktop a la derecha.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: Hero section with gradient and responsive layout"
```

---

## Task 6: WhyLIT

**Files:**
- Create: `src/components/WhyLIT.tsx`

- [ ] **Step 1: Crear WhyLIT.tsx**

```tsx
// src/components/WhyLIT.tsx
const benefits = [
  {
    icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: 'Identidad local',
    desc: 'Contenido bilingüe (ES/GL) que conecta con tu cliente gallego.',
  },
  {
    icon: '📅',
    title: 'Consistencia garantizada',
    desc: 'Publicaciones constantes, sin huecos vacíos ni semanas en silencio.',
  },
  {
    icon: '📈',
    title: 'Resultados reales',
    desc: 'Estrategias basadas en métricas, no en suerte ni intuición.',
  },
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
          Sabemos que no tienes tiempo para diseñar, escribir copies o entender el algoritmo. Si tus
          redes están estancadas, nosotros les damos la chispa que necesitan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#f8f9ff] rounded-2xl p-7 border-t-4 border-brand-navy"
            >
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
```

- [ ] **Step 2: Añadir a page.tsx**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyLIT />
    </main>
  )
}
```

- [ ] **Step 3: Verificar — 3 cards en grid, borde superior navy**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/components/WhyLIT.tsx src/app/page.tsx
git commit -m "feat: WhyLIT benefits section"
```

---

## Task 7: PricingPlans

**Files:**
- Create: `src/components/PricingPlans.tsx`

- [ ] **Step 1: Crear PricingPlans.tsx**

```tsx
// src/components/PricingPlans.tsx
'use client'

interface PricingPlansProps {
  onSelectPack: (pack: string) => void
}

const plans = [
  {
    name: 'Esencial',
    tagline: 'Tu escaparate profesional',
    price: '250€',
    packKey: 'Pack Esencial — 250€/mes',
    features: [
      'Instagram + Facebook',
      '2 posts/semana',
      'Stories semanales',
      'Atención básica de comunidad',
    ],
    popular: false,
  },
  {
    name: 'Crecimiento',
    tagline: 'El más elegido por nuestros clientes',
    price: '450€',
    packKey: 'Pack Crecimiento — 450€/mes',
    features: [
      'IG + FB + Google / LinkedIn',
      '3 posts/semana (inc. Reels)',
      'Campaña de Ads básica',
      'Reporte mensual de resultados',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    tagline: 'Dominio total de tu presencia',
    price: '850€',
    packKey: 'Pack Elite — 850€/mes',
    features: [
      'Estrategia Omnicanal completa',
      '5 posts/semana',
      'Visita presencial para contenido',
      'Remarketing avanzado',
    ],
    popular: false,
  },
]

export default function PricingPlans({ onSelectPack }: PricingPlansProps) {
  return (
    <section id="planes" className="py-20 px-5 bg-[#f8f9ff]">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-red-50 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3">
          Gestión Integral
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-3 leading-tight">
          Nosotros lo hacemos todo por ti.
        </h2>
        <p className="text-gray-500 text-base mb-10">
          Packs "Do It For You" — tú te centras en tu negocio, nosotros en tus redes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                plan.popular
                  ? 'border-brand-red shadow-xl md:scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  ⭐ El más popular
                </span>
              )}
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
                {plan.name}
              </p>
              <h3 className="text-base font-bold text-brand-navy mb-4">{plan.tagline}</h3>
              <div className="text-4xl font-extrabold text-brand-navy">
                {plan.price}
                <span className="text-sm font-medium text-gray-400"> / mes + IVA</span>
              </div>
              <hr className="my-5 border-gray-200" />
              <ul className="flex flex-col gap-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-gray-600">
                    <span className={`font-bold flex-shrink-0 ${plan.popular ? 'text-brand-red' : 'text-brand-navy'}`}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onSelectPack(plan.packKey)}
                className={`w-full py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90 ${
                  plan.popular ? 'bg-brand-red shadow-lg' : 'bg-brand-navy'
                }`}
              >
                Quiero este pack
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Actualizar page.tsx**

```tsx
'use client'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'
import PricingPlans from '@/components/PricingPlans'

export default function Home() {
  const [selectedPack, setSelectedPack] = useState('')
  const contactRef = useRef<HTMLDivElement>(null)

  const handleSelectPack = (pack: string) => {
    setSelectedPack(pack)
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyLIT />
      <PricingPlans onSelectPack={handleSelectPack} />
      <div ref={contactRef} />
    </main>
  )
}
```

- [ ] **Step 3: Verificar — 3 cards, Crecimiento destacado con badge y escala**

```bash
npm run dev
```

Hacer clic en "Quiero este pack" en Crecimiento — debe hacer scroll (aunque el ref está al final, lo veremos tras integrar ContactForm).

- [ ] **Step 4: Commit**

```bash
git add src/components/PricingPlans.tsx src/app/page.tsx
git commit -m "feat: PricingPlans with 3 cards and pack selection callback"
```

---

## Task 8: AutoGestion

**Files:**
- Create: `src/components/AutoGestion.tsx`

- [ ] **Step 1: Crear AutoGestion.tsx**

```tsx
// src/components/AutoGestion.tsx
'use client'

interface AutoGestionProps {
  onSelectPack: (pack: string) => void
}

const packs = [
  {
    qty: '8',
    label: 'diseños + textos',
    price: '170€',
    packKey: 'Pack Autogestión 8 — 170€/mes',
    name: 'Pack Starter',
  },
  {
    qty: '12',
    label: 'diseños + textos',
    price: '250€',
    packKey: 'Pack Autogestión 12 — 250€/mes',
    name: 'Pack Pro',
  },
]

export default function AutoGestion({ onSelectPack }: AutoGestionProps) {
  return (
    <section id="autogestion" className="py-20 px-5 bg-brand-navy">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">

        {/* Texto y packs */}
        <div>
          <span className="inline-block bg-white/10 text-brand-cyan text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Autogestión
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            ¿Prefieres publicar tú? Nosotros diseñamos.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Estética profesional sin delegar la cuenta. Recibes los diseños y textos listos para
            publicar cuando quieras.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {packs.map((pack) => (
              <button
                key={pack.packKey}
                onClick={() => onSelectPack(pack.packKey)}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl font-extrabold text-brand-cyan leading-none">{pack.qty}</div>
                <div className="text-white/60 text-xs mt-1">{pack.label}</div>
                <div className="text-white text-xl font-bold mt-3">{pack.price}</div>
                <div className="text-white/50 text-xs">+ IVA / mes</div>
                <div className="text-white/70 text-xs mt-2">{pack.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Info lateral — solo desktop */}
        <div className="hidden md:block bg-white/10 rounded-2xl p-8">
          <p className="text-white/80 text-base leading-relaxed">
            Ideal para quienes quieren{' '}
            <strong className="text-brand-cyan">estética profesional</strong> sin delegar la
            cuenta. Tú mantienes el control, nosotros te damos las herramientas para brillar en
            redes sociales.
          </p>
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Añadir a page.tsx**

```tsx
'use client'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'
import PricingPlans from '@/components/PricingPlans'
import AutoGestion from '@/components/AutoGestion'

export default function Home() {
  const [selectedPack, setSelectedPack] = useState('')
  const contactRef = useRef<HTMLDivElement>(null)

  const handleSelectPack = (pack: string) => {
    setSelectedPack(pack)
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyLIT />
      <PricingPlans onSelectPack={handleSelectPack} />
      <AutoGestion onSelectPack={handleSelectPack} />
      <div ref={contactRef} />
    </main>
  )
}
```

- [ ] **Step 3: Verificar — fondo navy, 2 packs clickables**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/components/AutoGestion.tsx src/app/page.tsx
git commit -m "feat: AutoGestion section on navy background"
```

---

## Task 9: EliteDifferential

**Files:**
- Create: `src/components/EliteDifferential.tsx`

- [ ] **Step 1: Crear EliteDifferential.tsx**

```tsx
// src/components/EliteDifferential.tsx
const items = [
  { icon: '📸', text: 'Sesión de fotos y vídeo en tu local' },
  { icon: '🎬', text: 'Contenido nativo, auténtico y diferencial' },
  { icon: '🗺️', text: 'Presencia física en toda Galicia' },
]

export default function EliteDifferential() {
  return (
    <section className="py-20 px-5 bg-brand-dark">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">

        {/* Texto */}
        <div>
          <span className="inline-block bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-5">
            Solo Pack Elite
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Vamos a tu negocio. Capturamos tu esencia.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            No somos una agencia lejana. Vamos a tu negocio, capturamos la esencia de tu trabajo en
            fotos y vídeos profesionales y los transformamos en contenido de alto impacto.
          </p>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-3.5"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-white font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual decorativo — solo desktop */}
        <div className="hidden md:flex items-center justify-center">
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
```

- [ ] **Step 2: Añadir a page.tsx**

```tsx
'use client'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'
import PricingPlans from '@/components/PricingPlans'
import AutoGestion from '@/components/AutoGestion'
import EliteDifferential from '@/components/EliteDifferential'

export default function Home() {
  const [selectedPack, setSelectedPack] = useState('')
  const contactRef = useRef<HTMLDivElement>(null)

  const handleSelectPack = (pack: string) => {
    setSelectedPack(pack)
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyLIT />
      <PricingPlans onSelectPack={handleSelectPack} />
      <AutoGestion onSelectPack={handleSelectPack} />
      <EliteDifferential />
      <div ref={contactRef} />
    </main>
  )
}
```

- [ ] **Step 3: Verificar — fondo oscuro, badge rojo "Solo Pack Elite"**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/components/EliteDifferential.tsx src/app/page.tsx
git commit -m "feat: EliteDifferential section on dark background"
```

---

## Task 10: ContactForm (TDD)

**Files:**
- Create: `src/components/ContactForm.tsx`
- Create: `src/components/ContactForm.test.tsx`

- [ ] **Step 1: Escribir los tests que fallan**

```tsx
// src/components/ContactForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

const mockOpen = jest.fn()
Object.defineProperty(window, 'open', { value: mockOpen, writable: true })

beforeEach(() => {
  mockOpen.mockClear()
})

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm selectedPack="" />)
    expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+34 600 000 000')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('pre-selects the pack passed via prop', () => {
    render(<ContactForm selectedPack="Pack Crecimiento — 450€/mes" />)
    const select = screen.getByRole('combobox') as HTMLSelectElement
    expect(select.value).toBe('Pack Crecimiento — 450€/mes')
  })

  it('opens WhatsApp URL with correct data on submit', () => {
    render(<ContactForm selectedPack="" />)
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Ana Lopez' } })
    fireEvent.change(screen.getByPlaceholderText('tu@email.com'), { target: { value: 'ana@test.com' } })
    fireEvent.change(screen.getByPlaceholderText('+34 600 000 000'), { target: { value: '666111222' } })
    fireEvent.click(screen.getByText(/Enviar por WhatsApp/i))
    expect(mockOpen).toHaveBeenCalledTimes(1)
    const calledUrl = mockOpen.mock.calls[0][0] as string
    expect(calledUrl).toMatch(/^https:\/\/wa\.me\//)
    const decoded = decodeURIComponent(calledUrl.split('?text=')[1])
    expect(decoded).toContain('Ana Lopez')
    expect(decoded).toContain('ana@test.com')
  })
})
```

- [ ] **Step 2: Ejecutar — verificar que fallan**

```bash
npm test src/components/ContactForm.test.tsx
```

Expected: `FAIL` — "Cannot find module './ContactForm'"

- [ ] **Step 3: Implementar ContactForm.tsx**

```tsx
// src/components/ContactForm.tsx
'use client'

import { useEffect, useState } from 'react'
import { PACKS, WHATSAPP_NUMBER } from '@/lib/constants'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

interface ContactFormProps {
  selectedPack: string
}

export default function ContactForm({ selectedPack }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefono: '',
    pack: PACKS[0],
  })

  useEffect(() => {
    if (selectedPack) {
      setForm((prev) => ({ ...prev, pack: selectedPack }))
    }
  }, [selectedPack])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const url = buildWhatsAppUrl(WHATSAPP_NUMBER, form)
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="py-20 px-5">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-start">

        {/* Info de confianza */}
        <div className="mb-10 md:mb-0">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-3">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 leading-tight">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Cuéntanos qué necesitas y te respondemos en menos de 24h. Sin compromisos.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { icon: '⚡', title: 'Respuesta en menos de 24h', desc: 'Te contactamos directamente por WhatsApp.' },
              { icon: '🎯', title: 'Sin permanencia', desc: 'Contratos mensuales, sin ataduras.' },
              { icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', title: 'Equipo local', desc: 'Conocemos Galicia y su mercado.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-[#f8f9ff] rounded-2xl p-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Nombre
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-poppins focus:outline-none focus:border-brand-navy"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Teléfono
              </label>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="+34 600 000 000"
                className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-poppins focus:outline-none focus:border-brand-navy"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
              className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-poppins focus:outline-none focus:border-brand-navy"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Pack de interés
            </label>
            <select
              name="pack"
              value={form.pack}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm bg-white font-poppins focus:outline-none focus:border-brand-navy"
            >
              {PACKS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm py-3.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity mt-1"
          >
            💬 Enviar por WhatsApp
          </button>
        </form>

      </div>
    </section>
  )
}
```

- [ ] **Step 4: Ejecutar tests — verificar que pasan**

```bash
npm test src/components/ContactForm.test.tsx
```

Expected: `PASS` — 3 tests passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactForm.tsx src/components/ContactForm.test.tsx
git commit -m "feat: ContactForm with WhatsApp redirect and pack pre-selection (TDD)"
```

---

## Task 11: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Crear Footer.tsx**

```tsx
// src/components/Footer.tsx
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy px-5 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:justify-between md:items-center mb-8">
          {/* Logo + tagline */}
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <Image
              src="/LogoLIT.jpeg"
              alt="LIT Digital Hub"
              width={40}
              height={40}
              className="rounded-lg object-contain bg-white p-1"
            />
            <div>
              <p className="text-white font-extrabold text-lg tracking-wide leading-none">
                LIT <span className="text-brand-red">Digital Hub</span>
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                Encendemos el potencial digital de tu negocio.
              </p>
            </div>
          </div>

          {/* RRSS */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              📸 Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              👍 Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:flex md:justify-between md:items-center">
          <p className="text-white/30 text-xs mb-3 md:mb-0">
            © {year} LIT Digital Hub. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="/aviso-legal" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Aviso Legal
            </a>
            <a href="/privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: Footer with logo, RRSS links and legal links"
```

---

## Task 12: WhatsAppFloat

**Files:**
- Create: `src/components/WhatsAppFloat.tsx`

- [ ] **Step 1: Crear WhatsAppFloat.tsx**

```tsx
// src/components/WhatsAppFloat.tsx
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <>
      {/* Etiqueta — solo desktop */}
      <div className="hidden md:block fixed bottom-10 right-24 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg z-50">
        ¿Hablamos?
      </div>
      {/* Botón */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl z-50 hover:scale-110 transition-transform"
      >
        <span className="text-3xl">💬</span>
      </a>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/WhatsAppFloat.tsx
git commit -m "feat: WhatsApp floating button"
```

---

## Task 13: Page Assembly Final

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Reemplazar page.tsx con la versión completa**

```tsx
// src/app/page.tsx
'use client'

import { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'
import PricingPlans from '@/components/PricingPlans'
import AutoGestion from '@/components/AutoGestion'
import EliteDifferential from '@/components/EliteDifferential'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  const [selectedPack, setSelectedPack] = useState('')
  const contactRef = useRef<HTMLDivElement>(null)

  const handleSelectPack = (pack: string) => {
    setSelectedPack(pack)
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <WhyLIT />
      <PricingPlans onSelectPack={handleSelectPack} />
      <AutoGestion onSelectPack={handleSelectPack} />
      <EliteDifferential />
      <div ref={contactRef}>
        <ContactForm selectedPack={selectedPack} />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
```

- [ ] **Step 2: Ejecutar todos los tests**

```bash
npm test
```

Expected: `PASS` — todos los tests en verde.

- [ ] **Step 3: Verificar el build de producción**

```bash
npm run build
```

Expected: sin errores, output muestra rutas estáticas.

- [ ] **Step 4: Test de smoke completo en dev**

```bash
npm run dev
```

Recorrer el flujo completo:
1. Ver Hero en móvil (DevTools 390px)
2. Ver Hero en desktop
3. Scroll hasta Precios — Crecimiento destacado y elevado
4. Clic en "Quiero este pack" del Crecimiento — verifica scroll a ContactForm y pack preseleccionado en el select
5. Clic en "Quiero este pack" del Autogestión 12 — verifica mismo comportamiento
6. Rellenar el formulario y clic "Enviar por WhatsApp" — debe abrir nueva pestaña con URL `https://wa.me/...`
7. Botón flotante visible en esquina inferior derecha
8. Links del Footer funcionales

- [ ] **Step 5: Actualizar WHATSAPP_NUMBER con el número real del cliente**

En `src/lib/constants.ts`, reemplazar:
```typescript
export const WHATSAPP_NUMBER = '34600000000'
```
Con el número real (formato internacional sin `+`, ej: `34612345678`).

- [ ] **Step 6: Commit final**

```bash
git add -A
git commit -m "feat: complete LIT Digital Hub landing page"
```

---

## Task 14: Deploy a Vercel

**Files:**
- No se crean archivos nuevos.

- [ ] **Step 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

- [ ] **Step 2: Login en Vercel**

```bash
vercel login
```

Seguir el flujo de autenticación en el navegador.

- [ ] **Step 3: Desplegar en preview**

```bash
vercel
```

Responder prompts:
- "Set up and deploy?" → `Y`
- "Which scope?" → seleccionar la cuenta
- "Link to existing project?" → `N`
- "What's your project's name?" → `lit-digital-hub`
- "In which directory is your code located?" → `.`

Expected: URL de preview `https://lit-digital-hub-xxx.vercel.app`

- [ ] **Step 4: Verificar el preview**

Abrir la URL de preview. Comprobar:
- Hero se ve correctamente
- El formulario → WhatsApp funciona
- El botón flotante es visible

- [ ] **Step 5: Desplegar a producción**

```bash
vercel --prod
```

Expected: URL de producción.

- [ ] **Step 6: (Opcional) Configurar dominio personalizado**

En el dashboard de Vercel → Settings → Domains → añadir el dominio del cliente.

---

## Self-Review

**Cobertura del spec:**

| Requisito del spec | Task que lo implementa |
|---|---|
| Hero con gradiente, logo, H1, CTAs, badges | Task 5 |
| Navbar sticky responsive, sin hamburguesa | Task 4 |
| WhyLIT 3 benefits | Task 6 |
| 3 planes con precios y CTA que preselecciona pack | Task 7 |
| Autogestión sobre fondo navy | Task 8 |
| EliteDifferential sobre fondo oscuro | Task 9 |
| Formulario → WhatsApp con pack preseleccionado | Task 10 |
| Footer con RRSS y legales | Task 11 |
| Botón flotante WhatsApp | Task 12 |
| Poppins font | Task 3 |
| SEO metadata + Open Graph | Task 3 |
| WHATSAPP_NUMBER en constante | Task 2 |
| buildWhatsAppUrl con TDD | Task 2 |
| Vercel deploy | Task 14 |

**Sin placeholders:** Todas las tasks tienen código completo.

**Consistencia de tipos:** `PACKS` se define en `constants.ts` Task 2 y se consume en `ContactForm.tsx` Task 10 — mismo import path `@/lib/constants`. `buildWhatsAppUrl(phone, fields)` se define en Task 2 y se llama en Task 10 con la misma firma.
