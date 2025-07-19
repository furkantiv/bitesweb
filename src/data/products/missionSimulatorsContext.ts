import { ProductContent } from "@/utils/types";

export const missionSimulatorsContext: ProductContent = {
  title: {
    en: "Mission Simulators",
    tr: "Görev Simülatörleri",
  },
  description: {
    tr: "Görev simülatörlerimiz, gerçekçi eğitim ve analiz için gelişmiş yazılım ve donanım entegrasyonu sunar.",
    en: "Our mission simulators offer advanced software and hardware integration for realistic training and analysis.",
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
            tr: "Atış Eğitim Simülatörü",
            en: "Shooting Training Simulator",
          },
          customer: {
            tr: "Sahil Güvenlik Okulu",
            en: "Coast Guard School",
          },
        },
        {
          project: {
            tr: "MANPAD Eğitim Simülatörü",
            en: "MANPAD Training Simulator",
          },
          customer: {
            tr: "ASELSAN",
            en: "ASELSAN",
          },
        },
        {
          project: {
            tr: "STA Nişancı Simülatörü",
            en: "STA Gunner Simulator",
          },
          customer: {
            tr: "FNSS",
            en: "FNSS",
          },
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
              "Scenario Creation and Control Software",
              "Tactical Environment Software",
              "Image Generation Software",
              "Terrain and 3D Models",
              "Aerodynamic, Physical and Mathematical Modeling",
              "Ballistic Modeling",
            ],
          },
          {
            title: "",
            items: [
              "Fire Control Software",
              "Environmental Sound and Communication Simulation",
              "Data Recording and Playback Software",
              "Reporting",
              "Hardware Integration",
              "CAN BUS\n• RS 422/485 etc.\n• IR Laser System\n• Simulated Weapon with CO2 and Electric Support",
            ],
          },
        ],
        tr: [
          {
            title: "",
            items: [
              "Senaryo Oluşturma ve Kontrol Yazılımı",
              "Taktik Çevre Yazılımı",
              "Görüntü Üretici Yazılımı",
              "Arazi ve 3B Modeller",
              "Aerodinamik, Fiziksel ve Matematiksel Modelleme",
              "Balistik Modelleme",
            ],
          },
          {
            title: "",
            items: [
              "Atış Kontrol Yazılımı",
              "Çevresel Ses ve Haberleşme Simülasyonu",
              "Veri Kayıt ve Tekrar Oynatma Yazılımı",
              "Raporlama",
              "Donanım Entegrasyonu",
              "CAN BUS\n• RS 422/485 vb\n• IR Lazer Sistemi\n• CO2 ve Elektrik Destekli Simüle Silah",
            ],
          },
        ],
      },
    },
  ],
};
