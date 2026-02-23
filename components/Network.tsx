'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

export default function Network() {
  const { t } = useLanguage();

  return (
    <section id="network" className="py-32 overflow-hidden bg-zinc-900 text-white relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-sakura)_0%,_transparent_70%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{t.network.title_prefix}<br /><span className="text-pink-400">{t.network.title_suffix}</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              {t.network.description}
            </p>
            
            <div className="space-y-6">
              {t.network.regions.map((item) => (
                <div key={item.name} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-pink-400 font-bold mb-1">{item.name}</div>
                  <div className="text-zinc-300 text-sm">{item.cities}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <svg viewBox="0 0 800 500" className="w-full h-full opacity-40">
              <path 
                d="M150,200 Q400,100 650,200 T150,400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                className="text-pink-500/30"
              />
              {/* Simple World Map Dots */}
              {[
                [150, 200], [200, 180], [250, 220], [300, 250], [400, 200], 
                [500, 150], [600, 180], [650, 200], [700, 250], [550, 300],
                [450, 350], [350, 380], [250, 400], [180, 350]
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot[0]}
                  cy={dot[1]}
                  r="2"
                  className="fill-pink-500"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </svg>
            
            {/* Pulsing Nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-ping" />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-ping delay-500" />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-ping delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
