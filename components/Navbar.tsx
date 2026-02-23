'use client';

import { Cloud, Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';
import { Language } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.products, href: '#products' },
    { name: t.nav.network, href: '#network' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.about, href: '#about' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'zh', label: '简体中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-pink-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
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
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
            >
              <Globe className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-pink-500/10 hover:text-pink-500 transition-colors ${
                      language === lang.code ? 'text-pink-500 font-bold' : 'text-zinc-600 dark:text-zinc-300'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 border-l border-zinc-200/20 dark:border-white/10 pl-8">
            <Link 
              href="https://www.qbitcloud.top/cart"
              className="p-2 rounded-full hover:bg-pink-50 dark:hover:bg-pink-500/10 text-zinc-600 dark:text-zinc-300 hover:text-pink-500 transition-all"
              title={t.nav.cart}
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link 
              href="https://www.qbitcloud.top/login"
              className="px-5 py-2.5 rounded-full bg-zinc-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-zinc-900 text-sm font-semibold hover:bg-pink-500 dark:hover:bg-pink-400 hover:text-white transition-all shadow-lg shadow-zinc-500/10"
            >
              {t.nav.console}
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
          className="md:hidden absolute top-20 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4"
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
          
          <div className="flex gap-2 py-2 border-t border-b border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-full text-sm ${
                  language === lang.code ? 'bg-pink-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Link 
              href="https://www.qbitcloud.top/cart"
              className="flex items-center justify-center gap-2 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 font-bold bg-white/50 dark:bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" /> {t.nav.cart}
            </Link>
            <Link 
              href="https://www.qbitcloud.top/login"
              className="flex items-center justify-center py-4 rounded-xl bg-pink-500 text-white font-bold shadow-lg shadow-pink-500/20"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.console}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
