# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build`
- Test: `npm test` / single file: `npm test src/lib/whatsapp.test.ts`
- Lint: `npm run lint`

## Architecture

Next.js App Router + Tailwind CSS v3 + Poppins (Google Fonts) + Jest + Vercel.

- Components: `src/components/` — one file per section, purely presentational
- Lib: `src/lib/constants.ts` (WHATSAPP_NUMBER, PACKS), `src/lib/whatsapp.ts` (buildWhatsAppUrl)
- Logo: `public/LogoLIT.jpeg`
- Brand colors (Tailwind): `brand-navy` #1a2a6c · `brand-red` #ff3131 · `brand-cyan` #00d2ff · `brand-dark` #2d2d2d
- Hero gradient: `linear-gradient(135deg, #1a2a6c 0%, #2d2d2d 55%, #ff3131 100%)`
- Contact form: no backend — builds `wa.me/` URL via `buildWhatsAppUrl()` and opens in new tab
- Pack selection state lives in `page.tsx` (`selectedPack`), flows via callback to PricingPlans/AutoGestion, via prop to ContactForm

## Gotchas

- `create-next-app` installs Tailwind v4 by default — this project uses **v3** (tailwind.config.ts pattern)
- `jest.config.ts` requires `ts-node` as devDependency to run
- Jest property is `setupFilesAfterEnv`, not `setupFilesAfterFramework`
- Directory name `web_Lazaro` (uppercase) breaks `npm init` — scaffold in temp dir if re-creating

## Implementation status

Tasks 1–3 complete (scaffold, WhatsApp utility, layout). Tasks 4–14 in progress (components → deploy).
See `docs/superpowers/plans/2026-04-15-lit-digital-hub.md` for full plan.

Piensa antes de actuar. lee los archivos antes de escribir código. Edita solo lo que cambia, no reescribas archivos enteros. No releas archivos que ya has leido salvo que hayan cambiado. No repitas código sin cambios en tus respuestas. Sin preambulos, sin resumenes, solo explicar lo obvio. 