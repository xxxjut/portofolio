import { motion } from 'framer-motion';
import ProfileCard from './profile-card';

const highlights = [
  'Merancang antarmuka pengguna (pixel-perfect) yang inklusif dan dapat diakses.',
  'Optimasi kinerja dan praktik terbaik desain UI.',
  'Berkolaborasi lintas divisi untuk memastikan kesesuaian desain.',
  'Memberikan panduan desain bagi UI Designer junior.',
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content (8 columns width) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-6 leading-none">
                TENTANG <span className="font-bold">SAYA</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-transparent" />
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed uppercase tracking-wider text-white/80">
              Saya adalah pengembang pemula yang gigih ingin jauh lebih tau bagaimana dunia Teknologi berkembang. Fokus utama saya adalah menciptakan desain yang <span className="text-white font-medium">Elegan</span> dan <span className="text-white font-medium">Berdampak</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={highlight}
                  className="border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-3 block">SKILL / ASPECT</span>
                  <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Card (5 columns width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              <ProfileCard 
                avatarUrl="/images/profile-2.jpg" 
                name="Rizwan Herlan Z"
                title="Graphic Designer & Web Developer"
                handle="rizwanherlan"
                status="Creative Explorer"
                className="w-full"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
