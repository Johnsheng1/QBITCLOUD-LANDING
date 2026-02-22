'use client';

import { motion } from 'motion/react';
import { Cpu, Globe, ShieldCheck, Zap, Database, Headphones } from 'lucide-react';

const features = [
  {
    title: '极速网络',
    description: '全球 BGP 优化线路，CN2 GIA 直连，确保毫秒级响应。',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    title: '高性能算力',
    description: '采用最新一代 AMD EPYC 处理器与 NVMe SSD 存储阵列。',
    icon: Cpu,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: '安全防护',
    description: '自研 DDoS 清洗系统，提供高达 2Tbps 的流量防护。',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: '全球覆盖',
    description: '在香港、日本、美国等全球 24 个地区部署数据中心。',
    icon: Globe,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
  {
    title: '弹性存储',
    description: '支持块存储、对象存储，数据多副本冗余备份。',
    icon: Database,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    title: '专家支持',
    description: '7x24 小时技术专家在线，随时解决您的业务难题。',
    icon: Headphones,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
];

export default function Features() {
  return (
    <section id="products" className="py-32 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">卓越性能，稳如磐石</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            我们不仅提供服务器，更提供支撑您业务飞速发展的坚实底座。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-pink-500/30 transition-all hover:shadow-2xl hover:shadow-pink-500/5"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
