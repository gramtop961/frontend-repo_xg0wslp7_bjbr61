import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Sparkles } from 'lucide-react';

const pages = [
  {
    title: 'Profil',
    content:
      'Nama saya I Gede Arta Cahyadi Putra dari kelas 10PH6, SMKN 1 Tegallalang. Tinggal di Br. Pisangkelod, Bali.',
  },
  {
    title: 'Misi',
    content:
      'Membahagiakan orang tua melalui karya dan prestasi. Terus belajar teknologi untuk memberi dampak positif.',
  },
  {
    title: 'Kontak',
    content: 'Instagram: @montu_telulas • WhatsApp: 0878-3651-8013',
  },
];

const MagicBook = () => {
  return (
    <section className="relative w-full bg-[#070b18] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="rounded-lg bg-cyan-500/15 p-2 ring-1 ring-cyan-400/20">
            <Wand2 className="h-6 w-6 text-cyan-300" />
          </div>
          <h2 className="text-center text-2xl font-bold md:text-3xl">Buku Sihir Portofolio</h2>
        </div>

        <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Book */}
          <motion.div
            initial={{ rotateX: 15, rotateY: -15, opacity: 0 }}
            whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', damping: 18, stiffness: 120 }}
            className="relative aspect-[4/3] w-full rounded-xl border border-cyan-500/20 bg-gradient-to-br from-blue-900/30 to-cyan-600/10 shadow-2xl"
          >
            {/* center spine glow */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 via-cyan-300/30 to-transparent" />

            {/* pages */}
            <div className="absolute inset-0 grid grid-cols-2 p-5">
              {[0, 1].map((side) => (
                <div key={side} className="relative overflow-hidden rounded-lg bg-black/20 ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.08),transparent)]" />
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 8px)'
                  }} />
                </div>
              ))}
            </div>

            {/* floating sparkles */}
            <Sparkles className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 animate-pulse text-cyan-300" />
            <Sparkles className="pointer-events-none absolute -left-3 -bottom-3 h-6 w-6 animate-pulse text-blue-400" />
          </motion.div>

          {/* Animated page content */}
          <div className="flex flex-col justify-center gap-6">
            {pages.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="rounded-xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="mb-1 text-lg font-semibold text-cyan-200">{p.title}</h3>
                <p className="text-cyan-100/80">{p.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicBook;
