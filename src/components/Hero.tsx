import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
}

export default function Hero({ config }: HeroProps) {
  const { business, contact, theme } = config;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber.replace(/\D/g, '')}?text=Hola, me gustaría obtener más información`;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 text-center overflow-hidden">
      {/* Imagen de fondo — reemplazar /hero-bg.jpg por foto real del cliente */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Overlay con gradiente sofisticado */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            160deg,
            ${theme.secondaryColor}F0 0%,
            ${theme.primaryColor}CC 50%,
            ${theme.secondaryColor}E8 100%
          )`,
        }}
      />

      {/* Detalle decorativo — círculo difuso */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: theme.accentColor }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-7 pt-16">
        {/* Eyebrow */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/30 bg-white/10"
        >
          {business.slogan}
        </span>

        {/* Título principal en Playfair Display */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight">
          {business.name}
        </h1>

        {/* Descripción */}
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
          {business.description}
        </p>

        {/* Línea decorativa */}
        <div
          className="w-16 h-0.5 rounded-full"
          style={{ backgroundColor: theme.accentColor }}
        />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: theme.accentColor, color: '#fff' }}
          >
            Contáctanos por WhatsApp
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Ver servicios
          </a>
        </div>

        {/* Stats opcionales */}
        <div className="flex gap-12 mt-8 pt-8 border-t border-white/20">
          {[
            { value: '10+', label: 'Años de experiencia' },
            { value: '5.000+', label: 'Clientes satisfechos' },
            { value: '4.9★', label: 'Calificación promedio' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold" style={{ color: theme.accentColor }}>
                {stat.value}
              </p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
