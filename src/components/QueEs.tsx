import {
  Users,
  MapPin,
  HeartPulse,
  Brain,
  AlertTriangle,
  ShieldQuestion,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PopCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
}

const POPULATIONS: PopCard[] = [
  {
    icon: MapPin,
    title: 'Personas de otros municipios',
    desc: 'En riesgo de asentamiento precario o habitanza de calle provenientes de otros territorios.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
    border: 'hover:border-brand-cyan/40',
  },
  {
    icon: Users,
    title: 'Personas en situación de calle',
    desc: 'Habitantes de calle que requieren acompañamiento y restablecimiento de vínculos.',
    color: 'text-accent-emerald',
    bg: 'bg-accent-emerald/10',
    border: 'hover:border-accent-emerald/40',
  },
  {
    icon: AlertTriangle,
    title: 'Consumo problemático de SPA',
    desc: 'Personas con consumo problemático de sustancias psicoactivas que necesitan intervención.',
    color: 'text-accent-orange',
    bg: 'bg-accent-orange/10',
    border: 'hover:border-accent-orange/40',
  },
  {
    icon: Brain,
    title: 'Dificultades de salud mental',
    desc: 'Personas con dificultades de salud mental que requieren atención psicosocial.',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    border: 'hover:border-accent-purple/40',
  },
  {
    icon: HeartPulse,
    title: 'Alta vulnerabilidad social',
    desc: 'Población con alta vulnerabilidad social que necesita respuesta integral del Estado.',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
    border: 'hover:border-brand-cyan/40',
  },
];

export default function QueEs() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="que-es" ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept card */}
        <div className={`max-w-4xl mx-auto text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan rounded-full px-4 py-2 text-sm font-semibold mb-5">
            <ShieldQuestion className="w-4 h-4" />
            ¿Qué es TU CASA?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
            Una respuesta de ciudad desde la{' '}
            <span className="text-gradient-cyan">salud pública</span> y la comunidad
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            TU CASA — Centro de Atención Social Amigable — es la estrategia de la Alcaldía de Rionegro
            y la Secretaría de Familia para ofrecer una respuesta integral, humanizada
            y profesional frente a la habitanza en calle y el consumo problemático de sustancias
            psicoactivas. Combinamos trabajo de territorio, atención institucional y cuidado clínico
            para acompañar a cada persona en su propio ritmo y proceso.
          </p>
        </div>

        {/* Mission highlight cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-20">
          {[
            { icon: HeartPulse, title: 'Salud Pública', desc: 'Respuesta desde el sistema de salud territorial', color: 'from-brand-cyan to-brand-cyan-dark' },
            { icon: Users, title: 'Comunidad', desc: 'Trabajo conjunto con el territorio y sus actores', color: 'from-accent-emerald to-emerald-600' },
            { icon: ShieldQuestion, title: 'Derechos', desc: 'Restablecimiento de derechos y dignidad humana', color: 'from-accent-purple to-purple-700' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-lift overflow-hidden reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Población Objetivo */}
        <div id="poblacion" className="scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-orange/10 text-accent-orange rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              Población Objetivo
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4">
              Perfil Atencional
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Atendemos a personas en distintas situaciones de vulnerabilidad,
              adaptando nuestra respuesta a cada realidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {POPULATIONS.map((pop, i) => {
              const Icon = pop.icon;
              return (
                <div
                  key={pop.title}
                  className={`group bg-white rounded-2xl p-6 border-2 border-slate-100 ${pop.border} card-lift reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-12 h-12 ${pop.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${pop.color}`} strokeWidth={2} />
                  </div>
                  <h4 className="text-base font-bold text-brand-navy mb-2 leading-tight">
                    {pop.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pop.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
