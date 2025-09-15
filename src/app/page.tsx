
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TrustSafety from '../components/TrustSafety';
import CommunityImpact from '../components/CommunityImpact';
import Download from '../components/Download';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <div id="top" className="font-sans bg-white text-black min-h-screen flex flex-col">
      <Header />
        <main className="flex-1 w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <TrustSafety />
        <CommunityImpact />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
