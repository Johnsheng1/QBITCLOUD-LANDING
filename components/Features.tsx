'use client';

import { motion } from 'motion/react';
import { Cpu, Globe, ShieldCheck, Zap, Database, Headphones, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import Link from 'next/link';

export default function Features() {
  const { t } = useLanguage();

  const icons = [Zap, Cpu, ShieldCheck, Globe, Database, Headphones];
  const colors = [
    { color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    { color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    { color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  ];

  const bentoGridClasses = [
    "lg:col-span-2 lg:row-span-2", // 1
    "lg:col-span-1 lg:row-span-1", // 2
    "lg:col-span-1 lg:row-span-1", // 3
    "lg:col-span-1 lg:row-span-2", // 4
    "lg:col-span-1 lg:row-span-1", // 5
    "lg:col-span-1 lg:row-span-1", // 6
  ];

  return (
    <section id="products" className="py-32 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            {t.features.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            {t.features.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            const style = colors[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`group relative p-8 rounded-[2rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 hover:border-pink-500/30 transition-all hover:shadow-2xl hover:shadow-pink-500/5 flex flex-col justify-between overflow-hidden ${bentoGridClasses[index]}`}
              >
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${style.bg}`} />
                
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${style.bg} ${style.border} border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${style.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm lg:text-base">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-pink-500 transition-colors">
                    Learn More
                  </span>
                  <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
