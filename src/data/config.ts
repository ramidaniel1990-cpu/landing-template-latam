import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  business: {
    name: 'Sabores Latinos',
    description: 'El mejor restaurante de comida tradicional latinoamericana en tu ciudad',
    slogan: 'Sabores que unen familias',
    logoUrl: '/logo.png',
  },
  contact: {
    phone: '+57 300 123 4567',
    email: 'info@saboreslatinos.com',
    address: 'Calle 10 # 5-20, Centro, Ciudad',
    whatsappNumber: '+57 300 123 4567',
  },
  services: [
    {
      id: 'platos-tipicos',
      title: 'Platos Típicos',
      description: 'Disfruta de nuestros platos tradicionales como bandeja paisa, ajiaco y ceviche, preparados con ingredientes frescos y recetas auténticas.',
      icon: '🍽️',
      price: 'Desde $25.000 COP',
    },
    {
      id: 'catering',
      title: 'Servicio de Catering',
      description: 'Perfecto para eventos, reuniones familiares o corporativas. Ofrecemos menús personalizados con entrega a domicilio.',
      icon: '🎉',
      price: 'Desde $50.000 COP',
    },
    {
      id: 'delivery',
      title: 'Delivery Rápido',
      description: 'Recibe tu comida favorita en la puerta de tu casa en menos de 30 minutos. Disponible en toda la ciudad.',
      icon: '🚚',
      price: 'Envío gratis en pedidos +$30.000 COP',
    },
  ],
  about: {
    title: 'Sobre Sabores Latinos',
    description: 'Desde 2015, Sabores Latinos ha sido el lugar donde las familias se reúnen para disfrutar de la auténtica comida latinoamericana. Nuestro compromiso es ofrecer calidad, frescura y un servicio excepcional.',
    mission: 'Brindar experiencias culinarias inolvidables que conecten a las personas con sus raíces culturales.',
    vision: 'Ser el restaurante líder en comida latinoamericana en la región, reconocido por nuestra calidad y servicio.',
    values: ['Calidad', 'Tradición', 'Servicio', 'Sostenibilidad'],
  },
  theme: {
    primaryColor: '#1E3A5F',    // azul marino profundo
    secondaryColor: '#0B1F35',  // azul noche (casi negro)
    accentColor: '#C9A84C',     // oro cálido
    backgroundColor: '#FAFAFA', // blanco cálido
    textColor: '#111827',       // negro suave
  },
};

export default siteConfig;
