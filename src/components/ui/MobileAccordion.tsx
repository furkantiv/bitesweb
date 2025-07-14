// components/ui/MobileAccordion.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function MobileAccordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#35434D]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 px-3 text-left text-base font-medium text-white focus:outline-none"
      >
        {title}
        <ChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-2 pr-2 pb-3">{children}</div>
      </div>
    </div>
  );
}
