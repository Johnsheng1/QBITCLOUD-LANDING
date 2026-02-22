'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-bold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3 h-3" />
          <span>全新日本/香港节点现已上线</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8"
        >
          云端之美，<br />
          <span className="sakura-text-gradient">如樱绽放</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
        >
          QBIT CLOUD 为全球开发者提供高性能、低延迟的云计算基础设施。
          在极简的设计中，体验极致的算力与稳定性。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="https://www.qbitcloud.top/cart"
            className="group relative px-8 py-4 rounded-2xl bg-pink-500 text-white font-bold text-lg shadow-xl shadow-pink-500/20 hover:scale-105 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              立即开启 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link 
            href="#pricing"
            className="px-8 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2"
          >
            查看定价 <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-100 dark:border-zinc-900 pt-12"
        >
          {[
            { label: '全球节点', value: '24+' },
            { label: '在线率保证', value: '99.99%' },
            { label: '防御能力', value: '2Tbps+' },
            { label: '活跃用户', value: '50k+' },
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
