import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: 'Modelo de Atención', href: '#modelo' },
  { label: 'Población', href: '#poblacion' },
  { label: 'Enfoques', href: '#enfoques' },
  { label: 'Nuestro Equipo', href: '#equipo' },
  { label: 'Ruta de Atención', href: '#ruta' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brand-navy/5'
          : 'bg-transparent'
      }`}
    >
      {/* Institutional badge */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="bg-brand-navy text-white/90 text-xs font-medium px-4 py-2 text-center">
          Alcaldía de Rionegro | Secretaría de Familia | Pastoral Social Sonsón Rionegro
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-24 py-2 lg:min-h-28">
          {/* Logo */}
          <a href="#hero" className="flex flex-col items-start gap-1.5 group">
            <div className="relative w-44 h-14 rounded-xl bg-white/95 shadow-md ring-1 ring-brand-navy/10 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/logo-tucasa.png"
                alt="Logo Tu Casa"
                className="absolute w-44 h-20 object-contain"
              />
            </div>
            <span className="whitespace-nowrap text-[9px] text-white font-semibold leading-tight">
              Centro de Atención Social Amigable
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all hover:bg-brand-cyan/10 hover:text-brand-cyan ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/573127499622"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/40 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              Línea de Atención
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-cyan/10 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573127499622"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-5 py-3 rounded-xl font-semibold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            Línea de Atención: 312 749 9622
          </a>
        </div>
      </div>
    </header>
  );
}
