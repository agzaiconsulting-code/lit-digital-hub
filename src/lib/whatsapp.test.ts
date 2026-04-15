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
