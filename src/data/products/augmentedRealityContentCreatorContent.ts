import { ProductContent } from "@/utils/types";

export const augmentedRealityContentCreatorContent: ProductContent = {
  title: {
    en: "Augmented Reality Content Creator",
    tr: "Artırılmış Gerçeklik İçerik Oluşturucu",
  },
  description: {
    en: "ARCC is used to move the user manuals, maintenance manuals, and illustrated parts catalogues of a product into the Augmented Reality world, making training and support more immersive and efficient.",
    tr: "ARCC, bir ürünün kullanıcı ve bakım kılavuzları ile yedek parça kataloglarının içeriklerini Artırılmış Gerçeklik ortamına taşıyarak, eğitim ve destek süreçlerini daha etkili ve etkileşimli hale getirir.",
  },
  videoUrl:
    "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality.mp4",
  heroImageUrl:
    "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality-1.png",
  sections: [
    {
      type: "feature",
      image:
        "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality-2.png",
      heading: {
        en: "Create Rich AR Content",
        tr: "Zengin AR İçerikler Oluşturun",
      },
      content: {
        en: "ARCC can create AR content including holograms, animations, text, video, and images. These contents are displayed in AR glasses on the real device/product as holograms, guiding the operator with step-by-step procedures.",
        tr: "ARCC; hologramlar, animasyonlar, metin, video ve görsellerden oluşan AR içerikleri oluşturabilir. Oluşturulan bu içerikler, gerçek cihaz üzerinde AR gözlüklerle hologram olarak görüntülenir ve operatörü adım adım yönlendirir.",
      },
      extra: {
        en: "Operators follow procedures using holograms and animations on the actual system, reducing training and maintenance durations while increasing productivity and compliance.",
        tr: "Operatörler, gerçek sistem üzerinde hologram ve animasyonlar aracılığıyla prosedürleri izler. Böylece eğitim ve bakım süreleri azalır, verimlilik ve uygunluk artar.",
      },
    },
    {
      type: "grid",
      image:
        "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality-3.png",
      heading: {
        en: "Advantages",
        tr: "Avantajlar",
      },
      features: {
        en: [
          "Decreases maintenance and user training durations",
          "Increases productivity, operation speed, fix rates, compliance, and profit",
          "Reduces human error, execution time, breakdowns, downtime, and costs",
          "Provides step-by-step AR guidance for critical systems/platforms",
        ],
        tr: [
          "Bakım ve kullanıcı eğitimi sürelerini azaltır",
          "Verimlilik, işlem hızı, onarım oranı, uygunluk ve karlılığı artırır",
          "İnsan hatasını, işlem süresini, arıza ve duruş sürelerini ve maliyetleri azaltır",
          "Kritik sistemler için adım adım AR destekli rehberlik sunar",
        ],
      },
    },
    // Uzaktan destek ayrı bir başlık olarak slider veya feature-section ile de eklenebilir:
    {
      type: "feature",
      image:
        "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality-1.png",
      heading: {
        en: "AR Remote Maintenance & Assistance",
        tr: "AR Uzaktan Bakım ve Destek",
      },
      content: {
        en: "Holographic content-based remote assistance is possible via live video connection. The expert can place directive marks in the operator's real 3D world, share videos, PDFs and images to guide field operations.",
        tr: "Canlı video bağlantısı ile holografik içerik tabanlı uzaktan destek sağlanabilir. Uzman, operatörün gerçek 3D ortamına yönlendirici işaretler ekleyebilir, video, PDF ve görseller paylaşabilir.",
      },
      extra: {
        en: "This increases field efficiency and reduces maintenance times. All ARCC-created contents are instantly available on AR glasses.",
        tr: "Bu sayede sahada verimlilik artar, bakım süreleri azalır. ARCC ile oluşturulan tüm içerikler, anında AR gözlüklerde kullanılabilir.",
      },
    },
    // İstersen avantajları slider olarak da gösterebilirsin:
    // {
    //   type: "slider",
    //   slides: [
    //     {
    //       title: { en: "Key Benefits", tr: "Başlıca Avantajlar" },
    //       image: "/images/products/productpages/training-simulation/augmented-reality-content-creator/augmented-reality-3.png",
    //       features: { en: [...], tr: [...] }
    //     }
    //   ]
    // }
  ],
};
