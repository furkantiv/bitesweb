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
    date: "23 Sep 2025",
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
    date: "23 Sep 2025",
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
    date: "23 Sep 2025",
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
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "12 May 2025",
    title: {
      en: "Happy Mother's Day to all our mothers!",
      tr: "Tüm annelerimizin #AnnelerGünü kutlu olsun.",
    },
    description: {
      en: "Happy Mother’s Day to all our mothers who enlighten our path with their love, add value to our lives with their endless effort and devotion.",
      tr: "Sevgi ve şefkatiyle yolumuzu aydınlatan; sonsuz emekleri ve özverileriyle hayatımıza değer katan tüm annelerimizin #AnnelerGünü kutlu olsun.",
    },
    image: ["/images/news/4/anne.jpg"],
    category: "bites",
    content: {
      en: "Wishing a Happy Mother’s Day to all our mothers who enlighten our lives with their love and add value to our lives with their endless effort and devotion.",
      tr: "Sevgi ve şefkatiyle yolumuzu aydınlatan; sonsuz emekleri ve özverileriyle hayatımıza değer katan tüm annelerimizin #AnnelerGünü kutlu olsun.",
    },
  },
  {
    id: 5,
    source: {
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "25 May 2025",
    title: {
      en: 'We were at the "Avionics and Artificial Intelligence" Panel at IEEE ICHORA 2025!',
      tr: "IEEE ICHORA 2025 Konferansı’nda “Aviyonik ve Yapay Zeka” Panelindeydik!",
    },
    description: {
      en: "At the conference held in Ankara on May 24–25, we presented on mission optimization, digital twin applications, and AI in testing processes. Special thanks to Dr. Ali Berkol, Uğur Topak, and İdil Gökçe Demirtaş for their contributions.",
      tr: "24–25 Mayıs tarihlerinde Ankara’da düzenlenen konferansta; görev optimizasyonu, dijital ikiz uygulamaları ve test süreçlerinde yapay zeka kullanımını ele aldığımız sunumlarla yer aldık. Dr. Ali Berkol, Uğur Topak ve İdil Gökçe Demirtaş’a katkıları için teşekkür ederiz.",
    },
    image: [
      "/images/news/5/ichora.jpg",
      "/images/news/5/ichora2.jpg",
      "/images/news/5/ichora3.jpg",
      "/images/news/5/ichora4.jpg",
    ],
    category: "ai",
    content: {
      en: "At IEEE ICHORA 2025, we took part in the 'Avionics and Artificial Intelligence' panel, presenting our work on mission optimization, digital twin applications, and the use of artificial intelligence in testing processes. We would like to thank Dr. Ali Berkol, Uğur Topak, and İdil Gökçe Demirtaş for their valuable contributions.",
      tr: "IEEE ICHORA 2025 Konferansı’nda “Aviyonik ve Yapay Zeka” Panelindeydik! Görev optimizasyonu, dijital ikiz uygulamaları ve test süreçlerinde yapay zeka kullanımını ele aldığımız sunumlarla yer aldık. Dr. Ali Berkol, Uğur Topak ve İdil Gökçe Demirtaş’a katkıları için teşekkür ederiz.",
    },
  },
  {
    id: 6,
    source: {
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "25 May 2025",
    title: {
      en: "Children met technology at the event by the Ministry of Family and Social Services!",
      tr: "Aile ve Sosyal Hizmetler Bakanlığı Çocuk Evleri Koordinasyon Merkezi Müdürlüğü tarafından düzenlenen etkinlikte çocuklarımız teknolojiyle buluştu!",
    },
    description: {
      en: "We look forward to reuniting with all our children who explored and experienced technology at the event organized by the Ministry of Family and Social Services.",
      tr: "Teknolojiyi keşfeden ve deneyimleyen tüm çocuklarımızla yeniden bir araya gelmek için sabırsızlanıyoruz.",
    },
    image: [
      "/images/news/6/aile.jpg",
      "/images/news/6/aile2.jpg",
      "/images/news/6/aile3.jpg",
      "/images/news/6/aile4.jpg",
    ],
    category: "social",
    content: {
      en: "At the event organized by the Children's Homes Coordination Center Directorate of the Ministry of Family and Social Services, our children had the opportunity to explore and experience technology. We look forward to meeting all our children again soon.",
      tr: "Aile ve Sosyal Hizmetler Bakanlığı Çocuk Evleri Koordinasyon Merkezi Müdürlüğü tarafından düzenlenen etkinlikte çocuklarımız teknolojiyle buluştu! Teknolojiyi keşfeden ve deneyimleyen tüm çocuklarımızla yeniden bir araya gelmek için sabırsızlanıyoruz.",
    },
  },
  {
    id: 7,
    source: {
      en: "Bites News",
      tr: "Bites Haberleri",
    },
    date: "28 May 2025",
    title: {
      en: "We attended #Risk’25 organized by Optimum Club at Manisa Celal Bayar University.",
      tr: "Manisa Celal Bayar Üniversitesi’nde Optimum Kulüp tarafından gerçekleştirilen #Risk’25 etkinliğine katılım sağladık.",
    },
    description: {
      en: "On the first day, our General Manager Cemil Sağıroğlu discussed risk factors in business life, gave advice to young people, and introduced our company.",
      tr: "Etkinliğin ilk gününde konuşma yapan Genel Müdürümüz Cemil Sağıroğlu iş hayatındaki risk faktörlerine değindi, gençlere tavsiyelerde bulundu ve son olarak şirketimizi tanıttı.",
    },
    image: [
      "/images/news/7/riks1.jpg",
      "/images/news/7/risk2.jpg",
      "/images/news/7/risk3.jpg",
      "/images/news/7/risk4.jpg",
    ],
    category: "event",
    content: {
      en: "We participated in #Risk’25, organized by the Optimum Club at Manisa Celal Bayar University on May 27-28. On the first day, our General Manager Cemil Sağıroğlu spoke about risk factors in business life, offered advice to the youth, and introduced our company. We would like to thank everyone who contributed to this event that brought us together with young people. See you again!",
      tr: "27-28 Mayıs tarihlerinde Manisa Celal Bayar Üniversitesi’nde Optimum Kulüp tarafından gerçekleştirilen #Risk’25 etkinliğine katılım sağladık. Etkinliğin ilk gününde konuşma yapan Genel Müdürümüz Cemil Sağıroğlu iş hayatındaki risk faktörlerine değindi, gençlere tavsiyelerde bulundu ve son olarak şirketimizi tanıttı. Bizleri gençlerle buluşturan etkinlikte emeği geçen herkese teşekkür ederiz. Tekrar görüşmek üzere…",
    },
  },
];
