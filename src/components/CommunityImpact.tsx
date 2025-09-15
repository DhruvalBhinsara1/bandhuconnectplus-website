export default function CommunityImpact() {
  return (
    <section id="community" className="py-16 bg-[#4A90E2]/10 rounded-xl" aria-label="Community Impact section">
  <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">Community Impact</h2>
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Stats with SVG icons */}
        <div className="flex flex-col gap-6 items-start">
          <div className="bg-white px-4 py-3 rounded-lg shadow-md">
            <span className="flex items-center gap-3 font-bold text-2xl text-black">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#FFD23F"/><path d="M18 9a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c-5 0-10 3-10 6v3h20v-3c0-3-5-6-10-6z" fill="#FF6B35"/></svg>
              10,000+ Pilgrims Helped
            </span>
          </div>
          <div className="bg-white px-4 py-3 rounded-lg shadow-md">
            <span className="flex items-center gap-3 font-bold text-2xl text-black">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#4A90E2"/><rect x="12" y="12" width="12" height="12" rx="2" fill="#FFD23F"/></svg>
              2,000+ Volunteers
            </span>
          </div>
          <div className="bg-white px-4 py-3 rounded-lg shadow-md">
            <span className="flex items-center gap-3 font-bold text-2xl text-black">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#FF6B35"/><rect x="10" y="10" width="16" height="16" rx="3" fill="#FFD23F"/></svg>
              50+ Events Supported
            </span>
          </div>
        </div>
        {/* Success stories and testimonials */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white shadow rounded-lg p-6 w-full flex flex-col items-start">
            <span className="mb-2" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="22" fill="#FFD23F"/><path d="M22 14a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 13c-5 0-10 3-10 6v3h20v-3c0-3-5-6-10-6z" fill="#fff"/></svg>
            </span>
            <blockquote className="italic text-black text-left mb-2">“Our group was lost, but BandhuConnect+ volunteers guided us to safety. Truly a blessing!”</blockquote>
            <span className="text-sm text-black font-semibold">— Rajesh Kumar, Pilgrim</span>
          </div>
          <div className="bg-white shadow rounded-lg p-6 w-full flex flex-col items-start">
            <h3 className="font-bold text-lg">Community Spotlight</h3>
            <p className="text-black mt-2">We partnered with local organizers to set up 15 safe-zone booths across the Mela, helping thousands.</p>
          </div>
        </div>
        {/* Interactive map placeholder */}
  <div className="bg-white shadow rounded-lg p-6 mt-0 max-w-md lg:max-w-lg flex flex-col items-center">
          <span className="mb-2" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><rect x="12" y="16" width="16" height="8" rx="2" fill="#FFD23F"/><path d="M20 16v8" stroke="#4A90E2" strokeWidth="2"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Map of Impact</h3>
          <p className="text-black text-center font-medium">[Interactive map coming soon]</p>
        </div>
      </div>
    </section>
  );
}