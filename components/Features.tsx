'use client';

import { motion } from 'motion/react';
import { Cpu, Globe, ShieldCheck, Zap, Database, Headphones } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Features() {
  const { t } = useLanguage();

  const icons = [Zap, Cpu, ShieldCheck, Globe, Database, Headphones];
  const colors = [
    { color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  return (
    <section id="products" className="py-32 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t.features.title}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index];
            const style = colors[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 hover:border-pink-500/30 transition-all hover:shadow-2xl hover:shadow-pink-500/5"
              >
                <div className={`w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${style.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
