'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SakuraBackground from '@/components/SakuraBackground';
import { useLanguage } from '@/lib/i18n';
import { Shield, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function LegalPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen">
      <SakuraBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{t.footer.legal}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              QBIT CLOUD 致力于构建合规、安全、透明的云计算环境。
            </p>
          </div>

          <div className="space-y-12">
            <section className="p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">合规声明</h2>
              </div>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>
                  QBIT CLOUD 严格遵守业务运营所在地及服务交付所在地的法律法规。针对中国大陆用户及相关业务，我们严格遵循以下法律框架：
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none pl-0">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>《中华人民共和国网络安全法》</span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>《中华人民共和国数据安全法》</span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>《个人信息保护法 (PIPL)》</span>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>《互联网信息服务管理办法》</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">用户法律义务提醒</h2>
              </div>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-4">
                <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-medium">
                  重要提示：用户在使用 QBIT CLOUD 服务时，不仅必须遵守中国法律，还必须严格遵守您所在地及业务受众所在地的法律法规。
                </div>
                <p>禁止利用本平台从事以下违法活动：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>危害国家安全、泄露国家秘密，颠覆国家政权，破坏国家统一的行为。</li>
                  <li>损害国家荣誉和利益的行为。</li>
                  <li>煽动民族仇恨、民族歧视，破坏民族团结的行为。</li>
                  <li>破坏国家宗教政策，宣扬邪教和封建迷信的行为。</li>
                  <li>散布谣言，扰乱社会秩序，破坏社会稳定的行为。</li>
                  <li>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的行为。</li>
                  <li>侮辱或者诽谤他人，侵害他人合法权益的行为。</li>
                  <li>从事任何形式的非法金融活动、诈骗、侵权、黑客攻击等违法行为。</li>
                </ul>
              </div>
            </section>

            <section className="p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">监管与执法协助</h2>
              </div>
              <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>
                  QBIT CLOUD 积极配合相关监管部门的执法工作。如果发现用户存在违法违规行为，我们将依法采取包括但不限于：警告、限制资源、暂停服务、终止服务、没收违法所得、向有关部门举报等措施。
                </p>
                <p className="mt-4">
                  我们保留在法律允许的范围内，根据政府部门或司法机关的要求，披露相关用户信息的权利，以协助调查违法活动。
                </p>
              </div>
            </section>

            <div className="text-center text-zinc-500 text-sm">
              如有任何合规性疑问，请联系我们的法务部门：legal@qbitcloud.top
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
