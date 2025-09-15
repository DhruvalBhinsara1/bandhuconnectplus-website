export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-[#FFD23F]/10 rounded-xl" aria-label="How It Works section">
  <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Step-by-step timeline with SVG icons */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF6B35"/><path d="M10 22v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" stroke="#fff" strokeWidth="2"/><rect x="14" y="10" width="4" height="4" rx="2" fill="#fff"/></svg>
            </span>
              <span className="font-bold text-black">Download the app</span>
          </div>
          <div className="flex items-center gap-4">
            <span aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FFD23F"/><path d="M16 10v12M10 16h12" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
              <span className="font-bold text-black">Onboard and set up your profile</span>
          </div>
          <div className="flex items-center gap-4">
            <span aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#4A90E2"/><rect x="12" y="14" width="8" height="4" rx="2" fill="#fff"/><path d="M16 18v4" stroke="#4A90E2" strokeWidth="2"/></svg>
            </span>
              <span className="font-bold text-black">Request help or volunteer</span>
          </div>
          <div className="flex items-center gap-4">
            <span aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF6B35"/><path d="M10 22l6-6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
              <span className="font-bold text-black">Connect and get assistance</span>
          </div>
        </div>
        {/* Volunteer onboarding card with SVG */}
        <div className="bg-white shadow rounded-lg p-6 mt-8 md:mt-0 flex flex-col items-center">
          <span className="mb-2" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><path d="M20 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="#fff"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Volunteer Onboarding</h3>
          <p className="text-black text-center font-medium">Sign up, get verified, and start helping pilgrims in need.</p>
        </div>
      </div>
    </section>
  );
}