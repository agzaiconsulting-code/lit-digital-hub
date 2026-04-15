# LIT Digital Hub — Landing Page Design Spec

**Date:** 2026-04-15  
**Status:** Approved  

---

## 1. Objetivo

Landing page de conversión para **LIT Digital Hub**, agencia de gestión de redes sociales y estrategia digital en Galicia. El objetivo principal es convertir visitas procedentes de Instagram/Facebook en clientes que contraten uno de los packs de servicio.

---

## 2. Stack Técnico

| Decisión | Elección |
|---|---|
| Framework | Next.js 14 (App Router) |
| Estilos | Tailwind CSS |
| Fuente | Poppins (Google Fonts) — 400, 600, 700, 800 |
| Hosting | Vercel (free tier) |
| Formulario | Redirige a WhatsApp (sin backend) |
| Imágenes | Logo: `LogoLIT.jpeg` (en raíz del proyecto → mover a `public/`) |

---

## 3. Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `brand-navy` | `#1a2a6c` | Color principal, titulares, nav |
| `brand-red` | `#ff3131` | CTAs, plan destacado, acento |
| `brand-cyan` | `#00d2ff` | Acentos secundarios en fondos oscuros |
| `brand-dark` | `#2d2d2d` | Sección diferencial Elite |
| `brand-navy-deep` | `#1a1a2e` | Fondo oscuro alternativo (no usado actualmente) |

---

## 4. Estilo Visual

- **Dirección:** Gradient Hero — el hero usa `linear-gradient(135deg, #1a2a6c 0%, #2d2d2d 55%, #ff3131 100%)`. El resto de la página alterna entre blanco, `#f8f9ff`, navy (`#1a2a6c`) y oscuro (`#2d2d2d`).
- **Tipografía:** Poppins. Titulares en 800, subtítulos en 600, cuerpo en 400.
- **Border radius:** 8–14px en cards, 20px en badges/pills.
- **Mobile-first:** El 80%+ del tráfico vendrá de Instagram/Facebook (móvil). Breakpoint principal: `md` (768px) para pasar a layout desktop.

---

## 5. Estructura de Secciones

### 5.1 Navbar
- **Móvil:** Logo texto + botón CTA "Ver Planes". Sin menú hamburguesa (la página es corta).
- **Desktop:** Logo (imagen + texto) | Links de sección | Botón CTA rojo.
- Sticky, fondo blanco, sombra sutil.

### 5.2 Hero
- **Fondo:** Gradiente navy → dark → red.
- **Móvil:** Stack vertical — logo centrado, H1, subtítulo, CTA, badges.
- **Desktop:** Dos columnas — contenido a la izquierda, caja con logo + stats a la derecha.
- **H1:** "Encendemos el **potencial digital** de tu negocio." (`potencial digital` en `#00d2ff`).
- **CTA primario:** "Ver Planes y Precios →" (botón rojo).
- **CTA secundario desktop:** "Hablar con un experto" (borde blanco).
- **Badges:** 📍 Galicia · 🌐 ES/GL · 📊 Basado en métricas.

### 5.3 ¿Por qué LIT?
- Fondo blanco.
- Párrafo introductorio sobre puntos de dolor.
- **Móvil:** Stack vertical. **Desktop:** Grid 3 columnas.
- 3 benefit cards con borde superior navy:
  1. 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Identidad local — contenido bilingüe ES/GL.
  2. 📅 Consistencia garantizada — publicaciones constantes.
  3. 📈 Resultados reales — estrategias basadas en métricas.

### 5.4 Packs Gestión Integral
- Fondo `#f8f9ff`.
- **Móvil:** Stack vertical. **Desktop:** Grid 3 columnas, plan Crecimiento con `scale(1.04)` y borde rojo.
- 3 planes:

| Plan | Precio | Incluye |
|---|---|---|
| Esencial | 250€/mes + IVA | IG+FB, 2 posts/sem, Stories, comunidad básica |
| Crecimiento ⭐ | 450€/mes + IVA | IG+FB+Google/LinkedIn, 3 posts/sem (Reels), Ads básica, reporte mensual |
| Elite | 850€/mes + IVA | Omnicanal, 5 posts/sem, visita presencial, remarketing |

