import { useState } from 'react';
import {
  Smartphone,
  Radio,
  Phone,
  ArrowUpRight,
  MessageCircle,
  X,
  Maximize2,
  ExternalLink,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Herramientas() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [showCuidaModal, setShowCuidaModal] = useState(false);

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

          {/* Canal CUIDA (Clickable Popup Trigger) */}
          <button
            type="button"
            onClick={() => setShowCuidaModal(true)}
            className={`group relative text-left w-full bg-gradient-to-br from-accent-emerald to-emerald-600 rounded-3xl p-8 shadow-xl shadow-emerald-500/20 card-lift overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
            title="Haz clic para ver la infografía y rutas de atención del Canal CUIDA"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Radio className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full group-hover:bg-white group-hover:text-emerald-700 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Ver Rutas
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">Canal CUIDA</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                Canal de Unificación e Intervención para el Desarrollo, la Atención
                y el Cuidado de la casa común.
              </p>
              <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:underline">
                Haz clic para ver infografía y rutas
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </button>

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

      {/* Pop-up Modal for Canal CUIDA Infographic */}
      {showCuidaModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cuida-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
            onClick={() => setShowCuidaModal(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-fade-in-up border border-slate-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-emerald to-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="cuida-modal-title" className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                    Canal CUIDA · Rutas de Atención
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Canal de Unificación e Intervención para el Desarrollo, la Atención y el Cuidado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/canal-cuida-infografia.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                  title="Abrir imagen en pestaña nueva"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Abrir original
                </a>
                <button
                  type="button"
                  onClick={() => setShowCuidaModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Cerrar ventana"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body / Image Viewer */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-100/60 flex items-center justify-center">
              <img
                src="/canal-cuida-infografia.jpg"
                alt="Infografía del Canal CUIDA - Centro de Atención Social Amigable Tu Casa"
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-lg border border-slate-200/80 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-white text-xs text-slate-500">
              <span>Alcaldía de Rionegro · Secretaría de Familia</span>
              <button
                type="button"
                onClick={() => setShowCuidaModal(false)}
                className="px-4 py-2 bg-gradient-to-r from-accent-emerald to-emerald-600 text-white font-semibold rounded-xl hover:shadow-md transition-all cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
