"use client";
import { formatNewsDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slugify } from "@/utils/slugify"; // Import the slugify function

type NewsItem = {
  id: number;
  source: { en: string; tr: string };
  date: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  image: string[];
  category: string;
  content: { en: string; tr: string };
};

type NewsContentForHomeProps = {
  news: NewsItem;
  locale?: "tr" | "en";
};

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // md = 768px
    function handleResize() {
      setIsSmall(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
}

const NewsContentForHome: React.FC<NewsContentForHomeProps> = ({
  news,
  locale = "tr",
}) => {
  const [day, month, year] = news.date.replace(",", "").split(" ");
  const isSmallScreen = useIsSmallScreen();

  // Generate the slug from the news title
  const newsSlug = slugify(news.title.en);
  return (
    <Link href={`/news/${newsSlug}`}>
      <div className="flex items-center gap-4">
        {/* Tarih */}
        <div className="flex-row md:flex-col items-center md:items-start gap-1 flex-shrink-0 mb-2 md:mb-0 hidden md:block">
          <div className="text-white text-2xl md:text-4xl font-light leading-none">
            {day}
          </div>
          <div className="text-xs md:text-sm text-gray-400">{month}</div>
          <div className="text-xs md:text-sm text-gray-400">{year}</div>
        </div>

        {/* Dikey divider */}
        <div className="w-px h-12 bg-gray-700 mx-1 rounded hidden sm:block" />

        {/* Image */}
        {news.image && news.image.length > 0 && (
          <div className="w-[90px] h-[90px] relative flex-shrink-0 rounded overflow-hidden bg-neutral-800">
            <Image
              src={news.image[0]}
              alt={news.title[locale]}
              height={90}
              width={90}
              className="object-cover object-center rounded"
              priority
            />
          </div>
        )}

        {/* İçerik */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-white">
              {isSmallScreen && news.source[locale]?.length > 10
                ? news.source[locale].slice(0, 10) + "..."
                : news.source[locale]}
            </span>
            <span className="text-xs text-white px-2 rounded-full md:hidden ">
              {formatNewsDate(news.date, locale, "short")}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-white line-clamp-1">
            {news.title[locale]}
          </h3>
          <p className="text-xs text-gray-300 mt-1 line-clamp-2">
            {news.description[locale]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsContentForHome;
