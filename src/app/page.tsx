'use client'

import { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyLIT from '@/components/WhyLIT'
import PricingPlans from '@/components/PricingPlans'
import AutoGestion from '@/components/AutoGestion'
import PruebaLIT from '@/components/PruebaLIT'
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
      <PruebaLIT />
      <div ref={contactRef} id="contacto">
        <ContactForm selectedPack={selectedPack} />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
