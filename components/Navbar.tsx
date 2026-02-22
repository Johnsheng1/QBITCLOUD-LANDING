'use client';

import { motion } from 'motion/react';
import { Cloud, Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '产品', href: '#products' },
    { name: '网络', href: '#network' },
    { name: '定价', href: '#pricing' },
    { name: '关于', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-pink-100/10 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
            <Cloud className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-tight">QBIT CLOUD</span>
            <span className="text-[10px] font-medium text-pink-500 uppercase tracking-widest -mt-1">丘比特云</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-zinc-100 dark:border-zinc-800 pl-8">
            <Link 
              href="https://www.qbitcloud.top/cart"
              className="p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-500/10 text-zinc-600 dark:text-zinc-400 hover:text-pink-500 transition-all"
              title="购物车"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.qbitcloud.top/login"
              className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:bg-pink-500 dark:hover:bg-pink-400 hover:text-white transition-all"
            >
              控制台
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-pink-100/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Link 
              href="https://www.qbitcloud.top/cart"
              className="flex items-center justify-center gap-2 py-4 rounded-xl border border-zinc-100 dark:border-zinc-800 font-bold"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" /> 购物车
            </Link>
            <Link 
              href="https://www.qbitcloud.top/login"
              className="flex items-center justify-center py-4 rounded-xl bg-pink-500 text-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              控制台
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
