export const WHATSAPP_NUMBER = '34600000000' // ← Placeholder — will be replaced with real number later

export const SITE_URL = 'https://litdigitalhub.com' // ← Placeholder

export const PACKS = [
  'Pack Esencial — 250€/mes',
  'Pack Crecimiento — 450€/mes',
  'Pack Elite — 850€/mes',
  'Pack Autogestión 8 — 170€/mes',
  'Pack Autogestión 12 — 250€/mes',
] as const

export type Pack = (typeof PACKS)[number]
