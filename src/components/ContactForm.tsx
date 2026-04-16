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
        <form onSubmit={handleSubmit} className="bg-[#f8f9ff] rounded-2xl p-8 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Nombre</label>
              <input
                name="name" value={form.name} onChange={handleChange} required
                placeholder="Tu nombre"
                className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-navy"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Teléfono</label>
              <input
                name="telefono" value={form.telefono} onChange={handleChange} required
                placeholder="+34 600 000 000"
                className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-navy"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email</label>
            <input
              name="email" type="email" value={form.email} onChange={handleChange} required
              placeholder="tu@email.com"
              className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-navy"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Pack de interés</label>
            <select
              name="pack" value={form.pack} onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-lg px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-brand-navy"
            >
              {PACKS.map((p) => (
                <option key={p} value={p}>{p}</option>
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
