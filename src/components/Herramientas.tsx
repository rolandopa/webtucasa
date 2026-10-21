import {
  Smartphone,
  Radio,
  Phone,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Herramientas() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="herramientas" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Smartphone className="w-4 h-4" />
            Herramientas y Canales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            Canales de{' '}
            <span className="text-gradient-cyan">acción ciudadana</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Plataformas y canales que permiten la coordinación operativa,
            el seguimiento y la participación ciudadana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* App TU CASA */}
          <div className={`group relative bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-3xl p-8 shadow-xl shadow-brand-cyan/20 card-lift overflow-hidden reveal ${visible ? 'visible' : ''}`}>
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5">
                <Smartphone className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">App TU CASA</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Aplicación operativa para el seguimiento, la coordinación y el
                registro de atenciones del equipo interdisciplinario en territorio.
              </p>
              <span className="inline-flex items-center gap-1.5 text-white/90 text-sm font-semibold">
                Gestión y coordinación
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Canal CUIDA */}
          <div className={`group relative bg-gradient-to-br from-accent-emerald to-emerald-600 rounded-3xl p-8 shadow-xl shadow-emerald-500/20 card-lift overflow-hidden reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5">
                <Radio className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">Canal CUIDA</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Canal de Unificación e Intervención para el Desarrollo, la Atención
                y el Cuidado de la casa común.
              </p>
              <span className="inline-flex items-center gap-1.5 text-white/90 text-sm font-semibold">
                Atención y cuidado
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* WhatsApp / Línea directa */}
          <div
            className={`group relative bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-3xl p-8 shadow-xl shadow-brand-navy/20 card-lift overflow-hidden reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-emerald/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div className="animate-pulse-soft w-3 h-3 bg-accent-emerald rounded-full" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-1">Línea Institucional Directa</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Reportes ciudadanos y derivaciones al instante.
              </p>
              <a
                href="https://wa.me/573127499622"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-white text-brand-navy px-5 py-3.5 rounded-2xl font-bold group-hover:shadow-lg transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-accent-emerald" />
                  312 749 9622
                </span>
                <ArrowUpRight className="w-5 h-5 text-brand-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
