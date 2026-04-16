import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <>
      <div className="hidden md:block fixed bottom-10 right-24 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg z-50">
        ¿Hablamos?
      </div>
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
