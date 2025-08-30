function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-xl tracking-[0.2em] font-semibold">FOTTOKOGAE</div>
          <p className="mt-3 text-neutral-600">Fruit of the Tree of Knowledge of Good and Evil.</p>
          <p className="mt-2 text-neutral-500">© {new Date().getFullYear()} All rites reserved.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-600">Maison</div>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li><a href="#collection" className="hover:text-neutral-900">Collection</a></li>
            <li><a href="#story" className="hover:text-neutral-900">Story</a></li>
            <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-600">Boutiques</div>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>Paris — 7th</li>
            <li>London — Mayfair</li>
            <li>New York — SoHo</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-600">Communion</div>
          <div className="mt-3 flex gap-3">
            <a href="#" className="rounded-full border border-neutral-300 px-3 py-2 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="rounded-full border border-neutral-300 px-3 py-2 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
