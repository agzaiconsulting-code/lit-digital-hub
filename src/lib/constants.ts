export const WHATSAPP_NUMBER = '34623558674' 

export const SITE_URL = 'https://litdigitalhub.com' // ← Placeholder

export const PACKS = [
  'Pack Esencial — 300€/mes + IVA',
  'Pack Crecimiento — 550€/mes + IVA',
  'Pack Elite — 950€/mes + IVA',
  'Pack Autogestión 8 — 190€/mes + IVA',
  'Pack Autogestión 12 — 290€/mes + IVA',
  'Prueba LIT (Pack gratuito de muestra)',
] as const

export type Pack = (typeof PACKS)[number]
