import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[90vh] flex items-stretch">
      <div className="relative w-full grid md:grid-cols-2">
        {/* 3D Scene */}
        <div className="relative h-[60vh] md:h-auto">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft gradient and vignette overlays - do not block pointer events */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/10" />
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.08)_100%)]" />
        </div>

        {/* Copy */}
        <div className="relative flex items-center">
          <div className="px-6 py-12 md:py-20 lg:px-12 max-w-xl">
            <p className="text-xs tracking-[0.5em] uppercase text-neutral-600">An Homage</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              FOTTOKOGAE
              <span className="block text-base sm:text-lg tracking-widest mt-3 text-neutral-600">Fruit of the Tree of Knowledge of Good and Evil</span>
            </h1>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              A high luxury maison devoted to the sublime tension between innocence and knowing. Our creations weave modern minimalism with gothic and Coptic echoesevoking sanctuaries, stained glass, and the silent geometry of devotion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#collection" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors">Explore Collection</a>
              <a href="#story" className="inline-flex items-center rounded-full border border-neutral-900 px-6 py-3 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">Our Story</a>
            </div>
            <div aria-hidden className="mt-10 flex items-center gap-6 text-neutral-500">
              <div className="h-px w-16 bg-neutral-300" />
              <span className="text-xs tracking-widest uppercase">The Fragrance of Creativity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
