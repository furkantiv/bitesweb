"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const nextLocale = locale === "en" ? "tr" : "en";

  const handleLocaleChange = () => {
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "tr") {
      segments[1] = nextLocale;
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <button
      onClick={handleLocaleChange}
      className="
        flex items-center gap-2
        px-3 py-1.5
        rounded-lg
        border border-[#35434D]
        text-[#35434D]
        bg-transparent
        hover:border-[#004DFF]
        focus:outline-none focus:ring-1 focus:ring-neutral-400
        transition-all cursor-pointer
      "
      aria-label={`Change language to ${nextLocale.toUpperCase()}`}
    >
      <Globe size={16} className="text-white" />
      <span className="text-sm font-medium text-white tracking-wide">
        {nextLocale.toUpperCase()}
      </span>
    </button>
  );
}
