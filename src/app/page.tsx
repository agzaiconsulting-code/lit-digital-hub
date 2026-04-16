'use client'

import { useRef, useState } from 'react'
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
      <div ref={contactRef} className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">
        ContactForm, Footer, WhatsAppFloat coming next...
      </div>
    </main>
  )
}
