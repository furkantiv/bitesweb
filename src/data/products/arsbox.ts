import { ProductContent } from "@/utils/types";

export const augmentedRealitySandBoxContent: ProductContent = {
  title: {
    en: "Augmented Reality Sand Box",
    tr: "Artırılmış Gerçeklik Kum Kutusu",
  },
  description: {
    en: "Augmented Reality Sand Box enables the visualization of data from Command Control Information Systems in the three-dimensional holographic tactical field using NATO Vector Graphics (NVG) format with Augmented Reality glasses.",
    tr: "Artırılmış Gerçeklik Kum Kutusu, NATO Vektör Grafikleri (NVG) formatında veri sağlayabilen Komuta Kontrol Bilgi Sistemlerinden gelen verilerin Artırılmış Gerçeklik gözlükleriyle üç boyutlu holografik taktik sahada görselleştirilmesini sağlar.",
  },
  videoUrl: "/images/products/productpages/defence-information/sks/sks.mp4", // veya uygun bir görsel
  sections: [
    {
      type: "feature",
      image: "/images/products/productpages/defence-information/sks/sks-1.png",
      heading: {
        en: "Immersive Tactical Visualization",
        tr: "Sürükleyici Taktik Görselleştirme",
      },
      content: {
        en: "Augmented Reality Sand Box enables real-time 3D terrain and tactical data visualization through AR glasses. It supports dynamic NVG (NATO Vector Graphics) data and provides effective tactical development capability with holographic field display.",
        tr: "Artırılmış Gerçeklik Kum Kutusu, AR gözlüklerle gerçek zamanlı 3D arazi ve taktik veri görselleştirmesi sunar. Dinamik NVG (NATO Vektör Grafikleri) verisiyle desteklenir ve holografik saha gösterimiyle etkili taktik geliştirme kabiliyeti sağlar.",
      },
      extra: {
        en: "The system is portable and can be used at all command levels and training environments. Situation assessments for past operations and live C2IS (Command and Control Information Systems) integration are also supported.",
        tr: "Taşınabilir yapısı sayesinde tüm seviyedeki karargah ve eğitim ortamlarında kullanılabilir. Geçmiş operasyonlar için analizler ve durum değerlendirmeleri, canlı Komuta Kontrol Bilgi Sistemi (C2IS) entegrasyonu da desteklenir.",
      },
    },

    {
      type: "infoGrid",
      image: "",
      heading: {
        en: "Augmented Reality Sand Box at a Glance",
        tr: "Artırılmış Gerçeklik Kum Kutusu Genel Özellikler",
      },
      columns: {
        en: [
          {
            title: "Modern Tactical Development Tool",
            items: [
              "Operational planning and execution tracking in tactical areas",
              "Live C2IS Integration",
              "Portable design for use in any headquarters or training environment",
            ],
          },
          {
            title: "Interactive Visualization",
            items: [
              "Dynamic 3D field information (NVG data) and terrain display",
              "Multiple user support",
              "“Spectator Mode” for monitoring operations externally",
            ],
          },
          {
            title: "Effective Training & Assessment",
            items: [
              "Situation analysis and assessment for past operations",
              "Enables hands-on exploration and tactical experimentation",
              "Visualizes terrain and overland information as 3D holograms",
            ],
          },
        ],
        tr: [
          {
            title: "Modern Taktik Geliştirme Aracı",
            items: [
              "Taktik alanda operasyon planlama ve icra takibi",
              "Canlı C2IS Entegrasyonu",
              "Her seviyede karargah ve eğitim ortamında kullanılabilen taşınabilir yapı",
            ],
          },
          {
            title: "Etkileşimli Görselleştirme",
            items: [
              "Dinamik 3D saha bilgisi (NVG verisi) ve arazi gösterimi",
              "Çoklu kullanıcı desteği",
              "Dışarıdan operasyon takibi için 'Seyirci Modu'",
            ],
          },
          {
            title: "Eğitim ve Değerlendirme",
            items: [
              "Geçmiş operasyonlar için durum analizi ve değerlendirme",
              "Uygulamalı keşif ve taktik denemeleri için ideal",
              "Arazi ve üstyapı bilgilerini 3D hologram olarak sunar",
            ],
          },
        ],
      },
    },
    {
      type: "split",
      image: "/images/products/productpages/defence-information/sks/sks-2.png",
      title: {
        en: "How Does It Work?",
        tr: "Nasıl Çalışır?",
      },
      heading: {
        en: "The system consists of a sand box, depth sensor, and projector. Real-time sand surface data is processed and projected as topographic lines and color-coded heights, while AR glasses provide dynamic 3D holographic visualization.",
        tr: "Sistem; bir kum kutusu, derinlik sensörü ve projeksiyondan oluşur. Gerçek zamanlı kum yüzeyi verileri işlenerek topoğrafik çizgiler ve renk kodlu yükseklikler olarak yansıtılır, AR gözlüklerle dinamik 3D holografik görselleştirme sağlanır.",
      },
      features: {
        en: [
          "Dynamic topographic map projection",
          "Instant water flow and terrain simulation",
          "User-friendly and portable system",
          "Multi-user support and scenario flexibility",
        ],
        tr: [
          "Dinamik topoğrafik harita projeksiyonu",
          "Anında su akışı ve arazi simülasyonu",
          "Kullanıcı dostu ve taşınabilir sistem",
          "Çoklu kullanıcı ve senaryo esnekliği",
        ],
      },
    },
  ],
};
