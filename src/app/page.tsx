
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Onboarding from '../components/Onboarding';

// Dynamically import non-critical components to reduce initial bundle size
const WhyBandhuConnect = dynamic(() => import('../components/WhyBandhuConnect'), {
  loading: () => <div className="py-16 bg-gray-50"><div className="max-w-[1100px] w-full mx-auto px-6"><div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div></div></div>
});
const Features = dynamic(() => import('../components/Features'), {
  loading: () => <div className="py-24 lg:py-32 bg-white"><div className="site-container"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><div className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div><div className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div><div className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div></div></div></div>
});
const TrustSafety = dynamic(() => import('../components/TrustSafety'), {
  loading: () => <div className="py-24 lg:py-32 bg-white"><div className="site-container"><div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div></div></div>
});
const CommunityImpact = dynamic(() => import('../components/CommunityImpact'), {
  loading: () => <div className="py-24 lg:py-32 bg-white"><div className="site-container"><div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div></div></div>
});
const Download = dynamic(() => import('../components/Download'), {
  loading: () => <div className="py-16 bg-white"><div className="flex flex-col items-center gap-4"><div className="h-32 bg-gray-100 rounded-lg w-full max-w-md animate-pulse"></div></div></div>
});
const FAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => <div className="py-24 lg:py-32 bg-white"><div className="site-container"><div className="h-80 bg-gray-100 rounded-lg animate-pulse"></div></div></div>
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="bg-gray-100"><div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div></div>
});

export default function Home() {
  return (
    <div id="top" className="font-sans bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
  <Hero />
  <Onboarding theme="light" />
        <WhyBandhuConnect />
  <Features />
        <TrustSafety />
        <CommunityImpact />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
