import React from 'react';
import { BookOpenCheck, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#070b18] py-20 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/15 p-2 ring-1 ring-cyan-400/20">
            <BookOpenCheck className="h-6 w-6 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Tentang Saya
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-slate-300">
              Saya I Gede Arta Cahyadi Putra dari kelas 10PH6 di SMKN 1 Tegallalang, Bali. Saya tinggal di
              Banjar Pisangkelod. Cita-cita saya sederhana dan bermakna: membahagiakan orang tua.
            </p>
            <p className="text-slate-300">
              Saya memiliki keahlian di bidang analisis data dan pengembangan perangkat lunak. Selain sebagai siswa,
              saya juga fokus sebagai spesialis AI, mengeksplorasi teknologi kecerdasan buatan untuk menciptakan
              solusi yang bermanfaat.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-700/10 p-6">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">Spesialisasi</h3>
            </div>
            <ul className="grid list-disc gap-2 pl-5 text-slate-300">
              <li>Analisis data untuk insight yang bermakna</li>
              <li>Pengembangan aplikasi dan automasi</li>
              <li>Penerapan model AI dan eksperimen machine learning</li>
              <li>Eksplorasi teknologi kreatif dan modern</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
