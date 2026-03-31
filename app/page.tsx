'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/project';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedMode ? JSON.parse(savedMode) : prefersDark;

    setIsDark(shouldBeDark);
    updateDarkMode(shouldBeDark);
  }, []);

  const updateDarkMode = (isDarkMode: boolean) => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  };

  const handleToggleDarkMode = (value: boolean) => {
    setIsDark(value);
    updateDarkMode(value);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} setIsDark={handleToggleDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
