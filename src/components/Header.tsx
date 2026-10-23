import { useEffect, useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Lock,
  Eye,
  EyeOff,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

const NAV_LINKS = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: 'Modelo de Atención', href: '#modelo' },
  { label: 'Población', href: '#poblacion' },
  { label: 'Enfoques', href: '#enfoques' },
  { label: 'Nuestro Equipo', href: '#equipo' },
  { label: 'Ruta de Atención', href: '#ruta' },
  { label: 'Contacto', href: '#contacto' },
];

const TARGET_URL = 'https://tucasacentrooperativo.vercel.app/';
const ACCESS_PASSWORD = 'rionegro*2027';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Password Modal state
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleOpenModal = () => {
    setPasswordInput('');
    setErrorMessage('');
    setIsSuccess(false);
    setShowPasswordModal(true);
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPasswordInput('');
    setErrorMessage('');
    setIsSuccess(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === ACCESS_PASSWORD) {
      setErrorMessage('');
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = TARGET_URL;
      }, 700);
    } else {
      setErrorMessage('Contraseña incorrecta. Por favor verifique e intente nuevamente.');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brand-navy/5'
            : 'bg-transparent'
        }`}
      >
        {/* Institutional badge */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="bg-brand-navy text-white/90 text-xs font-medium px-4 py-2 text-center">
            Alcaldía de Rionegro | Secretaría de Familia | Pastoral Social Sonsón Rionegro
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between min-h-20 lg:min-h-24 py-2">
            {/* Logo */}
            <a href="#hero" className="flex flex-col items-center gap-1 group shrink-0">
              <div className="relative w-36 sm:w-40 xl:w-44 h-12 xl:h-14 rounded-xl bg-white shadow-md ring-1 ring-brand-navy/10 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="/logo-tucasa.png"
                  alt="Logo Tu Casa"
                  className="w-full h-full object-contain scale-[1.85] translate-y-[6%]"
                />
              </div>
              <span className="hidden sm:inline-block text-center whitespace-nowrap text-[8px] xl:text-[9px] text-white/90 font-semibold leading-tight">
                Centro de Atención Social Amigable
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 mx-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-2 py-1.5 xl:px-2.5 xl:py-2 text-[12px] xl:text-[13px] font-medium rounded-lg transition-all hover:bg-brand-cyan/10 hover:text-brand-cyan ${
                    scrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* P-OP Protected Item next to Contacto */}
              <button
                type="button"
                onClick={handleOpenModal}
                className={`ml-1 inline-flex items-center gap-1 px-2.5 py-1.5 xl:px-3 xl:py-1.5 text-[12px] xl:text-[13px] font-semibold rounded-lg transition-all border whitespace-nowrap cursor-pointer ${
                  scrolled
                    ? 'border-brand-cyan/50 bg-brand-cyan/15 text-brand-navy hover:bg-brand-cyan hover:text-white hover:border-brand-cyan shadow-sm'
                    : 'border-white/50 bg-white/20 text-white hover:bg-white hover:text-brand-navy shadow-sm'
                }`}
                title="Plataforma Operativa Tu Casa"
              >
                <Lock className="w-3 h-3 xl:w-3.5 xl:h-3.5 opacity-90 shrink-0" />
                <span>P-OP</span>
              </button>
            </div>

            {/* Quick action */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="https://wa.me/573127499622"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-3.5 py-2 xl:px-4 xl:py-2.5 rounded-xl font-semibold text-xs xl:text-sm shadow-md shadow-brand-cyan/30 hover:shadow-lg hover:shadow-brand-cyan/40 hover:scale-105 transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span>Línea de Atención</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-cyan/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* P-OP Mobile Item */}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                handleOpenModal();
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-brand-navy rounded-lg bg-slate-50 hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors border border-slate-200 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-cyan" />
                <span>P-OP (Plataforma Operativa)</span>
              </span>
              <span className="text-[11px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full">
                Privado
              </span>
            </button>

            <a
              href="https://wa.me/573127499622"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white px-5 py-3 rounded-xl font-semibold text-sm mt-2"
            >
              <Phone className="w-4 h-4" />
              Línea de Atención: 312 749 9622
            </a>
          </div>
        </div>
      </header>

      {/* Password Protection Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />

          {/* Dialog Card */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 z-10 animate-fade-in-up">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark text-white flex items-center justify-center shadow-md shadow-brand-cyan/30">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  Acceso a P-OP
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Plataforma Operativa Tu Casa Rionegro
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Esta sección está restringida al personal autorizado. Por favor ingresa la contraseña para acceder a la plataforma operativa.
            </p>

            {/* Form */}
            {isSuccess ? (
              <div className="space-y-4 py-2">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div className="text-sm">
                    <p className="font-bold">Contraseña verificada</p>
                    <p className="text-xs text-emerald-700">Redirigiendo a Plataforma Operativa...</p>
                  </div>
                </div>

                <a
                  href={TARGET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-emerald to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  Continuar a Plataforma Operativa
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="p-op-password"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Contraseña de Acceso
                  </label>
                  <div className="relative">
                    <input
                      id="p-op-password"
                      type={showPasswordText ? 'text' : 'password'}
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Escribe la contraseña..."
                      autoFocus
                      required
                      className="w-full pl-4 pr-11 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswordText(!showPasswordText)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      title={showPasswordText ? 'Ocultar contraseña' : 'Ver contraseña'}
                    >
                      {showPasswordText ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-cyan to-brand-cyan-dark shadow-md shadow-brand-cyan/30 hover:shadow-lg hover:shadow-brand-cyan/40 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Ingresar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

