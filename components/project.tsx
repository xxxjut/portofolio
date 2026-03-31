'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projectsData = [
  {
    title: 'Platform E-Commerce',
    description: 'Platform e-commerce modern yang dibangun dengan Next.js dan Stripe, dilengkapi dengan manajemen inventaris real-time dan pembayaran aman.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e5f5c9ba?w=500&h=300&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pustaka Komponen Sistem Desain',
    description: 'Pustaka komponen React yang komprehensif dengan 50+ komponen yang dapat digunakan kembali, dokumentasi lengkap, dan integrasi Storybook.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Dasbor Analitik',
    description: 'Dasbor visualisasi data interaktif dengan metrik real-time, grafik kustom, dan fungsi ekspor yang dibangun dengan Recharts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tags: ['React', 'Recharts', 'Next.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    description: 'Aplikasi manajemen tugas full-stack dengan antarmuka seret dan lepas, kolaborasi real-time, dan sinkronisasi awan.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    tags: ['React', 'Firebase', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Antarmuka Chat AI',
    description: 'Antarmuka chat modern yang bertenaga AI dengan streaming pesan, dukungan markdown, dan manajemen riwayat percakapan.',
    image: 'https://images.unsplash.com/photo-1536987333706-fc500db6b?w=500&h=300&fit=crop',
    tags: ['React', 'Next.js', 'OpenAI API', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-accent mb-4">
            Proyek Unggulan
          </h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
