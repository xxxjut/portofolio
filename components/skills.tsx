'use client';

import { motion } from 'framer-motion';
import { SkillCard } from './skill-card';

const skillsData = [
  {
    category: 'Teknologi Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)'],
  },
  {
    category: 'UI & Desain',
    skills: ['Figma', 'Desain Responsif', 'Aksesibilitas (A11y)', 'Prinsip UI/UX', 'Sistem Desain'],
  },
  { 
    category: 'Alat & Platform',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Chrome DevTools'],
  },
  {
    category: 'Kinerja & Pengujian',
    skills: ['Kinerja Web', 'Optimasi SEO', 'Pengujian Unit', 'Pengujian E2E', 'Debugging'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            KEAHLIAN
          </h2>
          <div className="w-20 h-px bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
