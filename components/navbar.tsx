'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-10 flex items-center justify-between mix-blend-difference"
    >
      <Link href="/" className="text-sm font-bold tracking-[0.3em] text-white">
        RIZWAN
      </Link>

      <div className="hidden md:flex items-center gap-12">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 p-2 text-white"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-[0.3em] text-white hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

