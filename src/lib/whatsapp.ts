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
