import {
  Leaf,
  Heart,
  Brain,
  ShieldMinus,
  Users,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Objective {
  icon: LucideIcon;
  title: string;
  color: string;
}

const OBJECTIVES: Objective[] = [
  { icon: Leaf, title: 'Promover el cuidado de la Casa Común', color: 'text-accent-emerald' },
  { icon: Heart, title: 'Promover la dignidad humana', color: 'text-brand-cyan' },
  { icon: Brain, title: 'Fortalecer la salud mental', color: 'text-accent-purple' },
  { icon: ShieldMinus, title: 'Favorecer la reducción del daño', color: 'text-accent-orange' },
  { icon: Users, title: 'Reconstruir vínculos familiares', color: 'text-brand-cyan' },
  { icon: RefreshCw, title: 'Facilitar la inclusión y resocialización', color: 'text-accent-emerald' },
];

export default function Objetivos() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-gradient-to-br from-brand-cyan/5 via-slate-50 to-accent-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent-orange/10 text-accent-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <RefreshCw className="w-4 h-4" />
            Objetivos Estratégicos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy mb-3">
            Nuestro impacto esperado
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {OBJECTIVES.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.title}
                className={`group flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 card-lift reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                  <Icon className={`w-6 h-6 ${obj.color} group-hover:scale-110 transition-transform`} strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold text-brand-navy leading-tight">
                  {obj.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
