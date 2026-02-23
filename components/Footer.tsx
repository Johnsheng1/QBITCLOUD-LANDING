'use client';

import { Cloud, Github, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const { t } = useLanguage();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
    }, 3000);
  };

  return (
    <footer className="bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <Cloud className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold">QBIT CLOUD</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <Link href="https://t.me/qbitcloud_group" target="_blank" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Johnsheng1" target="_blank" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="mailto:sales@qbitcloud.top" className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t.footer.products}</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-pink-500 transition-colors">{t.footer.links.ecs}</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">{t.footer.links.metal}</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">{t.footer.links.oss}</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">{t.footer.links.cdn}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t.footer.support}</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="https://www.qbitcloud.top/login" className="hover:text-pink-500 transition-colors">{t.nav.login}</Link></li>
              <li><Link href="https://www.qbitcloud.top/cart" className="hover:text-pink-500 transition-colors">{t.nav.cart}</Link></li>
              <li><Link href="https://status.qbitcloud.top/status/qbitcloud" target="_blank" className="hover:text-pink-500 transition-colors">{t.footer.links.status}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t.footer.subscribe}</h4>
            <AnimatePresence mode="wait">
              {isSubscribed ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-500 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{t.footer.subscribe_btn === '订阅' ? '订阅成功！' : t.footer.subscribe_btn === 'Subscribe' ? 'Subscribed!' : '購読完了！'}</span>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -10 }}>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                    {t.footer.subscribe_desc}
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder={t.footer.email_placeholder} 
                      className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none text-sm focus:ring-2 focus:ring-pink-500 transition-all"
                    />
                    <button 
                      onClick={handleSubscribe}
                      disabled={isSubscribing}
                      className="px-4 py-2 rounded-xl bg-pink-500 text-white text-sm font-bold shadow-lg shadow-pink-500/20 disabled:opacity-70 flex items-center justify-center min-w-[80px]"
                    >
                      {isSubscribing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        t.footer.subscribe_btn
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 uppercase tracking-widest font-semibold">
          <div>{t.footer.rights}</div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-pink-500 transition-colors">{t.footer.privacy}</Link>
            <Link href="/tos" className="hover:text-pink-500 transition-colors">{t.footer.tos}</Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">{t.footer.legal}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
