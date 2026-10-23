import { useState } from 'react';

const WHATSAPP_URL =
  'https://wa.me/573127499622?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20el%20Centro%20Tu%20Casa%20Rionegro';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 animate-fade-in-up"
    >
      {/* Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-xl border border-slate-100 transition-all duration-300 pointer-events-none select-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Línea de Atención</span>
      </div>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Contactar por WhatsApp a la Línea de Atención Tu Casa"
        title="Línea de Atención WhatsApp: 312 749 9622"
      >
        {/* Pulsing ripple ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.338-.169-1.999-.986-2.31-.986-.31 0-.536.141-.762.48-.226.338-.875 1.098-1.072 1.324-.197.225-.395.253-.733.084-.338-.169-1.428-.526-2.721-1.68-1.006-.897-1.685-2.005-1.882-2.344-.197-.338-.021-.52.148-.689.153-.152.338-.395.508-.592.169-.197.225-.338.338-.564.113-.225.056-.423-.028-.592-.084-.169-.762-1.835-1.044-2.512-.275-.66-.555-.57-.762-.581l-.649-.012c-.225 0-.592.084-.903.423-.31.338-1.185 1.157-1.185 2.822 0 1.665 1.213 3.273 1.382 3.5.169.225 2.385 3.642 5.779 5.107.807.349 1.438.558 1.929.714.811.258 1.549.222 2.133.134.651-.098 1.999-.818 2.281-1.608.282-.79.282-1.468.197-1.608-.084-.141-.31-.225-.648-.395zM12.04 2c-5.523 0-10 4.477-10 10 0 1.77.461 3.491 1.338 5.008L2 22l5.129-1.347A9.957 9.957 0 0012.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.232c-1.574 0-3.109-.423-4.444-1.222l-.319-.19-3.044.798.812-2.969-.208-.331a8.214 8.214 0 01-1.258-4.318c0-4.545 3.697-8.243 8.242-8.243 4.545 0 8.242 3.698 8.242 8.243 0 4.545-3.697 8.232-8.242 8.232z" />
        </svg>
      </a>
    </aside>
  );
}
