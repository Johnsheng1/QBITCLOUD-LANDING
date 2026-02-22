import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SakuraBackground from '@/components/SakuraBackground';

export default function ToSPage() {
  return (
    <main className="relative min-h-screen">
      <SakuraBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">服务条款</h1>
            <p className="text-zinc-500 dark:text-zinc-400">最后更新日期：2026年2月22日</p>
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <section>
              <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                欢迎使用 QBIT CLOUD (下称“本平台”或“丘比特云”) 的云计算服务。为确保服务质量和合法合规使用，我们制定了以下条款。一经购买或使用本平台的服务，即视为您已充分阅读并接受本服务条款的全部内容。
              </p>
              <p>若有疑问，请通过工单联系相关支持部门。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">1. 条款接受</h2>
              <p>用户购买本平台的任何云产品（包括但不限于 VPS、裸金属服务器、NAT VPS）后，即表示同意并接受本服务条款的所有规定。在接受条款之前，请务必仔细阅读。如用户不同意本条款的任何内容，请不要购买或使用我们的服务。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">2. 退款政策</h2>
              <p>除法律强制要求的情形外，本平台的云服务器以及特价/促销产品一经售出概不退款。请在购买前确认产品符合您的需求。一旦完成购买并交付产品，即视为您认同无退款政策，后续将不予受理退款申请。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">3. 禁止用途</h2>
              <p>为维护网络环境和服务器稳定，禁止利用 QBIT CLOUD 的服务从事以下活动：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>加密货币挖矿：</strong>禁止使用 CPU、GPU 等资源进行任何形式的数字货币挖矿或相关活动。</li>
                <li><strong>侵权下载：</strong>禁止通过 BT (BitTorrent) 或其它 P2P 网络进行侵权下载、种子传播等行为。</li>
                <li><strong>成人内容传播：</strong>禁止托管、传播任何色情、成人内容或违反公序良俗的媒体与文件。</li>
                <li><strong>邮件滥用：</strong>禁止利用服务器进行大量邮件群发、垃圾邮件 (Spam) 发送或邮件列表服务。</li>
                <li><strong>违规代理服务：</strong>严禁搭建或运行公共代理服务（如机场、Socks5、HTTP 代理等），以及任何可能对所在地区或国家网络基础设施造成损害、干扰或违反当地互联网监管政策的行为。</li>
                <li><strong>其它违法违规用途：</strong>禁止将服务器用于任何违反所在司法辖区法律法规的用途，包括但不限于侵权、诈骗、非法入侵等行为。</li>
              </ul>
              <p>如发现用户从事上述任何禁止的活动，本平台有权在不经通知的情况下立即采取措施，包括暂停或终止相关服务，并视情况保留追究法律责任的权利。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">4. 资源使用</h2>
              <p>QBIT CLOUD 实行公平使用原则 (Fair Use Policy) 以保障所有用户获得良好服务体验。用户应合理使用所购买的资源，不得过度占用 CPU、内存、带宽等资源而影响服务器或网络的正常运行。本平台保留自行裁定用户资源使用是否超出合理范围的权利，并可在必要时对过度使用的账户采取限制措施（如限速、限制连接数等）。在未事先通知的情况下，我们也有权在检测到异常时临时限制或停权相关资源，以保护整体平台的稳定性和其他用户的权益。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">5. 滥用行为</h2>
              <p>严禁任何恶意或滥用本平台服务的行为。滥用行为包括但不限于：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>网络扫描：</strong>利用服务器对其他网络主机进行未经授权的端口扫描或漏洞扫描。</li>
                <li><strong>攻击行为：</strong>发起、参与或支持针对任何个人、服务器或网络的拒绝服务攻击 (DoS) 或分布式拒绝服务攻击 (DDoS)。</li>
                <li><strong>恶意连接：</strong>大量发送无效请求、过度占用网络连接资源等危害网络稳定的行为。</li>
                <li><strong>入侵和攻击：</strong>尝试未经授权访问、入侵其他计算机系统或服务器，或传播恶意软件、病毒等。</li>
                <li><strong>违反 DMCA：</strong>除特殊标注外，产品不可违反 DMCA（数字千年版权法）。</li>
              </ul>
              <p>一经发现上述滥用行为，QBIT CLOUD 有权不经事先通知立即中止或终止相关用户的服务。在此情况下，本平台不承担任何责任，且违规用户无权要求任何退款或赔偿。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">6. 禁止转售与共享账号</h2>
              <p>本平台提供的服务仅限购买者本人使用。禁止用户未经 QBIT CLOUD 书面许可，将所购买的服务进行转售、租借或以任何形式分享给第三方使用。一经发现未经授权的转售或账号共享行为，我们有权立即暂停或终止相关服务。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">7. 免责条款</h2>
              <p>在适用法律允许的最大范围内，QBIT CLOUD 对于用户使用本服务所产生的任何直接或间接损失不承担责任。这包括但不限于：数据丢失、数据损坏、服务宕机、网络中断、服务不稳定导致的后果。用户有责任自行定期备份数据并采取必要措施保护自身信息安全。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">8. 条款修改与最终解释权</h2>
              <p>QBIT CLOUD 保留在任何时间自行修改本服务条款的权利。修改后的条款将公布在本网站上，并于发布时即时生效。用户应定期查阅最新版本；如在条款更新后继续使用服务，即视为接受修改后的条款。本平台对本服务条款拥有最终解释权。</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
