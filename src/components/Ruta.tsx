import { useState } from 'react';
import {
  Search,
  HandHeart,
  HeartHandshake,
  Droplets,
  Brain,
  Home,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Step {
  num: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

const STEPS: Step[] = [
  {
    num: 1,
    icon: Search,
    title: 'Identificamos',
    desc: 'Reconocemos a las personas en situación de vulnerabilidad en el territorio mediante trabajo de calle y caracterización.',
    color: 'from-brand-cyan to-brand-cyan-dark',
  },
  {
    num: 2,
    icon: HandHeart,
    title: 'Nos Acercamos',
    desc: 'Generamos un primer contacto respetuoso y empático, sin juicio, construyendo una relación de confianza inicial.',
    color: 'from-brand-cyan to-accent-emerald',
  },
  {
    num: 3,
    icon: HeartHandshake,
    title: 'Generamos Confianza',
    desc: 'Acompañamos de manera persistente y coherente, respetando el ritmo individual de cada persona.',
    color: 'from-accent-emerald to-emerald-600',
  },
  {
    num: 4,
    icon: Droplets,
    title: 'Atención Básica',
    desc: 'Brindamos servicios esenciales: aseo, alimentación, atención en salud y contención emocional en el Centro Día.',
    color: 'from-accent-emerald to-accent-orange',
  },
  {
    num: 5,
    icon: Brain,
    title: 'Acompañamiento Terapéutico',
    desc: 'Activamos rutas de atención clínica, psicológica y psicosocial según las necesidades de cada persona.',
    color: 'from-accent-orange to-orange-600',
  },
  {
    num: 6,
    icon: Home,
    title: 'Reintegración Social',
    desc: 'Fortalecemos vínculos familiares, habilidades para la vida y procesos de inclusión social sostenibles.',
    color: 'from-accent-purple to-purple-700',
  },
];

export default function Ruta() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="ruta" ref={ref} className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 15% 30%, rgba(0,147,216,0.5) 0%, transparent 40%), radial-gradient(circle at 85% 70%, rgba(124,58,237,0.4) 0%, transparent 40%)`,
      }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4 border border-white/20">
            <Home className="w-4 h-4" />
            Ruta de Atención
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            ¿Cómo funciona el{' '}
            <span className="text-gradient-cyan">proceso?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Seis pasos que articulan el acompañamiento desde el primer contacto
            en calle hasta la reintegración social.
          </p>
        </div>

        {/* Desktop: horizontal stepper with clickable nodes */}
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="relative mb-12">
            <div className="absolute top-7 left-0 right-0 h-1 bg-white/10 rounded-full" />
            <div
              className="absolute top-7 left-0 h-1 bg-gradient-to-r from-brand-cyan via-accent-emerald to-accent-purple rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
            />
            <div className="flex justify-between relative">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-br ${step.color} shadow-lg`
                          : 'bg-white/10 border border-white/20'
                      } ${isCurrent ? 'scale-125 ring-4 ring-white/20' : 'group-hover:scale-110'}`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/40'}`} strokeWidth={2.5} />
                    </div>
                    <span className={`mt-3 text-xs font-bold transition-colors ${isActive ? 'text-white' : 'text-white/40'}`}>
                      {step.num}
                    </span>
                    <span className={`mt-1 text-xs font-medium text-center max-w-[100px] transition-colors ${isActive ? 'text-white/80' : 'text-white/30'}`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div key={activeStep} className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${STEPS[activeStep].color} rounded-3xl shadow-2xl mb-6`}>
              {(() => {
                const Icon = STEPS[activeStep].icon;
                return <Icon className="w-10 h-10 text-white" strokeWidth={2} />;
              })()}
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              {STEPS[activeStep].num}. {STEPS[activeStep].title}
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              {STEPS[activeStep].desc}
            </p>
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeStep;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left flex gap-4 p-5 rounded-2xl transition-all ${
                  isActive ? 'bg-white/10 border border-white/20' : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/40 text-xs font-bold">Paso {step.num}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
