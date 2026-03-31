'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="p-12 bg-black border-white/5 hover:bg-white/5 transition-all duration-500 group"
    >
      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-10 opacity-50 group-hover:opacity-100 transition-opacity">
        {category}
      </h3>
      <div className="flex flex-col gap-y-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
