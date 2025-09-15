
export default function Home() {
  return (
    <div className="font-sans bg-white text-charcoal min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between px-6 py-4" role="banner">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-[#FF6B35]">BandhuConnect+</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
          <a href="#features" className="hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0}>Features</a>
          <a href="#how-it-works" className="hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0}>How It Works</a>
          <a href="#trust" className="hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0}>Trust & Safety</a>
          <a href="#community" className="hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0}>Community Impact</a>
          <a href="#download" className="hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" tabIndex={0}>Download</a>
        </nav>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button aria-label="Open menu" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6B35]" onClick={() => {
            const nav = document.getElementById('mobile-nav');
            if (nav) nav.classList.toggle('hidden');
          }}>
            <svg width="24" height="24" fill="none" stroke="#FF6B35" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {/* CTAs, Language, Accessibility */}
        <div className="hidden md:flex gap-2 items-center">
          <a href="#download" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFD23F] transition focus:outline-none focus:ring-2 focus:ring-[#FFD23F]">Download App</a>
          <select className="ml-2 border rounded px-2 py-1 text-sm" aria-label="Select language">
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <button className="ml-2 px-2 py-1 border rounded text-sm" aria-label="Toggle high contrast" tabIndex={0}>A</button>
        </div>
      </header>
      {/* Mobile Navigation Drawer */}
      <nav id="mobile-nav" className="md:hidden hidden flex-col bg-white shadow-lg absolute top-16 left-0 w-full z-40" aria-label="Mobile navigation">
        <a href="#features" className="block px-6 py-3 border-b hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">Features</a>
        <a href="#how-it-works" className="block px-6 py-3 border-b hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">How It Works</a>
        <a href="#trust" className="block px-6 py-3 border-b hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">Trust & Safety</a>
        <a href="#community" className="block px-6 py-3 border-b hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">Community Impact</a>
        <a href="#download" className="block px-6 py-3 border-b hover:bg-[#FFD23F]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">Download</a>
        <div className="flex gap-2 px-6 py-3 items-center">
          <a href="#download" className="bg-[#FF6B35] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#FFD23F] transition">Download App</a>
          <select className="ml-2 border rounded px-2 py-1 text-sm" aria-label="Select language">
            <option value="en">EN</option>
            <option value="hi">HI</option>
          </select>
          <button className="ml-2 px-2 py-1 border rounded text-sm" aria-label="Toggle high contrast">A</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-8">
        {/* Hero Section */}
        <section id="hero" className="relative flex flex-col items-center justify-center py-16 text-center bg-gradient-to-br from-[#FFD23F]/20 to-[#FF6B35]/10 overflow-hidden" aria-label="Hero section">
          {/* Sacred geometry animated background (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <circle cx="50%" cy="50%" r="180" fill="#FFD23F" fillOpacity="0.08" />
            <circle cx="50%" cy="50%" r="120" fill="#FF6B35" fillOpacity="0.06" />
            <circle cx="50%" cy="50%" r="60" fill="#4A90E2" fillOpacity="0.04" />
          </svg>
          <div className="relative z-10 w-full flex flex-col items-center">
            <h1 className="font-montserrat font-bold text-4xl sm:text-6xl text-[#FF6B35] mb-4">Your Trusted Companion for Mahakumbh Mela</h1>
            <p className="text-lg sm:text-2xl text-charcoal mb-8 max-w-2xl">Connecting pilgrims and volunteers for a safe, spiritual, and seamless experience at Mahakumbh Mela, Ujjain.</p>
            <div className="flex gap-4 justify-center mb-8">
              <a href="#download" className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD23F] transition focus:outline-none focus:ring-2 focus:ring-[#FFD23F]" aria-label="Download for Android">Download for Android</a>
              <a href="#download" className="bg-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD23F] transition focus:outline-none focus:ring-2 focus:ring-[#FFD23F]" aria-label="Download for iOS">Download for iOS</a>
            </div>
            {/* Hero image/video placeholder */}
            <div className="w-full h-64 bg-gradient-to-r from-[#FFD23F]/30 to-[#FF6B35]/20 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-[#4A90E2] text-2xl">[Hero Image/Video Here]</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16" aria-label="Features section">
          <h2 className="font-montserrat font-bold text-3xl text-[#FF6B35] mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" role="list">
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Emergency Aid SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Emergency Aid Request</h3>
              <p className="text-charcoal text-center">Get instant help from verified volunteers during emergencies.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Location SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><path d="M20 13a7 7 0 0 1 7 7c0 4.5-7 10-7 10s-7-5.5-7-10a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#fff"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Real-time Volunteer Tracking</h3>
              <p className="text-charcoal text-center">See nearby volunteers and get help fast, wherever you are.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Language SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><text x="50%" y="55%" textAnchor="middle" fill="#2C2C2C" fontSize="16" fontFamily="Arial" dy=".3em">अ</text></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Multi-language Support</h3>
              <p className="text-charcoal text-center">Available in Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, Kannada, Odia, Malayalam.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Offline Maps SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><rect x="12" y="14" width="16" height="12" rx="2" fill="#fff"/><path d="M12 20h16" stroke="#FF6B35" strokeWidth="2"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Offline Maps</h3>
              <p className="text-charcoal text-center">Navigate the Mela grounds even without internet access.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Community Chat SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><rect x="13" y="15" width="14" height="8" rx="2" fill="#fff"/><path d="M13 23l-2 4" stroke="#4A90E2" strokeWidth="2"/><circle cx="17" cy="19" r="1" fill="#4A90E2"/><circle cx="21" cy="19" r="1" fill="#4A90E2"/><circle cx="25" cy="19" r="1" fill="#4A90E2"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Community Chat</h3>
              <p className="text-charcoal text-center">Connect and communicate with fellow pilgrims and volunteers.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center" role="listitem">
              {/* Safe Zone Alerts SVG */}
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><rect x="15" y="15" width="10" height="10" rx="2" fill="#fff"/><path d="M20 18v4" stroke="#FF6B35" strokeWidth="2"/><circle cx="20" cy="22" r="1" fill="#FF6B35"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Safe Zone Alerts</h3>
              <p className="text-charcoal text-center">Receive notifications about safe zones and important updates.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-[#FFD23F]/10 rounded-xl" aria-label="How It Works section">
          <h2 className="font-montserrat font-bold text-3xl text-[#FF6B35] mb-8 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Step-by-step timeline with SVG icons */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF6B35"/><path d="M10 22v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" stroke="#fff" strokeWidth="2"/><rect x="14" y="10" width="4" height="4" rx="2" fill="#fff"/></svg>
                </span>
                <span className="font-semibold">Download the app</span>
              </div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FFD23F"/><path d="M16 10v12M10 16h12" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <span className="font-semibold">Onboard and set up your profile</span>
              </div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#4A90E2"/><rect x="12" y="14" width="8" height="4" rx="2" fill="#fff"/><path d="M16 18v4" stroke="#4A90E2" strokeWidth="2"/></svg>
                </span>
                <span className="font-semibold">Request help or volunteer</span>
              </div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF6B35"/><path d="M10 22l6-6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <span className="font-semibold">Connect and get assistance</span>
              </div>
            </div>
            {/* Volunteer onboarding card with SVG */}
            <div className="bg-white shadow rounded-lg p-6 mt-8 md:mt-0 flex flex-col items-center">
              <span className="mb-2" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><path d="M20 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="#fff"/></svg>
              </span>
              <h3 className="font-bold text-xl mb-2">Volunteer Onboarding</h3>
              <p className="text-charcoal text-center">Sign up, get verified, and start helping pilgrims in need.</p>
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section id="trust" className="py-16">
          <h2 className="font-montserrat font-bold text-3xl text-[#FF6B35] mb-8 text-center">Trust & Safety</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Trust badges and testimonials placeholder */}
            <div className="flex flex-col gap-4">
              <span className="bg-[#FFD23F] text-[#2C2C2C] px-4 py-2 rounded-full font-semibold">Verified Volunteers</span>
              <span className="bg-[#4A90E2] text-white px-4 py-2 rounded-full font-semibold">24/7 Support</span>
              <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full font-semibold">Privacy Protection</span>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-8 md:mt-0">
              <h3 className="font-bold text-xl mb-2">Emergency Response</h3>
              <p className="text-charcoal">Robust protocols and quick action for all emergencies.</p>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section id="community" className="py-16 bg-[#4A90E2]/10 rounded-xl">
          <h2 className="font-montserrat font-bold text-3xl text-[#FF6B35] mb-8 text-center">Community Impact</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Stats and stories placeholder */}
            <div className="flex flex-col gap-4">
              <span className="font-bold text-2xl text-[#FF6B35]">10,000+ Pilgrims Helped</span>
              <span className="font-bold text-2xl text-[#4A90E2]">2,000+ Volunteers</span>
              <span className="font-bold text-2xl text-[#FFD23F]">50+ Events Supported</span>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-8 md:mt-0">
              <h3 className="font-bold text-xl mb-2">Success Stories</h3>
              <p className="text-charcoal">Read how BandhuConnect+ made a difference for real people.</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16">
          <h2 className="font-montserrat font-bold text-3xl text-[#FF6B35] mb-8 text-center">Download BandhuConnect+ App</h2>
          <div className="flex flex-col items-center gap-4">
            {/* App store badges and QR code placeholder */}
            <div className="flex gap-4">
              <span className="bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold">Android</span>
              <span className="bg-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold">iOS</span>
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center mt-4">
              <span className="text-gray-500">[QR Code]</span>
            </div>
            <p className="text-charcoal mt-2">Supported devices: Android & iOS | Free to use</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#trust" className="hover:underline">Trust & Safety</a></li>
              <li><a href="#community" className="hover:underline">Community Impact</a></li>
              <li><a href="#download" className="hover:underline">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Social Media</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Info</h4>
            <ul className="space-y-1">
              <li>Email: info@bandhuconnectplus.com</li>
              <li>Phone: +91-XXXXXXXXXX</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Newsletter Signup</h4>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="px-2 py-1 rounded text-black" required />
              <button type="submit" className="bg-[#FF6B35] text-white px-4 py-2 rounded font-semibold">Subscribe</button>
              <span className="text-xs mt-1">We respect your privacy.</span>
            </form>
          </div>
        </div>
        <div className="text-center text-xs mt-8">© {new Date().getFullYear()} BandhuConnect+. All rights reserved.</div>
      </footer>
    </div>
  );
}
