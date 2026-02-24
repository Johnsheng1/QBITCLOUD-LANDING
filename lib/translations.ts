export type Language = 'zh' | 'en' | 'ja';

export const translations = {
  zh: {
    nav: {
      products: '产品',
      network: '网络',
      pricing: '定价',
      about: '关于',
      console: '控制台',
      cart: '购物车',
      login: '用户登录',
    },
    hero: {
      badge: '全新日本/香港节点现已上线',
      title_prefix: '云端之美，',
      title_suffix: '如樱绽放',
      description: 'QBIT CLOUD 为全球开发者提供高性能、低延迟的云计算基础设施。在极简的设计中，体验极致的算力与稳定性。',
      start_now: '立即开启',
      view_pricing: '查看定价',
      stats: {
        nodes: '全球节点',
        uptime: '在线率保证',
        defense: '防御能力',
        users: '活跃用户',
      }
    },
    features: {
      title: '卓越性能，稳如磐石',
      subtitle: '我们不仅提供服务器，更提供支撑您业务飞速发展的坚实底座。',
      items: [
        { title: '极速网络', desc: '全球 BGP 优化线路，CN2 GIA 直连，确保毫秒级响应。' },
        { title: '高性能算力', desc: '采用最新一代 AMD EPYC 处理器与 NVMe SSD 存储阵列。' },
        { title: '安全防护', desc: '自研 DDoS 清洗系统，提供高达 2Tbps 的流量防护。' },
        { title: '全球覆盖', desc: '在香港、日本、美国等全球 24 个地区部署数据中心。' },
        { title: '弹性存储', desc: '支持块存储、对象存储，数据多副本冗余备份。' },
        { title: '专家支持', desc: '7x24 小时技术专家在线，随时解决您的业务难题。' },
      ]
    },
    pricing: {
      title: '透明定价，按需选择',
      subtitle: '无论规模大小，我们都有适合您的云端解决方案。',
      popular: '最受欢迎',
      month: '/月起',
      buy: '立即选购',
      plans: [
        { name: '入门版', desc: '适合个人博客与小型应用', features: ['1 vCPU', '2GB RAM', '40GB SSD', '1TB 流量', '100Mbps 带宽'] },
        { name: '专业版', desc: '适合中型企业与高并发业务', features: ['4 vCPU', '8GB RAM', '160GB SSD', '5TB 流量', '500Mbps 带宽', 'DDoS 基础防护'] },
        { name: '企业版', desc: '极致性能，专属定制服务', features: ['16 vCPU', '32GB RAM', '500GB SSD', '不限流量', '1Gbps 独享带宽', '高级 DDoS 防护', '24/7 专属架构师'] },
      ]
    },
    network: {
      title_prefix: '全球网络，',
      title_suffix: '触手可及',
      description: '我们在全球主要互联网枢纽部署了高规格数据中心。通过自建骨干网与全球顶级运营商互联，为您提供低延迟、高带宽的连接体验。',
      regions: [
        { name: '亚太地区', cities: '香港、东京、首尔、新加坡、台北' },
        { name: '北美地区', cities: '洛杉矶、圣何塞、西雅图、纽约' },
        { name: '欧洲地区', cities: '伦敦、法兰克福、阿姆斯特丹' },
      ]
    },
    faq: {
      title: '常见问题',
      subtitle: '为您解答关于 QBIT CLOUD 的常见疑问。',
      items: [
        { q: 'QBIT CLOUD 提供哪些支付方式？', a: '我们支持支付宝、微信支付、信用卡以及主流加密货币支付。' },
        { q: '服务器开通需要多久？', a: '在您完成支付后，系统通常会在 1-5 分钟内自动完成实例部署并发送开通邮件。' },
        { q: '支持退款吗？', a: '根据我们的服务条款，特价产品及已交付的云服务器通常不予退款，请在购买前仔细确认需求。' },
        { q: '如何保证我的数据安全？', a: '我们采用多副本冗余存储技术，并提供自研 DDoS 防护系统。同时建议用户定期进行异地备份。' },
      ]
    },
    footer: {
      desc: 'QBIT CLOUD (丘比特云) 致力于为全球用户提供最优质的云计算基础设施服务。',
      products: '产品服务',
      support: '帮助支持',
      subscribe: '订阅动态',
      subscribe_desc: '订阅我们的邮件列表，获取最新产品动态与优惠信息。',
      email_placeholder: '您的邮箱',
      subscribe_btn: '订阅',
      rights: '© 2026 QBIT CLOUD. ALL RIGHTS RESERVED.',
      privacy: '隐私政策',
      tos: '服务条款',
      legal: '法律合规',
      links: {
        ecs: '弹性计算 ECS',
        metal: '裸金属服务器',
        oss: '对象存储 OSS',
        cdn: '内容分发 CDN',
        docs: '文档中心',
        api: 'API 参考',
        sla: '服务等级协议',
        status: '可用性监控',
      }
    }
  },
  en: {
    nav: {
      products: 'Products',
      network: 'Network',
      pricing: 'Pricing',
      about: 'About',
      console: 'Console',
      cart: 'Cart',
      login: 'Login',
    },
    hero: {
      badge: 'New Japan/Hong Kong Nodes Live',
      title_prefix: 'Cloud Beauty, ',
      title_suffix: 'Blooming Like Sakura',
      description: 'QBIT CLOUD provides high-performance, low-latency cloud infrastructure for global developers. Experience extreme computing power and stability in a minimalist design.',
      start_now: 'Start Now',
      view_pricing: 'View Pricing',
      stats: {
        nodes: 'Global Nodes',
        uptime: 'Uptime Guarantee',
        defense: 'DDoS Protection',
        users: 'Active Users',
      }
    },
    features: {
      title: 'Superior Performance, Rock Solid',
      subtitle: 'We provide not just servers, but a solid foundation for your rapidly growing business.',
      items: [
        { title: 'Fast Network', desc: 'Global BGP optimized lines, CN2 GIA direct connection, ensuring millisecond response.' },
        { title: 'High Performance', desc: 'Powered by latest AMD EPYC processors and NVMe SSD storage arrays.' },
        { title: 'Security', desc: 'Self-developed DDoS scrubbing system providing up to 2Tbps protection.' },
        { title: 'Global Coverage', desc: 'Data centers deployed in 24 regions including Hong Kong, Japan, and US.' },
        { title: 'Elastic Storage', desc: 'Supports block storage, object storage, with multi-replica data redundancy.' },
        { title: 'Expert Support', desc: '7x24 technical experts online to solve your business problems anytime.' },
      ]
    },
    pricing: {
      title: 'Transparent Pricing',
      subtitle: 'Solutions for every scale, from personal blogs to enterprise applications.',
      popular: 'Most Popular',
      month: '/mo',
      buy: 'Buy Now',
      plans: [
        { name: 'Starter', desc: 'For personal blogs and small apps', features: ['1 vCPU', '2GB RAM', '40GB SSD', '1TB Traffic', '100Mbps Bandwidth'] },
        { name: 'Pro', desc: 'For medium enterprises and high concurrency', features: ['4 vCPU', '8GB RAM', '160GB SSD', '5TB Traffic', '500Mbps Bandwidth', 'Basic DDoS Protection'] },
        { name: 'Enterprise', desc: 'Extreme performance, dedicated service', features: ['16 vCPU', '32GB RAM', '500GB SSD', 'Unlimited Traffic', '1Gbps Dedicated', 'Advanced DDoS Protection', '24/7 Dedicated Architect'] },
      ]
    },
    network: {
      title_prefix: 'Global Network, ',
      title_suffix: 'Within Reach',
      description: 'We have deployed high-spec data centers in major global internet hubs. Interconnected via self-built backbone and top-tier carriers.',
      regions: [
        { name: 'Asia Pacific', cities: 'Hong Kong, Tokyo, Seoul, Singapore, Taipei' },
        { name: 'North America', cities: 'Los Angeles, San Jose, Seattle, New York' },
        { name: 'Europe', cities: 'London, Frankfurt, Amsterdam' },
      ]
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Answering your common questions about QBIT CLOUD.',
      items: [
        { q: 'What payment methods do you support?', a: 'We support Alipay, WeChat Pay, Credit Cards, and major cryptocurrencies.' },
        { q: 'How long does it take to deploy a server?', a: 'After payment, instances are usually deployed automatically within 1-5 minutes.' },
        { q: 'Do you offer refunds?', a: 'Per our ToS, promotional items and delivered cloud servers are generally non-refundable.' },
        { q: 'How is my data secured?', a: 'We use multi-replica redundant storage and self-developed DDoS protection. We also recommend regular off-site backups.' },
      ]
    },
    footer: {
      desc: 'QBIT CLOUD is dedicated to providing the highest quality cloud infrastructure services for global users.',
      products: 'Products',
      support: 'Support',
      subscribe: 'Subscribe',
      subscribe_desc: 'Subscribe to our mailing list for the latest product updates and offers.',
      email_placeholder: 'Your Email',
      subscribe_btn: 'Subscribe',
      rights: '© 2026 QBIT CLOUD. ALL RIGHTS RESERVED.',
      privacy: 'Privacy Policy',
      tos: 'Terms of Service',
      legal: 'Legal',
      links: {
        ecs: 'Elastic Compute ECS',
        metal: 'Bare Metal Server',
        oss: 'Object Storage OSS',
        cdn: 'Content Delivery CDN',
        docs: 'Documentation',
        api: 'API Reference',
        sla: 'SLA',
        status: 'Availability',
      }
    }
  },
  ja: {
    nav: {
      products: '製品',
      network: 'ネットワーク',
      pricing: '料金',
      about: '概要',
      console: 'コンソール',
      cart: 'カート',
      login: 'ログイン',
    },
    hero: {
      badge: '日本/香港ノード新規開設',
      title_prefix: 'クラウドの美、',
      title_suffix: '桜のように咲く',
      description: 'QBIT CLOUDは、世界の開発者に高性能・低遅延のクラウドインフラを提供します。ミニマルなデザインで、究極の計算能力と安定性を体験してください。',
      start_now: '今すぐ開始',
      view_pricing: '料金を見る',
      stats: {
        nodes: 'グローバルノード',
        uptime: '稼働率保証',
        defense: 'DDoS防御',
        users: 'アクティブユーザー',
      }
    },
    features: {
      title: '卓越した性能、磐石の安定性',
      subtitle: 'サーバーだけでなく、ビジネスの急成長を支える強固な基盤を提供します。',
      items: [
        { title: '高速ネットワーク', desc: 'グローバルBGP最適化回線、CN2 GIA直結でミリ秒単位の応答を保証。' },
        { title: '高性能計算力', desc: '最新世代のAMD EPYCプロセッサとNVMe SSDストレージアレイを採用。' },
        { title: 'セキュリティ', desc: '自社開発のDDoS洗浄システムで最大2Tbpsのトラフィック防御を提供。' },
        { title: 'グローバル展開', desc: '香港、日本、米国など世界24地域にデータセンターを展開。' },
        { title: '弾力性ストレージ', desc: 'ブロックストレージ、オブジェクトストレージに対応、データ多重化バックアップ。' },
        { title: '専門家サポート', desc: '24時間365日、技術専門家がオンラインでビジネスの課題を解決します。' },
      ]
    },
    pricing: {
      title: '透明な価格設定',
      subtitle: '個人ブログから企業向けアプリケーションまで、規模に応じたソリューション。',
      popular: '一番人気',
      month: '/月~',
      buy: '今すぐ購入',
      plans: [
        { name: 'スターター', desc: '個人ブログや小規模アプリ向け', features: ['1 vCPU', '2GB RAM', '40GB SSD', '1TB 転送量', '100Mbps 帯域'] },
        { name: 'プロ', desc: '中規模企業や高負荷ビジネス向け', features: ['4 vCPU', '8GB RAM', '160GB SSD', '5TB 転送量', '500Mbps 帯域', 'DDoS 基礎防御'] },
        { name: 'エンタープライズ', desc: '究極の性能、専用カスタマイズ', features: ['16 vCPU', '32GB RAM', '500GB SSD', '無制限転送量', '1Gbps 専有帯域', '高度 DDoS 防御', '24/7 専任アーキテクト'] },
      ]
    },
    network: {
      title_prefix: 'グローバルネットワーク、',
      title_suffix: 'すぐそこに',
      description: '世界の主要インターネットハブに高スペックデータセンターを配備。自社バックボーンとトップティアキャリアとの相互接続により、低遅延・広帯域な接続体験を提供します。',
      regions: [
        { name: 'アジア太平洋', cities: '香港、東京、ソウル、シンガポール、台北' },
        { name: '北米', cities: 'ロサンゼルス、サンノゼ、シアトル、ニューヨーク' },
        { name: 'ヨーロッパ', cities: 'ロンドン、フランクフルト、アムステルダム' },
      ]
    },
    faq: {
      title: 'よくある質問',
      subtitle: 'QBIT CLOUDに関する一般的な質問にお答えします。',
      items: [
        { q: 'どのような支払い方法がありますか？', a: 'アリペイ、WeChat Pay、クレジットカード、および主要な暗号資産に対応しています。' },
        { q: 'サーバーの開通までどのくらいかかりますか？', a: 'お支払い完了後、通常1〜5分以内に自動的にデプロイされ、メールが送信されます。' },
        { q: '返金は可能ですか？', a: '利用規約に基づき、セール品および納品済みのサーバーは原則として返金不可となります。' },
        { q: 'データの安全性はどのように確保されていますか？', a: 'マルチレプリカ冗長ストレージと自社開発のDDoS防御システムを採用しています。定期的な外部バックアップも推奨しています。' },
      ]
    },
    footer: {
      desc: 'QBIT CLOUDは、世界中のユーザーに最高品質のクラウドインフラサービスを提供することに尽力しています。',
      products: '製品サービス',
      support: 'サポート',
      subscribe: '購読する',
      subscribe_desc: 'メーリングリストに登録して、最新の製品情報や特典を受け取りましょう。',
      email_placeholder: 'メールアドレス',
      subscribe_btn: '登録',
      rights: '© 2026 QBIT CLOUD. ALL RIGHTS RESERVED.',
      privacy: 'プライバシーポリシー',
      tos: '利用規約',
      legal: '特定商取引法に基づく表記',
      links: {
        ecs: 'Elastic Compute ECS',
        metal: 'ベアメタルサーバー',
        oss: 'オブジェクトストレージ OSS',
        cdn: 'コンテンツ配信 CDN',
        docs: 'ドキュメントセンター',
        api: 'API リファレンス',
        sla: 'サービスレベル契約 (SLA)',
        status: '稼働状況',
      }
    }
  }
};
