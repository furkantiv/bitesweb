import { ProductContent } from "@/utils/types";

export const troubleshootingMaintenanceContext: ProductContent = {
  title: {
    en: "Troubleshooting and Maintenance Simulation Systems",
    tr: "Sorun Giderme ve Bakım Simülasyon Sistemleri",
  },
  description: {
    en: "Advanced simulation solutions for repair and maintenance systems, including troubleshooting, control, and hardware integration.",
    tr: "Sorun çözme, kontrol ve donanım entegrasyonu dahil olmak üzere onarım ve bakım sistemleri için gelişmiş simülasyon çözümleri.",
  },
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
            tr: "SERDAR Silah Sistemi Arızacılık ve Bakım",
            en: "SERDAR Weapon System Maintenance and Repair",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "DRAGONEYE Etkileşimli ve Animasyonlu Eğitim Materyali",
            en: "DRAGONEYE Interactive and Animated Training Material",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "COUGAR, TESİM",
            en: "COUGAR, TESIM",
          },
          customer: { tr: "HAVELSAN", en: "HAVELSAN" },
        },
        {
          project: {
            tr: "ZMA Arızacılık ve Bakım Sistemi",
            en: "ZMA Maintenance and Repair System",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "SİPER Sanal Arızacılık Eğitim Sistemi",
            en: "SIPER Virtual Maintenance Training System",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "ALKAR Etkileşimli ve Animasyonlu Eğitim Materyali",
            en: "ALKAR Interactive and Animated Training Material",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "GÖKDENİZ Etkileşimli ve Animasyonlu Eğitim Materyali",
            en: "GOKDENIZ Interactive and Animated Training Material",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
        },
        {
          project: {
            tr: "HİSAR-O Etkileşimli ve Animasyonlu Eğitim Materyali",
            en: "HISAR-O Interactive and Animated Training Material",
          },
          customer: { tr: "ASELSAN", en: "ASELSAN" },
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
              "Three-Dimensional Illustrated Parts Catalogue",
              "User, Exam, Fault Detection and Troubleshooting, Maintenance and Repair Module",
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
