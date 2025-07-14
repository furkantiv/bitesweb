// news.ts
export type NewsType = {
  id: number;
  source: { en: string; tr: string };
  date: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  image: string[];
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
      en: "Mr. Ahmet Bahadır Bülbül and his accompanying delegation visited our company.",
      tr: "Sayın Ahmet Bahadır Bülbül ve beraberindeki heyet şirketimizi ziyaret etti.",
    },
    description: {
      en: "Mr. Ahmet Bahadır Bülbül, Head of the Cyber Security and Information Systems Department at the SSB - Savunma Sanayii Başkanlığı / Secretariat of Defence Industries , and his accompanying delegation visited our company.During the meeting, we presented our current projects and ongoing activities. We also discussed our future-oriented initiatives that aim to contribute to our defence industry under the leadership of the Secretariat of Defence Industries.We would like to extend our sincere thanks to Mr. BÜLBÜL and his team for their valuable visit.",
      tr: "SSB - Savunma Sanayii Başkanlığı / Secretariat of Defence Industries Siber Güvenlik ve Bilişim Sistemleri Daire Başkanı Sayın Ahmet Bahadır Bülbül 🇹🇷 🇵🇸 ve beraberindeki heyet şirketimizi ziyaret etti. Şirketimizin mevcut projelerini ve güncel faaliyetlerini aktardığımız toplantıda; Savunma Sanayii Başkanlığı liderliğinde, savunma sanayiimize katkı sağlayacak geleceğe yönelik çalışmalarımızı değerlendirdik. Değerli ziyaretleri için Sayın BÜLBÜL ve ekibine teşekkür ederiz..",
    },
    image: [
      "/images/news/1/85947d0d-1011-4cb8-a022-aed4d3cba4ca.jpg",
      "/images/news/1/fb55ddd7-9a01-4c49-ade0-7d09e72c81da.jpg",
    ],
    category: "defence",
    content: {
      en: "Mr. Ahmet Bahadır Bülbül, Head of the Cyber Security and Information Systems Department at the SSB - Savunma Sanayii Başkanlığı / Secretariat of Defence Industries , and his accompanying delegation visited our company.During the meeting, we presented our current projects and ongoing activities. We also discussed our future-oriented initiatives that aim to contribute to our defence industry under the leadership of the Secretariat of Defence Industries.We would like to extend our sincere thanks to Mr. BÜLBÜL and his team for their valuable visit.",
      tr: "SSB - Savunma Sanayii Başkanlığı / Secretariat of Defence Industries Siber Güvenlik ve Bilişim Sistemleri Daire Başkanı Sayın Ahmet Bahadır Bülbül ve beraberindeki heyet şirketimizi ziyaret etti. Şirketimizin mevcut projelerini ve güncel faaliyetlerini aktardığımız toplantıda; Savunma Sanayii Başkanlığı liderliğinde, savunma sanayiimize katkı sağlayacak geleceğe yönelik çalışmalarımızı değerlendirdik. Değerli ziyaretleri için Sayın BÜLBÜL ve ekibine teşekkür ederiz..",
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
      en: "Aselsan Konya Genel Müdürü Serhan ÖZSOY ofisimize ziyarette bulundu",
      tr: "Mr. Serhan ÖZSOY, General Manager of Aselsan Konya , visited our office.",
    },
    description: {
      en: "During the meeting, projects and sustainable solutions within the framework of advanced technologies shaping our future were discussed.",
      tr: "Görüşmede geleceğimizi etkileyen ileri teknolojiler çerçevesinde projeler ve sürdürülebilir çözümler ele alındı.",
    },
    image: ["/images/news/2/afea2e03-c7e5-45cc-9d81-044e248706cc.jpg"],
    category: "defence",
    content: {
      en: "Mr. Serhan ÖZSOY, General Manager of Aselsan Konya , visited our office.During the meeting, projects and sustainable solutions within the framework of advanced technologies shaping our future were discussed.We would like to thank Mr. ÖZSOY for his kind visit.",
      tr: "Aselsan Konya Genel Müdürü Serhan ÖZSOY ofisimize ziyarette bulundu. Görüşmede geleceğimizi etkileyen ileri teknolojiler çerçevesinde projeler ve sürdürülebilir çözümler ele alındı.Sayın ÖZSOY'a nazik ziyaretleri için teşekkür ederiz.",
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
      en: "Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey and his accompanying delegation visited our company.",
      tr: "T.C. Ulaştırma ve Altyapı Bakanlığı UDHAM Başkanlığı Strateji Daire Başkanı Sayın Faruk YILMAZ ve beraberindeki heyet şirketimizi ziyaret etti.",
    },
    description: {
      en: "Industry leaders gathered at the launch. The importance of defense technology was emphasized.",
      tr: "Lansmanda sektör liderleri bir araya geldi. Savunma teknolojisinin önemi vurgulandı.",
    },
    image: ["/images/news/3/0c1ed2c9-a076-4df6-b016-4cb7dc8f7897.jpg"],
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
    image: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    ],
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
