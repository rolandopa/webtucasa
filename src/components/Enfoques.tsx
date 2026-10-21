import { HeartHandshake, GitBranch, ShieldMinus, type LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Enfoque {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
  ring: string;
}

const ENFOQUES: Enfoque[] = [
  {
    icon: HeartHandshake,
    title: 'Atención Humanizada',
    desc: 'Cada persona tiene una historia diferente. Escuchamos, respetamos y acompañamos desde la empatía, reconociendo la dignidad de todo ser humano.',
    color: 'from-brand-cyan to-brand-cyan-dark',
    bg: 'bg-brand-cyan/5',
    ring: 'ring-brand-cyan/20',
  },
  {
    icon: GitBranch,
    title: 'Enfoque Diferencial',
    desc: 'Adaptación a necesidades, capacidades y procesos individuales. Reconocemos la diversidad y ajustamos nuestra respuesta a cada persona y contexto.',
    color: 'from-accent-emerald to-emerald-600',
    bg: 'bg-accent-emerald/5',
    ring: 'ring-accent-emerald/20',
  },
  {
    icon: ShieldMinus,
    title: 'Reducción del Daño',
    desc: 'Disminución de riesgos, fortalecimiento del autocuidado, la salud y el bienestar, respetando el ritmo individual de cada proceso de cambio.',
    color: 'from-accent-orange to-orange-600',
    bg: 'bg-accent-orange/5',
    ring: 'ring-accent-orange/20',
  },
];

export default function Enfoques() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="enfoques" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent-purple/10 text-accent-purple rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <HeartHandshake className="w-4 h-4" />
            Enfoques que nos Guían
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            Principios que orientan{' '}
            <span className="text-gradient-cyan">cada acción</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tres enfoques transversales que guían nuestro modelo y aseguran
            una respuesta digna, adaptada y respetuosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ENFOQUES.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className={`group relative bg-white rounded-3xl p-8 shadow-sm ring-1 ${e.ring} card-lift overflow-hidden reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number watermark */}
                <span className="absolute -top-4 -right-2 text-[120px] font-extrabold text-slate-50 select-none leading-none">
                  {i + 1}
                </span>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${e.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-3">
                    {e.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {e.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${e.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
