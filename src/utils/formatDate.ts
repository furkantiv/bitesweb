import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";

export type DateFormatType = "short" | "long";
export type LocaleType = "tr" | "en";

export function formatNewsDate(
  dateStr: string,
  locale: LocaleType,
  type: DateFormatType = "long"
) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  if (locale === "tr") {
    if (type === "short") {
      return format(date, "d MMM yyyy", { locale: tr });
    }
    return format(date, "d MMMM yyyy", { locale: tr });
  } else {
    if (type === "short") {
      return format(date, "d MMM yyyy", { locale: enUS });
    }
    return format(date, "d MMMM yyyy", { locale: enUS });
  }
}
