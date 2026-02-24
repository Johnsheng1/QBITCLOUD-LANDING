import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Network from '@/components/Network';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SakuraBackground from '@/components/SakuraBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SakuraBackground />
      <Navbar />
      <Hero />
      <Features />
      <Network />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
