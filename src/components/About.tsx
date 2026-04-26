import { SiteConfig } from '../types';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  const { about, theme } = config;

  return (
    <section id="nosotros" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: theme.secondaryColor }}
          >
            {about.title}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: theme.primaryColor }}
          />
        </div>

        <p
          className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          {about.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.mission && (
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#F7FAFC' }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl"
                style={{ backgroundColor: theme.primaryColor }}
              >
                🎯
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: theme.secondaryColor }}
              >
                Misión
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{about.mission}</p>
            </div>
          )}

          {about.vision && (
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#F7FAFC' }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl"
                style={{ backgroundColor: theme.accentColor }}
              >
                🔭
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: theme.secondaryColor }}
              >
                Visión
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{about.vision}</p>
            </div>
          )}

          {about.values && about.values.length > 0 && (
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#F7FAFC' }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl"
                style={{ backgroundColor: theme.secondaryColor }}
              >
                ⭐
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: theme.secondaryColor }}
              >
                Valores
              </h3>
              <ul className="flex flex-wrap justify-center gap-2">
                {about.values.map((value) => (
                  <li
                    key={value}
                    className="px-3 py-1 rounded-full text-sm text-white font-medium"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
