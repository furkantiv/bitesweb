import { ProductContent } from "@/utils/types";

export const videoManagementSystemContent: ProductContent = {
  title: {
    en: "Video Management System",
    tr: "Video Yönetim Sistemi",
  },
  description: {
    en: "Video Management System, developed by BİTES for use in any vehicle, receives electro-optic and thermal video streams and displays them to the vehicle crew in near real time in the required format (stitched, by zone, or individually).",
    tr: "Her türlü araçta kullanılmak üzere BİTES tarafından geliştirilen Video Yönetim Sistemi, elektro-optik ve termal video akışlarını alır ve araç personeline gerekli formatta (birleştirilmiş, bölgesel veya tek tek) neredeyse gerçek zamanlı olarak gösterir.",
  },
  heroImageUrl:
    "/images/products/productpages/defence-information/video-management/video-management-1.png",
  sections: [
    {
      type: "feature",
      image:
        "/images/products/productpages/defence-information/video-management/video-management-2.png",
      heading: {
        en: "Situational Awareness in Vehicles",
        tr: "Araçlarda Durumsal Farkındalık",
      },
      content: {
        en: "Situational awareness at close range is provided by cameras deployed on the vehicle. The system delivers 'Video Stream Stitching' via image processing algorithms, moving object detection, and Picture-in-Picture capabilities.",
        tr: "Yakın mesafede durumsal farkındalık, araca entegre edilen kameralar ile sağlanır. Sistem; görüntü işleme algoritmaları ile 'Video Akışı Birleştirme', hareketli nesne tespiti ve Picture-in-Picture yetenekleri sunar.",
      },
      extra: {
        en: "If the deployed cameras supply 360-degree coverage, the stitched stream can be sent to Augmented Reality glasses, enabling the 'See Beyond Armor' capability.",
        tr: "Kameralar araca 360 derece kapsama sağlıyorsa, birleştirilmiş akış Artırılmış Gerçeklik gözlüğüne aktarılabilir ve 'Zırhın Ötesini Gör' yeteneği elde edilebilir.",
      },
    },

    {
      type: "grid",
      image:
        "/images/products/productpages/defence-information/video-management/video-management-3.png",
      heading: {
        en: "Features of Video Management System",
        tr: "Video Yönetim Sistemi Özellikleri",
      },
      features: {
        en: [
          "Video recording on demand",
          "Video/Image display according to authorization level",
          "Video streaming through analog converters",
          "IP-based video management, supporting streams in UDP, RTP, and RTSP",
          "Support for H264 and MJPEG",
          "Display of vehicle data via Ethernet and CANBus",
          "Video/data export",
        ],
        tr: [
          "Talebe bağlı video kaydı",
          "Yetki seviyesine göre video/görüntü gösterimi",
          "Analog dönüştürücüler ile video akışı",
          "UDP, RTP ve RTSP üzerinden akışları destekleyen IP tabanlı video yönetimi",
          "H264 ve MJPEG desteği",
          "Ethernet ve CANBus üzerinden araç verilerinin gösterimi",
          "Video/veri dışa aktarımı",
        ],
      },
    },
  ],
};
