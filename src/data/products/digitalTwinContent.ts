import { ProductContent } from "@/utils/types";

export const digitalTwinContent: ProductContent = {
  title: {
    en: "Digital Twin",
    tr: "Dijital İkiz",
  },
  description: {
    en: "Digital Twin, a virtual model of a product, process, or service. The main difference between Digital Twin and Simulation, which are generally confused, is that Digital Twin is fed with real-time sensor data collected from the physical environment.",
    tr: "Dijital İkiz, bir ürünün, sürecin veya hizmetin sanal bir modelidir. Dijital İkiz ile genellikle karıştırılan Simülasyon arasındaki temel fark; Dijital İkiz’in fiziksel ortamdan toplanan gerçek zamanlı sensör verileriyle beslenmesidir.",
  },
  heroImageUrl:
    "/images/products/productpages/technology-business/digital-twin/digital-twin-1.png",
  sections: [
    {
      type: "feature",
      image:
        "/images/products/productpages/technology-business/digital-twin/digital-twin-2.png",
      heading: {
        en: "Better Understanding, Better Decisions",
        tr: "Daha İyi Anlayış, Daha İyi Kararlar",
      },
      content: {
        en: "BİTES aims to develop a better decision-making process and create a digital twin platform as a service' to better understand the current situation.",
        tr: "BİTES, mevcut durumu daha iyi anlamak için daha iyi karar alma süreçleri geliştirmeyi ve hizmet olarak dijital ikiz platformu oluşturmayı hedeflemektedir.",
      },
      extra: {
        en: "",
        tr: "",
      },
    },
    {
      type: "grid",
      image:
        "/images/products/productpages/technology-business/digital-twin/digital-twin-3.png",
      heading: {
        en: "We aim to:",
        tr: "Hedeflerimiz:",
      },
      features: {
        en: [
          "Provide tailored solutions with respect to customer needs",
          "Prevent unexpected failures",
          "Present cost-effective model",
        ],
        tr: [
          "Müşteri ihtiyaçlarına yönelik özelleştirilmiş çözümler sunmak",
          "Beklenmeyen arızaların önüne geçmek",
          "Maliyet etkin model sunmak",
        ],
      },
    },
    {
      type: "reverseGrid",
      image:
        "/images/products/productpages/technology-business/digital-twin/digital-twin-2.png",
      heading: {
        en: "Benefits for End Users",
        tr: "Son Kullanıcıya Faydaları",
      },
      features: {
        en: [
          "Eliminate the need for different software architectures for each simulation model",
          "Prevent high costs, time, and effort requirements for each model",
        ],
        tr: [
          "Her bir simülasyon modeli için farklı yazılım mimarilerine olan ihtiyacı ortadan kaldırmak",
          "Her model için yüksek maliyet, zaman ve efor gereksinimini önlemek",
        ],
      },
    },

    {
      type: "grid",
      image:
        "/images/products/productpages/technology-business/digital-twin/digital-twin-3.png",
      heading: {
        en: "What is the innovation?",
        tr: "Yenilik Nedir?",
      },
      features: {
        en: [
          "Novel architecture for Digital Twins to run as-a-service",
          "Timeline-driven approach considering recorded past data to:",
          "Predict and rate multiple different future scenarios",
          "Re-evaluate past scenarios under modified conditions",
          "Improved prediction making using AI and simulation based on Digital Twin.",
        ],
        tr: [
          "Dijital İkizlerin hizmet olarak çalışmasını sağlayan yeni bir mimari.",
          "Kayıtlı geçmiş verileri dikkate alan zaman çizelgesi tabanlı yaklaşım:",
          "Farklı gelecek senaryolarını öngörüp derecelendirme",
          "Geçmiş senaryoları değişen koşullarda yeniden değerlendirme",
          "Dijital İkiz tabanlı simülasyon ve yapay zekâ ile geliştirilmiş öngörü kabiliyeti.",
        ],
      },
    },
  ],
};
