'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Pengembang Frontend Senior',
    company: 'Tech Startup Co.',
    period: '2023 - Sekarang',
    description: 'Memimpin arsitektur frontend dan membimbing pengembang junior. Membangun komponen React yang skalabel dan mengoptimalkan kinerja.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Pengembang Frontend',
    company: 'Digital Agency Inc.',
    period: '2021 - 2023',
    description: 'Mengembangkan aplikasi web responsif menggunakan React dan Next.js. Berkolaborasi dengan tim desain dalam implementasi UI/UX.',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'Sarjana Ilmu Komputer',
    company: 'Nama Universitas',
    period: '2017 - 2021',
    description: 'Lulus dengan pujian. Fokus pada pengembangan web dan desain antarmuka pengguna.',
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            PENGALAMAN
          </h2>
          <div className="w-20 h-px bg-white/20" />
        </motion.div>

        <div className="space-y-px bg-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-black hover:bg-white/5 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold tracking-tighter uppercase mb-2">{exp.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">{exp.company}</p>
                </div>
                <div className="max-w-md">
                  <p className="text-sm font-light leading-relaxed uppercase tracking-wider text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
