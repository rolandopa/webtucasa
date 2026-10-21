import { useEffect, useState } from 'react';
import {
  Footprints,
  Sun,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';

const PILLARS = [
  {
    icon: Footprints,
    title: 'Atención en Calle',
    desc: 'Presencia permanente en el territorio',
    color: 'cyan',
    bg: 'from-brand-cyan to-brand-cyan-dark',
    shadow: 'shadow-brand-cyan/30',
    count: 100,
    suffix: '%',
  },
  {
    icon: Sun,
    title: 'Centro Día',
    desc: 'Puerta de ingreso institucional',
    color: 'emerald',
    bg: 'from-accent-emerald to-emerald-600',
    shadow: 'shadow-emerald-500/30',
    count: 12,
    suffix: '',
    label: 'servicios',
  },
  {
    icon: Stethoscope,
    title: 'Atención Ambulatoria',
    desc: 'Intervención al consumo problemático',
    color: 'orange',
    bg: 'from-accent-orange to-orange-600',
    shadow: 'shadow-orange-500/30',
    count: 6,
    suffix: '',
    label: 'rutas',
  },
  {
    icon: ShieldCheck,
    title: 'Modalidad Protección',
    desc: 'Internamiento patología dual',
    color: 'purple',
    bg: 'from-accent-purple to-purple-700',
    shadow: 'shadow-purple-500/30',
    count: 24,
    suffix: 'h',
    label: 'cuidado',
  },
];

function Counter({ target, suffix, label }: { target: number; suffix: string; label?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-extrabold text-white">
        {count}
        {suffix}
      </span>
      {label && <span className="text-[10px] text-white/70 font-medium">{label}</span>}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-cyan-dark" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,147,216,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(124,58,237,0.2) 0%, transparent 40%)`,
      }} />

      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent-emerald/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90 font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent-emerald" />
              Alcaldía de Rionegro · Secretaría de Familia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] animate-fade-in-up">
              Respuesta de ciudad para el{' '}
              <span className="text-gradient-cyan">cuidado consciente</span>
              {' '}de la vida y la casa común
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              Estrategia integral de atención humanizada frente a la habitanza en calle
              y el consumo problemático de sustancias psicoactivas en Rionegro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#modelo"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-7 py-3.5 rounded-2xl font-semibold shadow-xl shadow-brand-cyan/30 hover:shadow-2xl hover:shadow-brand-cyan/50 hover:scale-105 transition-all"
              >
                Conoce el Modelo de Atención
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#herramientas"
                className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-7 py-3.5 rounded-2xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Canal CUIDA / Contacto
              </a>
            </div>

            {/* Location pin */}
            <div className="flex items-center gap-2 text-white/50 text-sm animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <MapPin className="w-4 h-4" />
              Rionegro, Antioquia — Colombia
            </div>
          </div>

          {/* Right: Pillar cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`group relative bg-gradient-to-br ${p.bg} rounded-2xl p-5 shadow-xl ${p.shadow} card-lift cursor-pointer overflow-hidden`}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-white font-bold text-sm leading-tight mb-1">
                      {p.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-tight mb-3">{p.desc}</p>
                    <div className="border-t border-white/20 pt-2">
                      <Counter target={p.count} suffix={p.suffix} label={p.label} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-auto">
          <path d="M0,50 C320,100 720,0 1440,50 L1440,100 L0,100 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
