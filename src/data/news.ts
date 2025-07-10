// news.ts
export type NewsType = {
  id: number;
  source: { en: string; tr: string };
  date: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  image: string;
  category: string;
  content: { en: string; tr: string };
};

export const newsList: NewsType[] = [
  {
    id: 1,
    source: {
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "23 September, 2025",
    title: {
      en: "Faruk YILMAZ visited Bites",
      tr: "Faruk YILMAZ'dan Bites Ziyareti",
    },
    description: {
      en: "Faruk YILMAZ and his team attended an event focused on digital transformation at Bites. Future strategies were discussed.",
      tr: "Faruk YILMAZ ve ekibi, Bites'te dijital dönüşüm odaklı bir etkinliğe katıldı. Gelecek stratejileri ele alındı.",
    },
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=240&fit=crop&crop=center",
    category: "bites",
    content: {
      en: `
        Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey, visited BITES with a large delegation. The event focused on digital transformation and the future strategies of the company, highlighting innovation in public sector technology. The panel session discussed challenges and upcoming projects of the digital era, sharing valuable insights to shape the technological landscape. This visit marks a milestone in our ongoing journey towards excellence and innovation.
      `,
      tr: `
        Ulaştırma ve Altyapı Bakanlığı UDHAM Başkanlığı Strateji Daire Başkanı Sn. Faruk YILMAZ ve ekibi, BİTES'i geniş bir heyetle ziyaret etti. Etkinlikte dijital dönüşüm ve şirketin gelecek stratejileri ele alındı. Panelde dijital çağın getirdiği zorluklar ve yeni projeler konuşuldu. Bu ziyaret, mükemmellik ve yenilik yolculuğumuzda önemli bir kilometre taşı oldu.
      `,
    },
  },
  {
    id: 2,
    source: {
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "23 September, 2025",
    title: {
      en: "10 January Journalists' Day Celebrated",
      tr: "10 Ocak Gazeteciler Günü Kutlandı",
    },
    description: {
      en: "We celebrate the 10th of January Journalists' Day for our valuable press members. Thanks to all journalists.",
      tr: "Değerli basın mensuplarımızın 10 Ocak Gazeteciler Günü'nü kutluyoruz. Tüm gazetecilere teşekkür ederiz.",
    },
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=240&fit=crop&crop=center",
    category: "bites",
    content: {
      en: `
        We celebrate the 10th of January Journalists' Day for our valuable press members. Their tireless effort and commitment ensure access to information and support freedom of speech and democracy. We thank all journalists for their dedication and integrity in the face of ever-changing media landscapes.
      `,
      tr: `
        Değerli basın mensuplarımızın 10 Ocak Gazeteciler Günü'nü kutluyoruz. Özverili çalışmaları sayesinde toplum bilgiye ulaşabiliyor, ifade özgürlüğü ve demokrasi güçleniyor. Değişen medya ortamında gösterdikleri özveri ve dürüstlük için tüm gazetecilere teşekkür ederiz.
      `,
    },
  },
  {
    id: 3,
    source: {
      en: "Defence News",
      tr: "Savunma Haberleri",
    },
    date: "23 September, 2025",
    title: {
      en: "Flag Rises in New Tech!",
      tr: "Yeni Teknolojide Bayrak Yükseliyor!",
    },
    description: {
      en: "Industry leaders gathered at the launch. The importance of defense technology was emphasized.",
      tr: "Lansmanda sektör liderleri bir araya geldi. Savunma teknolojisinin önemi vurgulandı.",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=240&fit=crop&crop=center",
    category: "defence",
    content: {
      en: `
        The launch event for "Flag Rises in New Tech!" brought together industry leaders, government officials, and innovators. It was a groundbreaking day with announcements, workshops, and networking, emphasizing the critical role of defense technology in national security and economic growth.
      `,
      tr: `
        "Yeni Teknolojide Bayrak Yükseliyor!" lansman etkinliğinde sektör liderleri, devlet yetkilileri ve yenilikçiler bir araya geldi. Duyurular, atölyeler ve ağ oluşturma ile dolu gün, savunma teknolojisinin ulusal güvenlik ve ekonomik büyümedeki kritik rolüne dikkat çekti.
      `,
    },
  },
  {
    id: 4,
    source: {
      en: "Tech News",
      tr: "Teknoloji Haberleri",
    },
    date: "23 September, 2025",
    title: {
      en: "2025's AI and VR Trends",
      tr: "2025'in Yapay Zeka ve VR Trendleri",
    },
    description: {
      en: "The new generation of AI and VR is transforming work and society. New opportunities and challenges arise for innovation and ethics.",
      tr: "Yeni nesil AI ve VR, iş ve toplumu dönüştürüyor. Yenilik ve etik için yeni fırsatlar ve zorluklar ortaya çıkıyor.",
    },
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
    content: {
      en: `
        2025's AI and VR trends are transforming human-computer interaction, education, and entertainment. New potentials are emerging, and discussions on innovation and ethics are gaining momentum. These technologies are shaping society and business.
      `,
      tr: `
        2025'in AI ve VR trendleri, insan-bilgisayar etkileşimini, eğitimi ve eğlenceyi dönüştürüyor. Yeni potansiyeller ortaya çıkarken, inovasyon ve etik konusunda da yeni tartışmalar baş gösteriyor. Bu teknolojiler, toplumu ve iş dünyasını şekillendiriyor.
      `,
    },
  },
  // ... Devamı aynı mantıkla
];

//   id: 1,
//   source: "Bites News",
//   date: "23 September, 2025",
//   title: "Faruk YILMAZ'dan Bites Ziyareti",
//   description:
//     "Faruk YILMAZ ve ekibi, Bites'te dijital dönüşüm odaklı bir etkinliğe katıldı. Gelecek stratejileri ele alındı.",
//   image:
//     "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=240&fit=crop&crop=center",
//   category: "bites",
//   content: `
//     Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey, visited BITES with a large delegation. The event focused on digital transformation and the future strategies of the company, highlighting innovation in public sector technology. The panel session discussed challenges and upcoming projects of the digital era, sharing valuable insights to shape the technological landscape. This visit marks a milestone in our ongoing journey towards excellence and innovation.
//   `,
// },
// {
//   id: 2,
//   source: "Bites News",
//   date: "23 September, 2025",
//   title: "10 Ocak Gazeteciler Günü Kutlandı",
//   description:
//     "Değerli basın mensuplarımızın 10 Ocak Gazeteciler Günü'nü kutluyoruz. Topluma bilgi akışını sağlayan tüm gazetecilere teşekkür ederiz.",
//   image:
//     "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=240&fit=crop&crop=center",
//   category: "bites",
//   content: `
//     We celebrate the 10th of January Journalists' Day for our valuable press members. Their tireless effort and commitment ensure access to information and support freedom of speech and democracy. We thank all journalists for their dedication and integrity in the face of ever-changing media landscapes.
//   `,
// },
// {
//   id: 3,
//   source: "Defence News",
//   date: "23 September, 2025",
//   title: "Flag Rises in New Tech!",
//   description:
//     "Lansmanda sektör liderleri bir araya geldi. Savunma teknolojisinin önemi vurgulandı.",
//   image:
//     "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=240&fit=crop&crop=center",
//   category: "defence",
//   content: `
//     The launch event for "Flag Rises in New Tech!" brought together industry leaders, government officials, and innovators. It was a groundbreaking day with announcements, workshops, and networking, emphasizing the critical role of defense technology in national security and economic growth.
//   `,
// },
// {
//   id: 4,
//   source: "Tech News",
//   date: "23 September, 2025",
//   title: "2025'in Yapay Zeka ve VR Trendleri",
//   description:
//     "Yeni nesil AI ve VR, iş ve toplumu dönüştürüyor. Yenilik ve etik için yeni fırsatlar ve zorluklar ortaya çıkıyor.",
//   image:
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
//   category: "tech",
//   content: `
//     2025'in AI ve VR trendleri, insan-bilgisayar etkileşimini, eğitimi ve eğlenceyi dönüştürüyor. Yeni potansiyeller ortaya çıkarken, inovasyon ve etik konusunda da yeni tartışmalar baş gösteriyor. Bu teknolojiler, toplumu ve iş dünyasını şekillendiriyor.
//   `,
// },
// {
//   id: 5,
//   source: "Tech News",
//   date: "23 September, 2025",
//   title: "2025'in Yapay Zeka ve VR Trendleri",
//   description:
//     "AI ve VR, geleceğin iş ve yaşamını dönüştürüyor. İnovasyon ve etik konularında yeni adımlar atılıyor.",
//   image:
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
//   category: "tech",
//   content: `
//     AI and VR are transforming the future of work, entertainment, and society at large. These next-generation technologies bring both opportunities for innovation and challenges for ethics, impacting every aspect of our lives.
//   `,
// },
// {
//   id: 6,
//   source: "Tech News",
//   date: "23 September, 2025",
//   title: "2025'in Yapay Zeka ve VR Trendleri",
//   description:
//     "AI ve VR, geleceğin iş ve yaşamını dönüştürüyor. İnovasyon ve etik konularında yeni adımlar atılıyor.",
//   image:
//     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
//   category: "tech",
//   content: `
//     AI and VR are transforming the future of work, entertainment, and society at large. These next-generation technologies bring both opportunities for innovation and challenges for ethics, impacting every aspect of our lives.
//   `,
// },
