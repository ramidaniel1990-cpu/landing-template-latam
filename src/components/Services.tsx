import { SiteConfig } from '../types';

interface ServicesProps {
  config: SiteConfig;
}

export default function Services({ config }: ServicesProps) {
  const { services, theme } = config;

  return (
    <section id="servicios" className="py-28 px-6" style={{ backgroundColor: '#F4F6F9' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: theme.accentColor }}
          >
            Lo que ofrecemos
          </span>
          <h2
            className="font-display text-5xl font-bold mt-3 mb-5"
            style={{ color: theme.secondaryColor }}
          >
            Nuestros Servicios
          </h2>
          <div
            className="w-12 h-0.5 mx-auto rounded-full"
            style={{ backgroundColor: theme.accentColor }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 flex flex-col gap-5
                         border border-transparent
                         shadow-sm hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: 'transparent',
              }}
            >
              {/* Número de tarjeta */}
              <span
                className="absolute top-6 right-6 text-xs font-bold opacity-10 font-display"
                style={{ color: theme.primaryColor, fontSize: '3rem', lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Ícono */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                           transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${theme.primaryColor}12` }}
              >
                {service.icon}
              </div>

              {/* Título */}
              <h3
                className="text-xl font-bold leading-tight"
                style={{ color: theme.secondaryColor }}
              >
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Badge de precio */}
              {service.price && (
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${theme.accentColor}20`,
                      color: theme.accentColor,
                    }}
                  >
                    {service.price}
                  </span>
                </div>
              )}

              {/* Línea de acento al hover — bottom border */}
              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: theme.accentColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
