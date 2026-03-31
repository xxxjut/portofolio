'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white py-32 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
          THANKS FOR WATCHING
        </h2>
        
        <div className="flex gap-12 mb-20">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground hover:text-white transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
          © 2026 Arik. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
