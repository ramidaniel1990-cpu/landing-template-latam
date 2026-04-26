import siteConfig from '../data/config';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      <Navbar config={siteConfig} />
      <Hero config={siteConfig} />
      <FadeIn>
        <Services config={siteConfig} />
      </FadeIn>
      <FadeIn delay={100}>
        <About config={siteConfig} />
      </FadeIn>
      <FadeIn delay={50}>
        <Contact config={siteConfig} />
      </FadeIn>
      <WhatsAppButton config={siteConfig} />
    </>
  );
}
