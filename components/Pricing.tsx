'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function Pricing() {
  const { t } = useLanguage();

  // Map translations to plan structure
  const plans = [
    { ...t.pricing.plans[0], price: '49', isPopular: false },
    { ...t.pricing.plans[1], price: '129', isPopular: true },
    { ...t.pricing.plans[2], price: '499', isPopular: false },
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            {t.pricing.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border transition-all backdrop-blur-xl ${
                plan.isPopular 
                  ? 'bg-zinc-900/90 dark:bg-white/90 text-white dark:text-zinc-900 border-zinc-900 dark:border-white scale-105 z-10 shadow-2xl' 
                  : 'bg-white/40 dark:bg-zinc-900/40 text-zinc-900 dark:text-white border-white/20 dark:border-white/10 hover:bg-white/60 dark:hover:bg-zinc-900/60'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-pink-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/30">
                  {t.pricing.popular}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold">¥{plan.price}</span>
                <span className={`text-sm ${plan.isPopular ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'}`}>{t.pricing.month}</span>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-pink-500' : 'bg-pink-500/10'}`}>
                      <Check className={`w-3 h-3 ${plan.isPopular ? 'text-white' : 'text-pink-500'}`} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="https://www.qbitcloud.top/cart"
                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center ${
                  plan.isPopular 
                    ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-500/20' 
                    : 'bg-zinc-100/50 dark:bg-zinc-800/50 hover:bg-pink-500 hover:text-white'
                }`}
              >
                {t.pricing.buy}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
