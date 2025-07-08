// news.ts
export type NewsType = {
  id: number;
  source: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
};

export const newsList: NewsType[] = [
  {
    id: 1,
    source: "Bites News",
    date: "23 September, 2025",
    title: "Faruk YILMAZ'dan Bites Ziyareti",
    description:
      "Faruk YILMAZ ve ekibi, Bites'te dijital dönüşüm odaklı bir etkinliğe katıldı. Gelecek stratejileri ele alındı.",
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=240&fit=crop&crop=center",
    category: "bites",
    content: `
      Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey, visited BITES with a large delegation. The event focused on digital transformation and the future strategies of the company, highlighting innovation in public sector technology. The panel session discussed challenges and upcoming projects of the digital era, sharing valuable insights to shape the technological landscape. This visit marks a milestone in our ongoing journey towards excellence and innovation.
    `,
  },
  {
    id: 2,
    source: "Bites News",
    date: "23 September, 2025",
    title: "10 Ocak Gazeteciler Günü Kutlandı",
    description:
      "Değerli basın mensuplarımızın 10 Ocak Gazeteciler Günü'nü kutluyoruz. Topluma bilgi akışını sağlayan tüm gazetecilere teşekkür ederiz.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=240&fit=crop&crop=center",
    category: "bites",
    content: `
      We celebrate the 10th of January Journalists' Day for our valuable press members. Their tireless effort and commitment ensure access to information and support freedom of speech and democracy. We thank all journalists for their dedication and integrity in the face of ever-changing media landscapes.
    `,
  },
  {
    id: 3,
    source: "Defence News",
    date: "23 September, 2025",
    title: "Flag Rises in New Tech!",
    description:
      "Lansmanda sektör liderleri bir araya geldi. Savunma teknolojisinin önemi vurgulandı.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=240&fit=crop&crop=center",
    category: "defence",
    content: `
      The launch event for "Flag Rises in New Tech!" brought together industry leaders, government officials, and innovators. It was a groundbreaking day with announcements, workshops, and networking, emphasizing the critical role of defense technology in national security and economic growth.
    `,
  },
  {
    id: 4,
    source: "Tech News",
    date: "23 September, 2025",
    title: "2025'in Yapay Zeka ve VR Trendleri",
    description:
      "Yeni nesil AI ve VR, iş ve toplumu dönüştürüyor. Yenilik ve etik için yeni fırsatlar ve zorluklar ortaya çıkıyor.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
    content: `
      2025'in AI ve VR trendleri, insan-bilgisayar etkileşimini, eğitimi ve eğlenceyi dönüştürüyor. Yeni potansiyeller ortaya çıkarken, inovasyon ve etik konusunda da yeni tartışmalar baş gösteriyor. Bu teknolojiler, toplumu ve iş dünyasını şekillendiriyor.
    `,
  },
  {
    id: 5,
    source: "Tech News",
    date: "23 September, 2025",
    title: "2025'in Yapay Zeka ve VR Trendleri",
    description:
      "AI ve VR, geleceğin iş ve yaşamını dönüştürüyor. İnovasyon ve etik konularında yeni adımlar atılıyor.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
    content: `
      AI and VR are transforming the future of work, entertainment, and society at large. These next-generation technologies bring both opportunities for innovation and challenges for ethics, impacting every aspect of our lives.
    `,
  },
  {
    id: 6,
    source: "Tech News",
    date: "23 September, 2025",
    title: "2025'in Yapay Zeka ve VR Trendleri",
    description:
      "AI ve VR, geleceğin iş ve yaşamını dönüştürüyor. İnovasyon ve etik konularında yeni adımlar atılıyor.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
    content: `
      AI and VR are transforming the future of work, entertainment, and society at large. These next-generation technologies bring both opportunities for innovation and challenges for ethics, impacting every aspect of our lives.
    `,
  },
];
