"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsWithSearchProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbsWithSearch({
  items,
}: BreadcrumbsWithSearchProps) {
  return (
    <div className="flex items-center justify-between border-t border-neutral-800">
      <nav className="flex items-center gap-2 text-sm text-neutral-400">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-1">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <button
        className="rounded-full p-2 hover:bg-neutral-800 transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </div>
  );
}
