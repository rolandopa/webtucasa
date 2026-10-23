import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const AUDIO_SRC = '/assets/aistudio/puente_hacia_el_sol_b44eeb01.mp3';

const START_TIME = 16;

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.volume = 0.75;
    audio.currentTime = START_TIME;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      audio.currentTime = START_TIME;
      audio.play().catch(() => {});
    };
    const onLoadedMetadata = () => {
      if (audio.currentTime < START_TIME) {
        audio.currentTime = START_TIME;
      }
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);

    const safePlay = () => {
      if (audio.currentTime < START_TIME) {
        audio.currentTime = START_TIME;
      }
      return audio.play();
    };

    // Try autoplay immediately starting at second 16
    safePlay()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Modern browser policy blocked autoplay without user gesture.
        // Listen to the very first user interaction anywhere on the window.
      });

    // Browser autoplay policy fallback
    const unlockAudio = () => {
      if (audio.paused) {
        safePlay()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    };

    const interactionEvents = ['click', 'touchstart', 'scroll', 'keydown'];
    interactionEvents.forEach((event) => {
      window.addEventListener(event, unlockAudio, { once: true, passive: true });
    });

    return () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, unlockAudio);
      });
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuteState = !isMuted;
    audioRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in-up">
      <div className="flex items-center gap-2.5 bg-brand-navy/90 hover:bg-brand-navy backdrop-blur-md text-white border border-white/20 shadow-xl rounded-full px-3.5 py-2 transition-all">
        <button
          type="button"
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-cyan to-brand-cyan-dark flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer shrink-0"
          title={isPlaying ? 'Pausar música' : 'Reproducir canción'}
          aria-label={isPlaying ? 'Pausar canción' : 'Reproducir canción'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Info & Sound Wave Animation */}
        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-tight text-white/95 whitespace-nowrap">
              Puente hacia el Sol
            </span>
            {isPlaying && (
              <span className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 bg-accent-emerald rounded-full animate-pulse h-2" />
                <span className="w-0.5 bg-brand-cyan rounded-full animate-pulse h-3 delay-75" />
                <span className="w-0.5 bg-accent-orange rounded-full animate-pulse h-1.5 delay-150" />
              </span>
            )}
          </div>
          <span className="text-[9px] text-white/65 font-medium leading-none">
            {isPlaying ? 'Canción oficial Tu Casa' : 'Haz clic para reproducir'}
          </span>
        </div>

        {/* Volume toggle */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Activar sonido' : 'Silenciar'}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
