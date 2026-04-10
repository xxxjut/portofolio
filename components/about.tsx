'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Merancang antarmuka pengguna (pixel-perfect) yang inklusif dan dapat diakses.Membangun antarmuka yang dapat diakses dan sempurna',
  'Optimasi kinerja dan praktik terbaikMengelola dan mengoptimalkan Design System beserta praktik terbaik desain UI.',
  'Berkolaborasi lintas divisi (UX, Product, Developer) untuk memastikan kesesuaian desain hingga tahap implementasi. dan pengembangan kolaboratif',
  'Menjadi mentor dan memberikan panduan desain bagi UI Designer junior.',
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12 border-b border-white/10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">
              TENTANG SAYA
            </h2>
            <div className="w-20 h-px bg-white/40" />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-40 h-40 md:w-56 md:h-56 border border-white/20 p-3 bg-white/5"
          >
            <div className="relative w-full h-full grayscale brightness-90 contrast-110">
              <Image 
                src="/images/profile-2.jpg" 
                alt="Profile Rizwan Herlan Z" 
                fill 
                className="object-cover hover:scale-105 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed uppercase tracking-wide text-muted-foreground/80">
              Saya adalah pengembang pemula yang gigih ingin jauh lebih tau bangaimana sih dunia domino nya dunia Teknologi 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="border border-white/10 p-8 hover:bg-white/5 transition-all duration-500"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-4 block">HIGHLIGHT</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white leading-relaxed">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
