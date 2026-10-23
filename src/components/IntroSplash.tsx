import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const LOGO_SRC = '/assets/aistudio/logo_trasn_92b3b0c3.png';

interface IntroSplashProps {
  onFinish?: () => void;
}

export default function IntroSplash({ onFinish }: IntroSplashProps) {
  const [stage, setStage] = useState<'enter' | 'animate' | 'exit' | 'hidden'>('enter');

  useEffect(() => {
    // Stage 1: trigger enter animation immediately on mount
    const timer1 = setTimeout(() => {
      setStage('animate');
    }, 50);

    // Stage 2: start smooth exit fade out
    const timer2 = setTimeout(() => {
      setStage('exit');
    }, 2400);

    // Stage 3: completely unmount/hide
    const timer3 = setTimeout(() => {
      setStage('hidden');
      if (onFinish) onFinish();
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setStage('exit');
    setTimeout(() => {
      setStage('hidden');
      if (onFinish) onFinish();
    }, 400);
  };

  if (stage === 'hidden') return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden transition-all duration-700 ease-out ${
        stage === 'exit'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #00365c 0%, #001f35 60%, #001424 100%)',
      }}
    >
      {/* Background ambient lighting and particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,147,216,0.5) 0%, transparent 60%)`,
      }} />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Center glowing orbs */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-cyan/25 blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent-emerald/20 blur-2xl animate-pulse delay-300 pointer-events-none" />

      {/* Center Animated Logo Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo with scale and glow entrance */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            stage === 'enter'
              ? 'opacity-0 scale-75 translate-y-6 blur-sm'
              : 'opacity-100 scale-100 translate-y-0 blur-0'
          }`}
        >
          <div className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-brand-cyan/20">
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 animate-[slideIn_1.5s_ease-in-out_infinite]" />
            </div>

            <img
              src={LOGO_SRC}
              alt="Tu Casa Logo"
              className="w-64 sm:w-80 md:w-96 max-w-[85vw] h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,147,216,0.5)] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Subtitles & Badges */}
        <div
          className={`mt-6 space-y-3 transition-all duration-700 delay-300 ease-out transform ${
            stage === 'enter'
              ? 'opacity-0 translate-y-4'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <p className="text-white font-extrabold text-sm sm:text-base md:text-lg tracking-wide uppercase drop-shadow-sm">
            Centro de Atención Social Amigable
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 text-xs text-white/90 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-accent-emerald animate-spin" style={{ animationDuration: '4s' }} />
            <span>Alcaldía de Rionegro · Secretaría de Familia</span>
          </div>
        </div>

        {/* Elegant loading progress line */}
        <div className="mt-8 w-44 sm:w-56 h-1 bg-white/15 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-brand-cyan via-accent-emerald to-brand-cyan rounded-full transition-all ease-linear ${
              stage === 'enter' ? 'w-0' : 'w-full'
            }`}
            style={{ transitionDuration: '2400ms' }}
          />
        </div>

        <p className="mt-3 text-[11px] text-white/40 tracking-wider">
          Haz clic en cualquier parte para continuar
        </p>
      </div>
    </div>
  );
}
