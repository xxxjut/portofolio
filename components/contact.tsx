'use client';

import React from "react"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="bg-noise absolute inset-0 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 uppercase">
              CONTACT
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-md uppercase tracking-wider">
              It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-2">Adress</h3>
                <p className="text-muted-foreground text-xs uppercase">Hatay/Iskenderun 533/1 sok-No:14</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-2">E-mail</h3>
                <p className="text-muted-foreground text-xs lowercase">harunbegan@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] p-8 md:p-12 border border-white/5"
          >
            <h2 className="text-2xl font-bold tracking-tighter mb-12 uppercase">
              CONTACT FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-sm placeholder:text-muted-foreground/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Your Phone</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-sm placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-sm placeholder:text-muted-foreground/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={2}
                  className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-colors outline-none text-sm resize-none placeholder:text-muted-foreground/30"
                  required
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-muted-foreground transition-all flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>

              {status === 'success' && (
                <p className="text-green-500 text-[10px] font-bold uppercase tracking-widest text-center">Message Sent Successfully!</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

