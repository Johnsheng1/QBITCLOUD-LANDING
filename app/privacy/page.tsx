import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SakuraBackground from '@/components/SakuraBackground';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <SakuraBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">隐私政策</h1>
            <p className="text-zinc-500 dark:text-zinc-400">最后更新日期：2026年2月22日</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <section>
              <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                QBIT CLOUD (丘比特云) 非常重视您的隐私。本隐私政策旨在说明我们如何收集、使用、披露及保护您的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">1. 信息收集</h2>
              <p>当您注册或使用我们的服务时，我们可能会收集以下信息：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>注册信息：</strong>您的姓名、电子邮件地址、联系电话等。</li>
                <li><strong>支付信息：</strong>为了完成交易，我们可能会收集必要的支付记录，但我们不会存储您的完整信用卡号。</li>
                <li><strong>技术信息：</strong>您的 IP 地址、浏览器类型、操作系统、访问时间及页面活动记录。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">2. 信息使用</h2>
              <p>我们收集的信息将用于以下用途：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>提供、维护及改进我们的云计算服务。</li>
                <li>处理您的订单及支付请求。</li>
                <li>向您发送服务通知、安全警报及技术支持信息。</li>
                <li>防止欺诈、滥用及其他非法活动。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">3. 信息共享与披露</h2>
              <p>我们不会向第三方出售您的个人信息。但在以下情况下，我们可能会披露您的信息：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>法律要求：</strong>根据法律法规、法律程序或政府强制性要求。</li>
                <li><strong>服务提供商：</strong>与协助我们运营业务的第三方（如支付处理商）共享必要信息。</li>
                <li><strong>保护权利：</strong>为了保护 QBIT CLOUD、我们的用户或公众的权利、财产或安全。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">4. 数据安全</h2>
              <p>我们采取合理的物理、电子及管理措施来保护您的信息免遭未经授权的访问、使用或披露。然而，互联网上的传输并非百分之百安全，我们无法保证绝对的安全性。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">5. Cookie 的使用</h2>
              <p>我们使用 Cookie 来提升您的用户体验，例如保持登录状态及分析网站流量。您可以通过浏览器设置拒绝 Cookie，但这可能会影响您使用我们的部分功能。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">6. 您的权利</h2>
              <p>您有权访问、更正或要求删除您的个人信息。您可以通过控制台或联系客服行使这些权利。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">7. 政策更新</h2>
              <p>我们可能会不时更新本隐私政策。任何更改都将发布在网站上。继续使用我们的服务即表示您同意更新后的政策。</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
