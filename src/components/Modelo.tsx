import { useState } from 'react';
import {
  Footprints,
  Sun,
  Stethoscope,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Component {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  bg: string;
  text: string;
  ring: string;
  description: string;
  tags: string[];
}

const COMPONENTS: Component[] = [
  {
    id: 1,
    icon: Footprints,
    title: 'Equipo de Calle',
    subtitle: 'Estrategia IN-PACTO Calle',
    color: 'from-brand-cyan to-brand-cyan-dark',
    bg: 'bg-brand-cyan/5',
    text: 'text-brand-cyan',
    ring: 'ring-brand-cyan/30',
    description:
      'Control pedagógico de la Casa Común mediante presencia permanente en el territorio, intervención en puntos críticos, caracterización, atención en crisis y contención emocional.',
    tags: [
      'Presencia permanente en territorio',
      'Intervención en puntos críticos',
      'Caracterización',
      'Atención en crisis',
      'Contención emocional',
      'Recuperación pedagógica del espacio público',
      'Activación de rutas',
      'Plan retorno y traslados institucionales',
    ],
  },
  {
    id: 2,
    icon: Sun,
    title: 'Centro Día',
    subtitle: 'Puerta de ingreso al medio institucional',
    color: 'from-accent-emerald to-emerald-600',
    bg: 'bg-accent-emerald/5',
    text: 'text-accent-emerald',
    ring: 'ring-accent-emerald/30',
    description:
      'Espacio de encuentro y cuidado donde las personas acceden a servicios básicos de higiene, nutrición y atención psicosocial como primer paso hacia el proceso terapéutico.',
    tags: [
      'Ducha',
      'Kit de aseo',
      'Ropa limpia',
      'Lavandería',
      'Complemento nutricional',
      'Bebida caliente',
      'Higiene personal',
      'Atención psicosocial',
      'Talleres grupales',
      'Enfermería',
    ],
  },
  {
    id: 3,
    icon: Stethoscope,
    title: 'Atención Ambulatoria',
    subtitle: 'Intervención al consumo problemático',
    color: 'from-accent-orange to-orange-600',
    bg: 'bg-accent-orange/5',
    text: 'text-accent-orange',
    ring: 'ring-accent-orange/30',
    description:
      'Acompañamiento clínico y terapéutico para personas con consumo problemático de sustancias psicoactivas, con énfasis en el restablecimiento de vínculos y habilidades para la vida.',
    tags: [
      'Valoración por psicología',
      'Acompañamiento en plan de manejo de medicamentos',
      'Activación de rutas por EPS',
      'Restablecimiento familiar',
      'Grupos terapéuticos',
      'Desarrollo de habilidades para la vida',
      'Resocialización',
    ],
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Modalidad por Protección',
    subtitle: 'Internamiento — Patología DUAL',
    color: 'from-accent-purple to-purple-700',
    bg: 'bg-accent-purple/5',
    text: 'text-accent-purple',
    ring: 'ring-accent-purple/30',
    description:
      'Atención residencial para personas con mayor nivel de vulnerabilidad que requieren cuidado continuo, acompañamiento clínico y formación para la reintegración social.',
    tags: [
      'Hospedaje',
      'Alimentación',
      'Atención clínica',
      'Acompañamiento terapéutico',
      'Salud mental',
      'Formación para la vida',
      'Preparación para la reintegración social',
    ],
  },
];

export default function Modelo() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const comp = COMPONENTS[active];
  const ActiveIcon = comp.icon;

  return (
    <section id="modelo" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-brand-navy/5 text-brand-navy rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Modelo de Atención
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            Cuatro componentes,{' '}
            <span className="text-gradient-cyan">una sola respuesta</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explora cada componente del modelo TU CASA y descubre cómo articulamos
            el trabajo de calle, la atención institucional y el cuidado clínico.
          </p>
        </div>

        {/* Tab selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {COMPONENTS.map((c, i) => {
            const Icon = c.icon;
            const isActive = i === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`group relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-br ${c.color} text-white border-transparent shadow-xl scale-105`
                    : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-white/20' : c.bg}`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : c.text}`} strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <p className={`text-xs font-semibold ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    Componente {c.id}
                  </p>
                  <p className={`font-bold text-sm leading-tight ${isActive ? 'text-white' : 'text-brand-navy'}`}>
                    {c.title}
                  </p>
                </div>
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b-2 border-r-2 border-slate-100" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active content */}
        <div
          key={comp.id}
          className={`relative rounded-3xl overflow-hidden animate-fade-in-up ${comp.bg} ring-1 ${comp.ring}`}
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left visual */}
            <div className={`lg:col-span-2 bg-gradient-to-br ${comp.color} p-8 lg:p-12 flex flex-col justify-between min-h-[320px]`}>
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5">
                  <ActiveIcon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <p className="text-white/70 text-sm font-semibold mb-1">
                  Componente {comp.id}
                </p>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2">
                  {comp.title}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {comp.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg">{comp.id}</span>
                </div>
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-white/60 text-xs font-medium">{comp.tags.length} servicios</span>
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <p className="text-slate-700 text-base leading-relaxed mb-6">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {comp.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 bg-white ${comp.text} text-sm font-medium px-3.5 py-2 rounded-xl border border-slate-100 shadow-sm animate-fade-in`}
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${comp.color}`} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
