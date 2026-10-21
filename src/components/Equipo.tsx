import {
  ClipboardCheck,
  Brain,
  Users,
  Stethoscope,
  Network,
  HandHeart,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Role {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

const TEAM: Role[] = [
  { icon: ClipboardCheck, title: 'Coordinación', desc: 'Dirección y articulación del modelo', color: 'text-brand-cyan', bg: 'bg-brand-cyan/10' },
  { icon: Brain, title: 'Psicología Clínica', desc: 'Valoración e intervención clínica', color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
  { icon: Users, title: 'Profesional Psicosocial', desc: 'Trabajo Social / Desarrollo Familiar', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  { icon: Stethoscope, title: 'Enfermería', desc: 'Atención en salud y cuidados', color: 'text-brand-cyan', bg: 'bg-brand-cyan/10' },
  { icon: Network, title: 'Gestores Sociales', desc: 'Vínculo con territorio y comunidad', color: 'text-accent-orange', bg: 'bg-accent-orange/10' },
  { icon: HandHeart, title: 'Operadores Terapéuticos', desc: 'Acompañamiento directo y cotidiano', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  { icon: Wrench, title: 'Servicios Generales y Logística', desc: 'Soporte operativo y mantenimiento', color: 'text-brand-cyan', bg: 'bg-brand-cyan/10' },
];

export default function Equipo() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="equipo" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent-emerald/10 text-accent-emerald rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Equipo Interdisciplinario
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4">
            Un equipo{' '}
            <span className="text-gradient-cyan">humano y profesional</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Profesionales de distintas disciplinas que articulan sus saberes
            para acompañar cada proceso de manera integral.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TEAM.map((role, i) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className={`group bg-slate-50 rounded-2xl p-5 border border-slate-100 card-lift text-center reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className={`w-14 h-14 ${role.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${role.color}`} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-brand-navy leading-tight mb-1">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-500 leading-tight">
                  {role.desc}
                </p>
              </div>
            );
          })}

          {/* Decorative "plus" card */}
          <div className="bg-gradient-to-br from-brand-navy to-brand-cyan-dark rounded-2xl p-5 flex items-center justify-center text-center">
            <div>
              <p className="text-white/80 text-xs font-semibold mb-1">Trabajo</p>
              <p className="text-white font-extrabold text-base">Interdisciplinario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
