import { ProductContent } from "@/utils/types";

export const embeddedSimulationContent: ProductContent = {
  title: {
    en: "Embedded Simulations",
    tr: "Gömülü Simülasyonlar",
  },
  description: {
    en: "Advanced simulation solutions for defense and training systems, including scenario creation, control, and hardware integration.",
    tr: "Senaryo oluşturma, kontrol ve donanım entegrasyonu dahil olmak üzere savunma ve eğitim sistemleri için gelişmiş simülasyon çözümleri.",
  },
  videoUrl: "",
  sections: [
    {
      type: "table",
      image: "/images/products/embedded-training-system.png",
      heading: {
        en: "Projects",
        tr: "Projeler",
      },
      columns: [
        { title: { en: "Project", tr: "Proje" }, dataKey: "project" },
        { title: { en: "Customer", tr: "Müşteri" }, dataKey: "customer" },
      ],
      data: [
        {
          project: {
            en: "ALTAY Tank Crew Training System",
            tr: "ALTAY Tankı Mürettebat Eğitim Sistemi",
          },
          customer: { en: "ASELSAN", tr: "ASELSAN" },
        },
        {
          project: {
            en: "SARP Remote Controlled Weapon System Simulator",
            tr: "SARP Uzaktan Kumandalı Silah Sistemi Simülatörü",
          },
          customer: { en: "ASELSAN", tr: "ASELSAN" },
        },
        {
          project: {
            en: "KMC Remote Controlled Weapon System Simulator",
            tr: "KMC Uzaktan Kumandalı Silah Sistemi Simülatörü",
          },
          customer: { en: "ROKETSAN", tr: "ROKETSAN" },
        },
        {
          project: {
            en: "ALKAR Mortar Weapon System Simulator",
            tr: "ALKAR Havan Silah Sistemi Simülatörü",
          },
          customer: { en: "ASELSAN", tr: "ASELSAN" },
        },
      ],
    },

    {
      type: "infoGrid",
      features: {
        en: "Features",
        tr: "Özellikler",
      },
      heading: {
        en: "",
        tr: "",
      },
      columns: {
        en: [
          {
            title: "",
            items: [
              "Animated Training Material",
              "Three-Dimensional Training Material",
              "3D Illustrated Parts Catalogue",
              "User, Exam, Fault Diagnosis and Troubleshooting, Maintenance and Repair Module",
            ],
          },
          {
            title: "",
            items: [
              "Interactive Content",
              "Engaging Content",
              "Scenario Creation and Control Software",
            ],
          },
        ],
        tr: [
          {
            title: "",
            items: [
              "Animasyonlu Eğitim Materyali",
              "Üç Boyutlu Eğitim Materyali",
              "Üç Boyutlu Resimli Parça Kataloğu",
              "Kullanıcı, Sınav, Arıza Belirleme ve Giderme, Bakım ve Onarım Modülü",
            ],
          },
          {
            title: "",
            items: [
              "İnteraktif İçerikler",
              "Etkileşimli İçerikler",
              "Senaryo Oluşturma ve Kontrol Yazılımı",
            ],
          },
        ],
      },
    },
  ],
};
