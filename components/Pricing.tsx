'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: '入门版',
    price: '49',
    description: '适合个人博客与小型应用',
    features: ['1 vCPU', '2GB RAM', '40GB SSD', '1TB 流量', '100Mbps 带宽'],
    isPopular: false,
  },
  {
    name: '专业版',
    price: '129',
    description: '适合中型企业与高并发业务',
    features: ['4 vCPU', '8GB RAM', '160GB SSD', '5TB 流量', '500Mbps 带宽', 'DDoS 基础防护'],
    isPopular: true,
  },
  {
    name: '企业版',
    price: '499',
    description: '极致性能，专属定制服务',
    features: ['16 vCPU', '32GB RAM', '500GB SSD', '不限流量', '1Gbps 独享带宽', '高级 DDoS 防护', '24/7 专属架构师'],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">透明定价，按需选择</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            无论规模大小，我们都有适合您的云端解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border transition-all ${
                plan.isPopular 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white scale-105 z-10 shadow-2xl' 
                  : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-100 dark:border-zinc-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-pink-500 text-white text-xs font-bold uppercase tracking-widest">
                  最受欢迎
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold">¥{plan.price}</span>
                <span className={`text-sm ${plan.isPopular ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-500'}`}>/月起</span>
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
                    ? 'bg-pink-500 text-white hover:bg-pink-600' 
                    : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-pink-500 hover:text-white'
                }`}
              >
                立即选购
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
