import BreadcrumbsWithSearch from "@/components/ui/BreadcrumbsWithSearch";
import type { ReactNode } from "react";

export default function NewsDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {/* Breadcrumb veya diğer ortak bileşenler */}
      {children}
    </div>
  );
}
