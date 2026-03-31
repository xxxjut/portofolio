'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
      viewport={{ once: true }}
      className="group relative border border-white/5 bg-black overflow-hidden hover:bg-white/5 transition-all duration-700"
    >
      <div className="relative aspect-[16/10] overflow-hidden grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
        />
      </div>

      <div className="p-10 space-y-6">
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-bold tracking-tighter uppercase text-white group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        
        <p className="text-xs font-light tracking-widest leading-relaxed uppercase text-muted-foreground/80">
          {description}
        </p>

        <div className="flex gap-10 pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all underline decoration-white/20 underline-offset-8 hover:decoration-white"
            >
              VIEW LIVE
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all underline decoration-white/20 underline-offset-8 hover:decoration-white"
            >
              CODE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
