function Card({ title, subtitle, children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_5px_30px_rgba(0,0,0,0.04)]">
      <div className="absolute inset-0 pointer-events-none opacity-80" aria-hidden>
        {/* Subtle cross motif and arches via layered gradients */}
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_30%,rgba(168,85,247,0.12),transparent_60%),conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0.05)_0deg,transparent_90deg,rgba(0,0,0,0.05)_180deg,transparent_270deg,rgba(0,0,0,0.05)_360deg)]" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.06" stroke="currentColor" className="text-neutral-900">
            <path d="M200 30v340M30 200h340" strokeWidth="10" strokeLinecap="square"/>
            <path d="M200 50c60 0 110 50 110 110s-50 110-110 110-110-50-110-110 50-110 110-110Z" strokeWidth="1"/>
            <path d="M200 90c38 0 70 32 70 70s-32 70-70 70-70-32-70-70 32-70 70-70Z" strokeWidth="0.8"/>
          </g>
        </svg>
      </div>
      <div className="relative p-6 sm:p-8">
        <div className="text-xs tracking-[0.4em] uppercase text-neutral-500">{subtitle}</div>
        <h3 className="mt-2 text-2xl font-semibold tracking-wide">{title}</h3>
        <div className="mt-5 text-neutral-700 leading-relaxed">
          {children}
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-600">
          Discover
          <span className="inline-block h-px w-10 bg-neutral-400 group-hover:w-16 transition-all" />
        </div>
      </div>
    </div>
  );
}

function CollectionShowcase() {
  return (
    <section id="collection" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-7xl h-full px-6">
          <div className="h-full rounded-3xl bg-gradient-to-b from-purple-50/60 to-white" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-600">The House Codes</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Gothic Lines. Coptic Light. Contemporary Silence.</h2>
          <p className="mt-4 text-neutral-700">Each piece is a meditation on sacred geometry and the murmured verses of history. Minimal forms. Iridescent surfaces. Objects that feel discovered rather than designed.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="The Anima Bottle" subtitle="Parfum">
            A prismatic glass vessel echoing cathedral lancets. Notes of black fig, labdanum, and smoked myrrha chiaroscuro of light and shadow.
          </Card>
          <Card title="Reliquary Tote" subtitle="Leather Atelier">
            Sculpted calfskin with hand-stitched crossesa quiet reliquary for the everyday. Lined in silk, sealed with a hidden prayer.
          </Card>
          <Card title="Scriptorium Ring" subtitle="Atelier">
            Polished palladium engraved in Ge7ez-inspired glyphs. A circle to hold your vows to creation and restraint.
          </Card>
        </div>

        <div id="story" className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold">The Name, The Garden</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              FOTTOKOGAE stands for Fruit of the Tree of Knowledge of Good and Evil. We honor the hinge of human storythe reach toward knowing. Our practice embraces the sacred and the modern: clean silhouettes, liturgical undertones, and materials that catch light like stained glass.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              In our world, luxury is a kind of stillness. We pare away excess to reveal devotion: to craft, to meaning, to the beauty of restraint.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <div className="aspect-[4/3]">
              <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_50%,rgba(124,58,237,0.20),transparent_60%)]" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#f5f3ff" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="800" height="600" fill="url(#g1)"/>
                <g opacity="0.15" stroke="#0a0a0a">
                  <path d="M400 40v520M40 300h720" strokeWidth="14"/>
                  <path d="M400 90c110 0 200 90 200 200s-90 200-200 200-200-90-200-200 90-200 200-200Z"/>
                  <path d="M400 150c77 0 140 63 140 140s-63 140-140 140-140-63-140-140 63-140 140-140Z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div id="contact" className="mt-20 grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold">Private Appointments</h3>
            <p className="mt-4 text-neutral-700">Request a private viewing in Paris, London, or New York. We host within quiet chapels of lighttemporary sanctuaries for contemplation and choice.</p>
          </div>
          <form className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_5px_30px_rgba(0,0,0,0.04)]">
            <label className="block text-xs uppercase tracking-widest text-neutral-600">Email</label>
            <input type="email" required placeholder="you@domain.com" className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900"/>
            <button className="mt-4 w-full rounded-lg bg-neutral-900 text-white px-4 py-3 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors">Request Invitation</button>
            <p className="mt-3 text-[11px] text-neutral-500">By requesting, you agree to our ritual of privacy. We reserve the right to respond with silence.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CollectionShowcase;
