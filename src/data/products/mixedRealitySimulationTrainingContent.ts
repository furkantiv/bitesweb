import { ProductContent } from "@/utils/types";

export const mixedRealitySimulationTrainingContent: ProductContent = {
  title: {
    en: "Mixed Reality Simulation Training",
    tr: "Karma Gerçeklik Simülasyon Eğitimi",
  },
  description: {
    tr: "Karma gerçeklik simülasyon eğitim çözümlerimiz, yeni nesil eğitim ihtiyaçları için esnek, entegre ve yenilikçi teknolojiler sunar.",
    en: "Our mixed reality simulation training solutions provide flexible, integrated, and innovative technologies for next-generation training needs.",
  },
  videoUrl: "",
  sections: [
    // TABLO KISMI
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
            tr: "GÖKBEY Uçuş Simülatörü",
            en: "GÖKBEY Flight Simulator",
          },
          customer: {
            tr: "ASELSAN",
            en: "ASELSAN",
          },
        },
        {
          project: {
            tr: "Telsiz Kullanım Eğitimi VR",
            en: "Radio Operation Training VR",
          },
          customer: {
            tr: "ASELSAN",
            en: "ASELSAN",
          },
        },
        {
          project: {
            tr: "ATAK Helikopteri XR Bakım Eğitimi",
            en: "ATAK Helicopter XR Maintenance Training",
          },
          customer: {
            tr: "HAVELSAN",
            en: "HAVELSAN",
          },
        },
        {
          project: {
            tr: "Motor Tanıtım ve Bakım",
            en: "Engine Introduction and Maintenance",
          },
          customer: {
            tr: "Deniz Meslek Y.O.\nBMC POWER",
            en: "Deniz Vocational School\nBMC POWER",
          },
        },
        {
          project: {
            tr: "MİLGEM 6-12 SGTES",
            en: "MİLGEM 6-12 SGTES",
          },
          customer: {
            tr: "ASELSAN",
            en: "ASELSAN",
          },
        },
      ],
    },
    // MADDELER (INFOGRID)
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
              "Scenario and Control Module",
              "Image Generator",
              "• Environment and 3D Models",
              "Audio and Visual Guidance",
              "Data Recording",
              "Instructor Console Software",
            ],
          },
          {
            title: "",
            items: [
              "Reporting and Evaluation Module",
              "VR/XR/MR/AR System Integration",
              "Hardware Integration",
              "MirrorLink",
              "Multi-User Support",
            ],
          },
        ],
        tr: [
          {
            title: "",
            items: [
              "Senaryo ve Kontrol Modülü",
              "Görüntü Üretici",
              "• Ortam ve 3B Modeller",
              "Sesli ve Görsel Yönlendirme",
              "Veri Kayıt",
              "Eğitmen Konsol Yazılımı",
            ],
          },
          {
            title: "",
            items: [
              "Raporlama ve Değerlendirme Modülü",
              "VR/XR/MR/AR Sistem Entegrasyonu",
              "Donanım Entegrasyonu",
              "MirrorLink",
              "Çoklu Kullanıcı Desteği",
            ],
          },
        ],
      },
    },
  ],
};