- Cada plan tiene CTA "Quiero este pack" → scroll a sección Contacto con pack preseleccionado.

### 5.5 Packs Autogestión
- **Fondo:** Navy `#1a2a6c` para diferenciar visualmente del bloque anterior.
- Título: "¿Prefieres publicar tú? Nosotros diseñamos."
- 2 opciones:
  - Pack Starter: 8 diseños + 8 textos → **170€/mes + IVA**
  - Pack Pro: 12 diseños + 12 textos → **250€/mes + IVA**
- **Desktop:** Layout 2 columnas — planes a la izquierda, texto "ideal para..." a la derecha.

### 5.6 Diferencial Elite (Visita Presencial)
- **Fondo:** Oscuro `#2d2d2d`.
- Badge rojo: "SOLO PACK ELITE".
- Texto explicando la visita presencial.
- 3 items: Sesión foto/vídeo · Contenido nativo · Presencia en Galicia.
- **Desktop:** 2 columnas — texto a la izquierda, visual decorativo a la derecha.

### 5.7 Contacto
- Fondo blanco.
- **Formulario:** Nombre, Email, Teléfono, Pack de interés (select).
- **CTA:** "Enviar por WhatsApp" → construye URL `https://wa.me/NUMERO?text=...` con los datos del formulario y abre en nueva pestaña.
- **Desktop:** 2 columnas — info de confianza a la izquierda (respuesta en 24h, sin permanencia, equipo local), formulario a la derecha.

### 5.8 Footer
- Fondo navy `#1a2a6c`.
- **Móvil:** Stack centrado — logo, botones RRSS, links legales.
- **Desktop:** Logo + tagline a la izquierda, RRSS a la derecha. Segunda fila: copyright + Aviso Legal + Privacidad.

### 5.9 WhatsApp Flotante
- Botón circular verde fijo `bottom-8 right-8`.
- En desktop muestra también etiqueta "¿Hablamos?".
- Al hacer clic abre `https://wa.me/NUMERO` en nueva pestaña.
- El número de WhatsApp se define en una constante en `src/lib/constants.ts`.

---

## 6. Comportamiento del Formulario

```
1. Usuario rellena nombre, email, teléfono y selecciona pack.
2. Al pulsar "Enviar por WhatsApp":
   - Se construye el mensaje: 
     "Hola, soy [Nombre]. Me interesa el [Pack seleccionado]. 
      Mi email es [email] y mi teléfono es [teléfono]."
   - Se abre: https://wa.me/NUMERO?text=MENSAJE_ENCODIFICADO
3. Sin validación compleja — solo campos requeridos básicos (HTML5).
```

---

## 7. Estructura de Archivos Next.js

```
src/
  app/
    layout.tsx          ← fuente Poppins, metadata SEO, favicon
    page.tsx            ← importa todas las secciones
  components/
    Navbar.tsx
    Hero.tsx
    WhyLIT.tsx
    PricingPlans.tsx
    AutoGestion.tsx
    EliteDifferential.tsx
    ContactForm.tsx
    Footer.tsx
    WhatsAppFloat.tsx
  lib/
    constants.ts        ← WHATSAPP_NUMBER, colores, textos reutilizables
public/
  LogoLIT.jpeg
```

---

## 8. SEO & Metadata

- `title`: "LIT Digital Hub — Gestión de Redes Sociales en Galicia"
- `description`: "Gestión profesional de redes sociales, contenido y estrategia digital en Galicia. Desde 250€/mes. Resultados reales."
- `lang`: `es`
- `viewport`: mobile-first
- Open Graph básico para compartir en RRSS.

---

## 9. Lo que NO incluye este proyecto

- CMS ni panel de administración.
- Blog o sección de noticias.
- Autenticación.
- Analytics (el cliente puede añadir Google Analytics/Meta Pixel después).
- Versión en gallego (el contenido es en castellano; bilingüe se menciona como servicio, no como feature de la web).
