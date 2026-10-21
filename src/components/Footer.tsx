import { Phone, MapPin, Mail, ArrowUpRight, Building2, ShieldCheck } from 'lucide-react';

const QUICK_LINKS = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: 'Modelo de Atención', href: '#modelo' },
  { label: 'Población', href: '#poblacion' },
  { label: 'Enfoques', href: '#enfoques' },
  { label: 'Nuestro Equipo', href: '#equipo' },
  { label: 'Ruta de Atención', href: '#ruta' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'Objetivos', href: '#objetivos' },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-navy text-white relative overflow-hidden scroll-mt-24">
      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-accent-emerald to-accent-purple" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-col items-start gap-2">
              <div className="w-36 h-28 rounded-xl bg-white shadow-md ring-1 ring-white/20 flex items-center justify-center p-3">
                <img
                  src="/logo-tucasa.png"
                  alt="Logo Tu Casa"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-white/75 font-semibold">Centro de Atención Social Amigable</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              Estrategia integral de atención humanizada de la Alcaldía de Rionegro y la
              Secretaría de Familia, frente a la habitanza en calle y el
              consumo problemático de sustancias psicoactivas.
            </p>

            {/* Institutional badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
                <Building2 className="w-5 h-5 text-brand-cyan" />
                <span className="text-xs font-semibold text-white/80">Alcaldía de Rionegro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-accent-emerald" />
                <span className="text-xs font-semibold text-white/80">Secretaría de Familia</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white/90 mb-4 uppercase tracking-wider">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white/90 mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/573127499622"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl p-3.5 border border-white/10 transition-all"
              >
                <div className="w-10 h-10 bg-accent-emerald/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-accent-emerald" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Línea directa / WhatsApp</p>
                  <p className="text-sm font-bold text-white">312 749 9622</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                Rionegro, Antioquia — Colombia
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                Secretaría de Familia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Alcaldía de Rionegro — Secretaría de Familia. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Aviso legal
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Confidencialidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
