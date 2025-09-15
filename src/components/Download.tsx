export default function Download() {
  return (
    <section id="download" className="py-16 bg-gray-50" aria-label="Download section">
  <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">Download BandhuConnect+ App</h2>
      <div className="flex flex-col items-center gap-4">
        {/* App store badges as SVG */}
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD23F] transition" aria-label="Download for Android">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="3" fill="#fff"/><path d="M6 6l-2-2M18 6l2-2" stroke="#FF6B35" strokeWidth="2"/><circle cx="8" cy="18" r="2" fill="#FFD23F"/><circle cx="16" cy="18" r="2" fill="#FFD23F"/></svg>
            Android
          </a>
          <a href="#" className="flex items-center gap-2 bg-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD23F] transition" aria-label="Download for iOS">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" fill="#fff"/><path d="M12 8v8M8 12h8" stroke="#4A90E2" strokeWidth="2"/></svg>
            iOS
          </a>
        </div>
        {/* QR code placeholder */}
        <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center mt-4">
          <span className="text-gray-500">[QR Code]</span>
        </div>
  <p className="text-black mt-2 font-medium">Supported devices: Android & iOS | Free to use</p>
  <div className="mt-2 text-sm text-black">System requirements: Android 8.0+, iOS 13+</div>
      </div>
    </section>
  );
}