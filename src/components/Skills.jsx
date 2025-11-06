import React from 'react';
import { Cpu, Code2, Database, LineChart } from 'lucide-react';

const skills = [
  { icon: LineChart, title: 'Analisis Data', desc: 'Eksplorasi data, visualisasi, dan insight yang actionable.' },
  { icon: Code2, title: 'Coding Program', desc: 'Membangun aplikasi modern dengan praktik terbaik.' },
  { icon: Cpu, title: 'Kecerdasan Buatan', desc: 'Eksperimen model AI untuk menyelesaikan masalah nyata.' },
  { icon: Database, title: 'Manajemen Data', desc: 'Struktur data efisien dan pipeline yang andal.' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Keahlian Utama
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-800/10 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-cyan-900/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-cyan-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
