import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QueEs from '@/components/QueEs';
import Modelo from '@/components/Modelo';
import Enfoques from '@/components/Enfoques';
import Ruta from '@/components/Ruta';
import Equipo from '@/components/Equipo';
import Herramientas from '@/components/Herramientas';
import Objetivos from '@/components/Objetivos';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import WhatsAppButton from '@/components/WhatsAppButton';
import IntroSplash from '@/components/IntroSplash';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <IntroSplash />
      <Header />
      <main>
        <Hero />
        <QueEs />
        <Modelo />
        <Enfoques />
        <Ruta />
        <Equipo />
        <Herramientas />
        <Objetivos />
      </main>
      <Footer />
      <AudioPlayer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
