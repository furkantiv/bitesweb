import { newsList } from "@/data/news";
import BreadcrumbsWithSearch from "@/components/ui/BreadcrumbsWithSearch";
import { slugify } from "@/utils/slugify";
import { getLastNews } from "@/utils/getLastNews";
import { LastNewsCard } from "@/components/ui/LastNewsCard";
import FollowUs from "@/components/ui/FollowUs";
import NewsImageSlider from "@/components/ui/NewsImageSlider";
import Footer from "@/components/layout/Footer";

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

  const breadcrumbItems = [
    { label: locale === "tr" ? "Ana Sayfa" : "Home", href: "/" },
    { label: locale === "tr" ? "Haberler" : "News", href: "/news" },
    { label: news.title[locale] }, // sonuncuda href yok; aktif sayfa
  ];

  return (
    <>
      <div className="max-w-7xl my-20 md:my-40 mx-auto w-full min-h-screen bg-transparent flex flex-col lg:flex-row gap-8 justify-center mb-6">
        {/* Sol - İçerik */}
        <div className="flex-1 items-center justify-center px-3 md:px-6">
          <BreadcrumbsWithSearch items={breadcrumbItems} />
          <div className="border border-[#35434D] rounded-2xl p-6 flex flex-col gap-3">
            {/* Büyük görsel */}
            <NewsImageSlider
              images={news.image} // array of image URLs
              alt={news.title[locale]}
            />
            {/* Üst başlık ve meta */}
            <div className="flex flex-col md:justify-between gap-2">
              {/* Tarih ve Kaynak */}
              <div className="flex justify-between gap-4">
                <span className="text-gray-400 text-sm">{news.date}</span>
                <span className="text-xs text-white px-3 py-1 rounded-full border border-[#35434D]">
                  {news.source[locale]}
                </span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-white">
                  {news.title[locale]}
                </h1>
              </div>
            </div>
            {/* Main Content */}
            <div className="text-gray-200 text-base md:text-lg leading-relaxed w-full">
              {news.content[locale] ? (
                news.content[locale]
              ) : (
                <>
                  <p>We Have A Problem</p>
                  <p>#BITES</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sağ - Sidebar */}
        <aside className="hidden lg:block w-full max-w-sm z-10">
          <div className="fixed top-50 w-full space-y-8 max-w-sm h-screen overflow-y-auto">
            {/* Last News */}

            <div className="flex flex-col gap-4">
              <LastNewsCard newsList={lastThreeNews} />
            </div>
            {/* Social links */}
            <FollowUs />
          </div>
        </aside>
      </div>
      <footer className="relative z-50">
        <Footer />
      </footer>
    </>
  );
}
