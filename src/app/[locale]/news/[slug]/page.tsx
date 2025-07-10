import { newsList } from "@/data/news";
import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
import BreadcrumbsWithSearch from "@/components/ui/BreadcrumbsWithSearch";
import { slugify } from "@/utils/slugify";
import { getLastNews } from "@/utils/getLastNews";
import { LastNewsCard } from "@/components/ui/LastNewsCard";
import FollowUs from "@/components/ui/FollowUs";

// Eğer Next.js ile dinamik locale parametresi geliyorsa params'tan alabilirsin
// Burası, route.ts tanımına göre değişir. Burada örnek olarak locale=tr verdim.
type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
    locale?: "tr" | "en";
  }>;
};

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug, locale = "tr" } = await params;
  const lastThreeNews = getLastNews(newsList, 3);
  // title objesinin string karşılığını slugify fonksiyonuna gönderiyoruz!
  const news = newsList.find((n) => slugify(n.title.en) === slug);

  if (!news) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-white">
        News not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:px-0 md:pt-4 w-full min-h-screen bg-transparent flex flex-col lg:flex-row gap-8 justify-center">
      {/* Sol - İçerik */}
      <div className="flex-1 min-w-0">
        <div className="border border-[#35434D] rounded-2xl p-6 md:p-10 flex flex-col gap-6">
          {/* Üst başlık ve meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-0">
                {news.title[locale]}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">{news.date}</span>
              <span className="text-xs text-white px-3 py-1 rounded-full border border-[#35434D] ml-1">
                {news.source[locale]}
              </span>
            </div>
          </div>

          {/* Büyük görsel */}
          <div className="w-full rounded-xl overflow-hidden border border-[#35434D] shadow">
            <img
              src={news.image}
              alt={news.title[locale]}
              className="w-full h-auto max-h-[480px] object-contain object-center"
            />
          </div>
          {/* Main Content (örnek uzun açıklama, markdown veya html de parse edebilirsin) */}
          <div className="text-gray-200 text-base md:text-lg leading-relaxed mt-4">
            {news.content[locale] ? (
              news.content[locale]
            ) : (
              <>
                <p>We Have A Problem</p>
                <p>#BITES #UDHAM</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Sağ - Sidebar */}
      <aside className="w-hidden lg:block w-full max-w-sm z-10">
        <div className="fixed top-53 w-full space-y-8 max-w-sm h-screen overflow-y-auto">
          {/* Last News */}

          <div className="flex flex-col gap-4">
            <LastNewsCard newsList={lastThreeNews} />
          </div>
          {/* Social links */}
          <FollowUs />
        </div>
      </aside>
    </div>
  );
}
