export default function Download() {
  return (
    <section id="download" className="py-16 bg-white" aria-label="Download section">
  <h2 className="font-montserrat font-extrabold text-3xl text-black mb-8 text-center drop-shadow">Download BandhuConnect+ App</h2>
      <div className="flex flex-col items-center gap-4">
        {/* App store badges as SVG */}
        <div className="flex gap-4">
          <a href="#" data-cursor="black" className="flex items-center gap-2 bg-[#1dbe3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#16a32b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1dbe3a]/30 transition" aria-label="Download for Android">
            <img src="/assets/images/android.png" alt="" width="24" height="24" className="flex-shrink-0" aria-hidden="true" />
            Android
          </a>
          <a href="#" data-cursor="black" className="flex items-center gap-2 bg-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD23F] transition" aria-label="Download for iOS">
            <img src="/assets/images/apple.png" alt="" width="24" height="24" className="flex-shrink-0" aria-hidden="true" />
            iOS
          </a>
        </div>
        {/* QR code placeholder */}
        <div className="w-32 h-32 bg-white border border-black rounded flex items-center justify-center mt-4">
          <span className="text-black">[QR Code]</span>
        </div>
  <p className="text-black mt-2 font-medium">Supported devices: Android & iOS | Free to use</p>
  <div className="mt-2 text-sm text-black">System requirements: Android 8.0+, iOS 13+</div>
      </div>
    </section>
  );
}