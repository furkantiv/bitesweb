import { ProductContent } from "@/utils/types";

export const brightsightContent: ProductContent = {
  title: {
    en: "Brightsight",
    tr: "Brightsight",
  },
  description: {
    en: "Bright Sight provides 360-degree situational awareness to the crew in the Armored Vehicle in the tactical area.",
    tr: "Elektro Optik Zırh Ötesi Görüş Sistemi sayesinde zırhlı araç içindeki mürettebata taktik sahada 360⁰ durumsal farkındalık imkânı sağlanmaktadır.",
  },
  videoUrl:
    "/images/products/productpages/defence-information/bright-sight/zırh-otesi.mp4", // veya uygun görsel/video yolu
  sections: [
    {
      type: "feature",
      image:
        "/images/products/productpages/defence-information/bright-sight/zırh-otesi-1.png",
      heading: {
        en: "Augmented situational awareness by integrating to the deployed system on the vehicle",
        tr: "Araç İçerisindeki Sistemlerle Entegrasyon ile Artırılmış Durumsal Farkındalık",
      },
      content: {
        en: "Bright Sight is capable of working with the current systems deployed on the vehicle. System provides tactical advantage to the personnel by visualizing the information gathered from the systems that can supply interfaces.",
        tr: "Zırhlı araçlarda bulunan tüm sistemlerle veri alışverişinde bulunabilen Zırh Ötesi Görüş Sistemi, yakın mesafe gözetleme sisteminden alınan 360⁰ elektro-optik ve termal kamera görüntülerini, Komuta Kontrol Sistemlerinden alınan harekât bilgileri ve araç içi sistemlerden alınan coğrafi referanslı veriler ile zenginleştirmektedir.",
      },
      extra: {
        en: "Bright Sight displays the video streams supplied by Enhanced 360⁰ Close Range Surveillance System, according to the user’s perspective. System enriches the video stream with the geo-referenced operational data form C2IS and other deployed systems on the vehicle. System enables the user to control the vehicle status by displaying data such as speed, fuel level, motor temperature, etc. gathered from Vehicle Control System.",
        tr: "Zırh Ötesi Görüş Sistemi, Geliştirilmiş 360⁰ Yakın Mesafe Gözetleme Sistemi tarafından sağlanan video akışlarını kullanıcının bakış açısına göre görüntüler. Sistem, video akışını C2IS'den ve araçta konuşlandırılmış diğer sistemlerden coğrafi referanslı operasyonel verilerle zenginleştirir. Sistem, Araç Kontrol Sisteminden toplanan hız, yakıt seviyesi, motor sıcaklığı vb. verileri görüntüleyerek kullanıcının araç durumunu kontrol etmesine olanak sağlar.",
      },
    },
    {
      type: "split",
      image:
        "/images/products/productpages/defence-information/bright-sight/zırh-otesi-4.png",
      title: {
        en: "",
        tr: "",
      },
      heading: {
        en: "The video streams gathered from Surveillance Systems are stitched and transferred to the smart glass used by the crew. The view perspective of the crew is calculated and the camera streams in the field of view are displayed with tactical data and symbology gathered from the C2IS systems on their real geographical location. Bright Sight is capable to display video streams of the external video sources like UAVs in the range. Additionally, the system can display the raster and vector formatted maps of the Geographical Information Systems.",
        tr: "Gözetleme sistemlerinden alınan görüntüler, sistem tarafından birleştirilir ve mürettebatın kullandığı akıllı gözlüğe aktarılır. Araç içindeki mürettabatın bakış açısı hesaplanarak, bakış açısında bulunan görüntüler ve bu görüntülerin üzerinde komuta kontrol bilgi sisteminden gelen veriler, anlık olarak gelen taktik bilgiler ve sembolojiler akıllı gözlük üzerinde gerçek koordinatında gösterilir. Zırh Ötesi Görüş Sistemi, harici video kaynaklarından aktarılan görüntüleri de mürettebata sunabilmektedir. İlave olarak, Coğrafi Bilgi Sistemlerinden alınan raster ve vektör haritaları da gösterebilmektedir.",
      },
      features: {
        en: [
          "Bright Sight is a cost-effective system, offers rapid information, decreased decision making duration and increased operational effectiveness by state-of-art Augmented Reality technologies.",
        ],
        tr: [
          "Maliyet-etkin bir çözüm olarak sunulan Zırh Ötesi Görüş Sistemi, Artırılmış Gerçeklik teknolojisi ile bilgiye hızlı ulaşmaya, karar verme sürecinin kısalmasına ve operasyonel etkinliğin artmasına yardımcı olmaktadır.",
        ],
      },
    },
    {
      type: "banner",
      image:
        "/images/products/productpages/defence-information/bright-sight/zırh-otesi-2.png",
    },

    {
      type: "grid",
      image:
        "/images/products/productpages/defence-information/bright-sight/zırh-otesi-3.png",
      heading: {
        en: "The system components",
        tr: "Sistem Bileşenleri",
      },
      features: {
        en: [
          "Augmented Reality Module",
          "Image Processing",
          "Head and Field of View Detection",
          "C2IS Integration",
          "Deployed Systems Integration Module",
        ],
        tr: [
          "Artırılmış Gerçeklik Modülü",
          "Görüntü İşleme",
          "Baş ve Görüş Açısı Tespiti",
          "C2IS Entegrasyonu",
          "Araç İçi Sistemlerle Entegrasyon Modülü",
        ],
      },
    },
  ],
};
