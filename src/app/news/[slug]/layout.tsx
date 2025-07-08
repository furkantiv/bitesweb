import BreadcrumbsWithSearch from "@/components/ui/BreadcrumbsWithSearch";
import { ReactNode } from "react";

export default function NewsDetailLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const title = decodeURIComponent(params.slug.replace(/-/g, " "));
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:px-0 md:pt-20 w-full">
      <BreadcrumbsWithSearch
        items={[{ label: "News", href: "/news" }, { label: title }]}
      />
      {children}
    </div>
  );
}
