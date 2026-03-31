'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.png"
          alt="Artistic Portrait"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="bg-noise absolute inset-0 opacity-[0.03] pointer-events-none" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full h-full max-w-[1800px] mx-auto px-6 md:px-12 py-10 flex flex-col justify-between"
      >
        {/* Top Header Mockup (as per reference) */}
        <div className="flex justify-between items-start">
          <motion.span 
            variants={itemVariants}
            className="text-[10px] font-bold tracking-[0.5em] text-white uppercase"
          >
            MOOD
          </motion.span>
          <div className="flex items-center gap-12">
            <motion.span 
              variants={itemVariants}
              className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase cursor-pointer hover:text-white transition-colors"
            >
              Share •
            </motion.span>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white" />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Central Content */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center">
          {/* Left Description (Small) */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block max-w-[240px]"
          >
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/50 leading-loose">
              Black is the darkest color, the result of the absence or complete absorption of visible light.
            </p>
          </motion.div>

          {/* MAIN HUGE TEXT */}
          <motion.h1 
            variants={textVariants}
            className="text-[15vw] md:text-[12vw] font-bold tracking-tighter text-white/90 uppercase text-center select-none"
            style={{ 
              textShadow: '0 0 50px rgba(0,0,0,0.5)',
              mixBlendMode: 'overlay' 
            }}
          >
            Rizwan herlan z
          </motion.h1>
        </div>

        {/* Bottom Navigation (as per reference) */}
        <div className="flex justify-between items-end">
          <motion.div variants={itemVariants}>
            <Link 
              href="#about"
              className="text-[10px] font-bold tracking-[0.4em] text-white uppercase flex items-center gap-4 group"
            >
              Explore
              <span className="w-8 h-px bg-white/40 group-hover:w-12 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-[10px] font-bold tracking-[0.5em] text-white opacity-40 hidden md:block"
          >
            001 / 004
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[8px] font-bold tracking-[0.3em] text-white/30 block mb-1">NEXT</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">Out of the blue</span>
            </div>
            
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="24" cy="24" r="23" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1" 
                />
                <circle 
                  cx="24" cy="24" r="23" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1" 
                  strokeDasharray="145"
                  strokeDashoffset="100"
                />
              </svg>
              <div className="w-6 h-px bg-white -rotate-45" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


