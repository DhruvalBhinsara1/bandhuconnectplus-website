export default function TrustSafety() {
  return (
    <section id="trust" className="py-16 bg-gray-50" aria-label="Trust & Safety section">
  <div className="site-container px-6">
        <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">Trust & Safety</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Trust badges */}
          <div className="flex flex-col gap-6 items-start">
            <span className="flex items-center gap-2 bg-brand-gold text-black px-4 py-2 rounded-full font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#FF6B35"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              Verified Volunteers
            </span>
            <span className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#FFD23F"/><path d="M12 8v4l3 2" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/></svg>
              24/7 Support
            </span>
            <span className="flex items-center gap-2 bg-brand-orange text-white px-4 py-2 rounded-full font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#4A90E2"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/><path d="M12 12v2" stroke="#4A90E2" strokeWidth="2"/></svg>
              Privacy Protection
            </span>
          </div>

          {/* Testimonial card */}
          <div className="bg-white shadow rounded-lg p-6 flex-1 flex flex-col items-start">
            <span className="mb-2" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><path d="M20 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="#fff"/></svg>
            </span>
            <blockquote className="italic text-black text-left mb-2 font-bold">“BandhuConnect+ helped me find my family quickly and safely during the Mela. The volunteers were amazing!”</blockquote>
            <span className="text-sm text-black font-semibold">— Priya Sharma, Pilgrim</span>
          </div>

          {/* Security protocol summary */}
          <div className="bg-white shadow rounded-lg p-6 max-w-md lg:max-w-lg">
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2 text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#4A90E2"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/><path d="M12 12v2" stroke="#4A90E2" strokeWidth="2"/></svg>
              Emergency Response
            </h3>
            <ul className="list-disc pl-5 text-black text-sm font-medium">
              <li>Data encryption and privacy policy</li>
              <li>Verified volunteers and quick response</li>
              <li>24/7 support for all emergencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}