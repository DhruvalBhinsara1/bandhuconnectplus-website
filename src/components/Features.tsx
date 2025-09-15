export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50" aria-label="Features section">
  <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" role="list">
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Emergency Aid SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-gold inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><path d="M20 12v16M12 20h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Emergency Aid Request</h3>
          <p className="text-black text-center font-medium">Get instant help from verified volunteers during emergencies.</p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Location SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-blue inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><path d="M20 13a7 7 0 0 1 7 7c0 4.5-7 10-7 10s-7-5.5-7-10a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#fff"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Real-time Volunteer Tracking</h3>
          <p className="text-black text-center font-medium">See nearby volunteers and get help fast, wherever you are.</p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Language SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-gold inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><text x="50%" y="55%" textAnchor="middle" fill="#2C2C2C" fontSize="16" fontFamily="Arial" dy=".3em">अ</text></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Multi-language Support</h3>
          <p className="text-black text-center font-medium">Available in Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, Kannada, Odia, Malayalam.</p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Offline Maps SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-gold inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FFD23F"/><rect x="12" y="14" width="16" height="12" rx="2" fill="#fff"/><path d="M12 20h16" stroke="#FF6B35" strokeWidth="2"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Offline Maps</h3>
          <p className="text-black text-center font-medium">Navigate the Mela grounds even without internet access.</p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Community Chat SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-blue inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#4A90E2"/><rect x="13" y="15" width="14" height="8" rx="2" fill="#fff"/><path d="M13 23l-2 4" stroke="#4A90E2" strokeWidth="2"/><circle cx="17" cy="19" r="1" fill="#4A90E2"/><circle cx="21" cy="19" r="1" fill="#4A90E2"/><circle cx="25" cy="19" r="1" fill="#4A90E2"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Community Chat</h3>
          <p className="text-black text-center font-medium">Connect and communicate with fellow pilgrims and volunteers.</p>
        </div>
  <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center hover:translate-y-[-4px] transform transition" role="listitem">
          {/* Safe Zone Alerts SVG */}
          <span className="mb-4 p-3 rounded-full bg-brand-orange inline-flex items-center justify-center" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF6B35"/><rect x="15" y="15" width="10" height="10" rx="2" fill="#fff"/><path d="M20 18v4" stroke="#FF6B35" strokeWidth="2"/><circle cx="20" cy="22" r="1" fill="#FF6B35"/></svg>
          </span>
          <h3 className="font-bold text-xl mb-2 text-black">Safe Zone Alerts</h3>
          <p className="text-black text-center font-medium">Receive notifications about safe zones and important updates.</p>
        </div>
      </div>
    </section>
  );
}