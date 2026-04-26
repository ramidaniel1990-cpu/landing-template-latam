// Tipos y interfaces para el template de landing page
// Todos los tipos se definen aquí y se exportan para uso en componentes

// Información básica del negocio
export interface BusinessInfo {
  name: string; // Nombre del negocio
  description: string; // Descripción breve
  slogan: string; // Eslogan o tagline
  logoUrl?: string; // URL del logo (opcional)
}

// Información de contacto
export interface ContactInfo {
  phone: string; // Número de teléfono
  email: string; // Correo electrónico
  address: string; // Dirección física
  whatsappNumber: string; // Número de WhatsApp
}

// Servicio individual
export interface Service {
  id: string; // Identificador único
  title: string; // Título del servicio
  description: string; // Descripción detallada
  icon?: string; // Ícono (puede ser una clase de Tailwind o URL)
  price?: string; // Precio opcional
}

// Información sobre la empresa
export interface AboutInfo {
  title: string; // Título de la sección "Sobre nosotros"
  description: string; // Descripción de la empresa
  mission?: string; // Misión (opcional)
  vision?: string; // Visión (opcional)
  values?: string[]; // Valores de la empresa (opcional)
}

// Configuración general de colores y estilos
export interface ThemeConfig {
  primaryColor: string; // Color primario (ej. '#FF6B35')
  secondaryColor: string; // Color secundario
  accentColor: string; // Color de acento
  backgroundColor: string; // Color de fondo
  textColor: string; // Color del texto
}

// Configuración completa del sitio
export interface SiteConfig {
  business: BusinessInfo;
  contact: ContactInfo;
  services: Service[];
  about: AboutInfo;
  theme: ThemeConfig;
}