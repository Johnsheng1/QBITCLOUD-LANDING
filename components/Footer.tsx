import { Cloud, Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center">
                <Cloud className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold">QBIT CLOUD</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              QBIT CLOUD (丘比特云) 致力于为全球用户提供最优质的云计算基础设施服务。
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:text-pink-500 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">产品服务</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-pink-500 transition-colors">弹性计算 ECS</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">裸金属服务器</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">对象存储 OSS</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">内容分发 CDN</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">帮助支持</h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="https://www.qbitcloud.top/login" className="hover:text-pink-500 transition-colors">用户登录</Link></li>
              <li><Link href="https://www.qbitcloud.top/cart" className="hover:text-pink-500 transition-colors">购物车</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">文档中心</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">API 参考</Link></li>
              <li><Link href="#" className="hover:text-pink-500 transition-colors">服务等级协议</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">订阅动态</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              订阅我们的邮件列表，获取最新产品动态与优惠信息。
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="您的邮箱" 
                className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none text-sm focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <button className="px-4 py-2 rounded-xl bg-pink-500 text-white text-sm font-bold">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 uppercase tracking-widest font-semibold">
          <div>© 2026 QBIT CLOUD. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-pink-500 transition-colors">隐私政策</Link>
            <Link href="/tos" className="hover:text-pink-500 transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">法律合规</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
