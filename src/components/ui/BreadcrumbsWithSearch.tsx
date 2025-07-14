"use client";

import Link from "next/link";

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
    <div className="flex items-center justify-between border-t pb-5 border-neutral-800">
      <nav className="flex items-center  text-sm text-neutral-400">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-1">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-400 transition-colors min-w-18 line-clamp-1"
              >
                <p className="line-clamp-1 ">{item.label}</p>
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      {/* <button
        className="rounded-full p-2 hover:bg-neutral-800 transition-colors"
        aria-label="Search"
      >
        <Search size={20} />
      </button> */}
    </div>
  );
}
