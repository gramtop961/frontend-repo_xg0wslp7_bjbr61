import React from 'react';
import Spline from '@splinetool/react-spline';
import { Instagram, Phone, Rocket } from 'lucide-react';

const Hero = () => {
  const igUrl = 'https://instagram.com/montu_telulas';
  const waUrl = 'https://wa.me/6287836518013';

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b1020] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cVvVxs5f-JgrFhYk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to blend content; allow pointer events to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/50 via-[#0b1020]/70 to-[#0b1020]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300 ring-1 ring-cyan-400/20">
          <Rocket className="h-4 w-4" />
          <span className="text-sm tracking-wide">Digital Portfolio</span>
        </div>

        <h1 className="font-manrope text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
          I Gede Arta Cahyadi Putra
        </h1>
        <p className="mt-3 text-cyan-200/90 md:text-lg">
          Siswa kelas 10PH6 • SMKN 1 Tegallalang, Bali • Tinggal di Br. Pisangkelod
        </p>
        <p className="mt-4 max-w-3xl text-balance text-slate-300">
          Cita-cita: membahagiakan orang tua. Keahlian: analisis data & coding program. Juga
          spesialis AI dalam pengembangan teknologi kecerdasan buatan.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={igUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-cyan-900/40 transition hover:brightness-110"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram @montu_telulas</span>
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-cyan-200 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/15"
          >
            <Phone className="h-5 w-5" />
            <span>WhatsApp 0878-3651-8013</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
