# Contexto del Proyecto

## Qué estamos construyendo
Template de landing page profesional en Next.js + TypeScript + Tailwind
para vender a negocios pequeños de LATAM (restaurantes, clínicas, talleres).

## Arquitectura
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── WhatsAppButton.tsx
├── types/
│   └── index.ts
└── data/
    └── config.ts

## Reglas
1. Tipos e interfaces siempre en src/types/index.ts, nunca inline
2. Textos y datos del negocio solo en src/data/config.ts
3. Componentes importan tipos desde types/index.ts
4. Comentarios en español
5. Código limpio y profesional

## Stack
- Next.js 15 con App Router
- TypeScript
- Tailwind CSS
- Deploy en Vercel


## Estado Actual
**Fase:** En desarrollo - Mejoras de diseño

## Cambios Realizados

### Diseño
- Navbar fija con logo, links de navegación y botón CTA WhatsApp
- Hero mejorado: min-h-screen, tipografía impactante, gradiente sofisticado
- Cards de servicios con sombra, hover effects y badges de precio
- Animaciones fade-in al hacer scroll (Intersection Observer)
- Paleta de colores más sofisticada en config.ts

### Tipografía
- Inter → textos de cuerpo
- Playfair Display → headings principales
- Importadas desde Google Fonts en layout.tsx

### Componentes Actuales
- Navbar.tsx ← nuevo
- Hero.tsx ← mejorado
- Services.tsx ← mejorado
- About.tsx
- Contact.tsx
- WhatsAppButton.tsx ← flotante

## Próximos Pasos
- [ ] Deploy en Vercel
- [ ] Crear variantes para clínica y taller mecánico
- [ ] Sistema de prospección con n8n