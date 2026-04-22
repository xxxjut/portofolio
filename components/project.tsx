import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projectsData = [
  {
    title: 'Platform E-Commerce',
    description: 'Platform e-commerce modern yang dibangun dengan Next.js dan Stripe.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e5f5c9ba?w=800&h=500&fit=crop',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'STRIPE'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'System Design Library',
    description: 'Pustaka komponen React yang komprehensif dengan 50+ komponen.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    tags: ['REACT', 'STORYBOOK', 'TAILWIND'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dasbor visualisasi data interaktif dengan metrik real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['RECHARTS', 'POSTGRESQL', 'NEXT.JS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Chat Interface',
    description: 'Antarmuka chat modern yang bertenaga AI dengan streaming pesan.',
    image: 'https://images.unsplash.com/photo-1536987333706-fc500db6b?w=800&h=500&fit=crop',
    tags: ['OPENAI', 'STREAMING', 'NEXT.JS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8"
        >
          <div>
            <h2 className="text-sm font-bold tracking-[0.6em] uppercase text-white/40 mb-4 block">
              PORTFOLIO / NEWS
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-none">
              LATEST <span className="font-light italic">WORKS.</span>
            </h1>
          </div>
          
          <div className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase hidden md:block">
            SCROLL TO EXPLORE →
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
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
