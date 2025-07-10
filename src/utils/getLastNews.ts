// utils/getLastNews.ts
import { NewsType } from "@/data/news";

/**
 * En güncel haberleri (tarihe göre) getirir.
 * @param newsList Tüm haberlerin array'i
 * @param count Kaç tane haber alınacak (varsayılan: 3)
 * @returns NewsType[]
 */
export function getLastNews(
  newsList: NewsType[],
  count: number = 3
): NewsType[] {
  return [...newsList]
    .sort((a, b) => {
      // Tarih formatınız: "23 September, 2025" → Date'e çeviriyoruz
      const da = new Date(a.date);
      const db = new Date(b.date);
      return db.getTime() - da.getTime(); // büyükten küçüğe
    })
    .slice(0, count);
}
