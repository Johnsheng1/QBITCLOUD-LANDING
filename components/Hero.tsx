'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

const TypewriterText = ({ text, className, delay = 0, gradient = false }: { text: string, className?: string, delay?: number, gradient?: boolean }) => {
  const characters = text.split("");
  
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          }
        }
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, filter: 'blur(8px)', y: 5 },
            visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={gradient ? "sakura-text-gradient inline-block" : "inline-block"}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-pink-200/50 dark:border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-lg shadow-pink-500/5"
        >
          <Sparkles className="w-3 h-3" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
          <TypewriterText text={t.hero.title_prefix} delay={0.2} /><br />
          <TypewriterText text={t.hero.title_suffix} delay={0.8} gradient />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="https://www.qbitcloud.top/cart"
            className="group relative px-8 py-4 rounded-2xl bg-pink-500/90 backdrop-blur-sm text-white font-bold text-lg shadow-xl shadow-pink-500/20 hover:scale-105 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.start_now} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link 
            href="#pricing"
            className="px-8 py-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/20 dark:bg-black/20 backdrop-blur-md font-bold text-lg hover:bg-white/40 dark:hover:bg-white/10 transition-all flex items-center gap-2"
          >
            {t.hero.view_pricing} <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-200/20 dark:border-white/10 pt-12"
        >
          {[
            { label: t.hero.stats.nodes, value: '24+' },
            { label: t.hero.stats.uptime, value: '99.99%' },
            { label: t.hero.stats.defense, value: '2Tbps+' },
            { label: t.hero.stats.users, value: '50k+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
