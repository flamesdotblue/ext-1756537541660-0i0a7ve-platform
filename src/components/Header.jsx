import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Collection', href: '#collection' },
    { label: 'Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-baseline space-x-2">
          <span className="text-2xl tracking-[0.2em] font-semibold">FOTTOKOGAE</span>
          <span className="hidden sm:inline text-xs text-neutral-500 tracking-widest group-hover:text-neutral-700 transition-colors">FRUIT OF THE TREE</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-widest uppercase text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#shop"
            className="inline-flex items-center rounded-full border border-neutral-900 px-4 py-2 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Enter Boutique
          </a>
        </nav>

        <button
          aria-label="Open Menu"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-neutral-900 px-3 py-2 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm tracking-widest uppercase text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="block mt-2 w-full text-center rounded-full border border-neutral-900 px-4 py-2 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Enter Boutique
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
