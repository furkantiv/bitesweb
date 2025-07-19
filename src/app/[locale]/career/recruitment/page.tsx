"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

function Table({ headers, rows, note }: any) {
  return (
    <div className="">
      <table className="w-full text-left border border-[#35434D] rounded-lg overflow-hidden ">
        <thead>
          <tr className="bg-white/10">
            {headers.map((h: string, i: number) => (
              <th
                key={i}
                className="font-semibold py-2 px-4 border-b border-[#35434D]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: string[], i: number) => (
            <tr key={i}>
              {row.map((cell: string, j: number) => (
                <td
                  key={j}
                  className={
                    "py-2 px-4 border-b border-[#35434D]" +
                    (j < row.length - 1 ? " border-r border-[#35434D]" : "")
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p className="mt-4 text-xs text-gray-800 dark:text-white">{note}</p>
      )}
    </div>
  );
}

function List({ items }: any) {
  return (
    <ul className="list-disc pl-6 text-gray-900 dark:text-white space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function CriteriaAccordionItem({
  title,
  content,
  index,
  openIndex,
  setOpenIndex,
}: {
  title: string;
  content: any;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  return (
    <div>
      <button
        className="flex items-center w-full text-left py-3 px-2 font-semibold text-white/90 hover:text-white/100 transition"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="flex-1 text-base md:text-lg font-semibold">
          {String(index + 1).padStart(2, "0")} {title}
        </span>
        <span className="ml-2">
          {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden px-4 pb-4 rounded-b-2xl"
          >
            <div className="pt-1">
              {content.type === "table" && (
                <Table
                  headers={content.headers}
                  rows={content.rows}
                  note={content.note}
                />
              )}
              {content.type === "table-adv" && (
                <>
                  <p className="mb-4">{content.desc}</p>
                  <Table headers={content.headers} rows={content.rows} />
                  {content.notes && (
                    <ul className="mt-4 space-y-2 text-lg text-white/90">
                      {content.notes.map((n: string, i: number) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
              {content.type === "list" && <List items={content.items} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RecruitmentPage() {
  const t = useTranslations("RecruitmentCriteria");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = t.raw("items") as any[];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20 py-8 md:py-12 w-full">
      {/* Banner */}
      <div className="relative w-full h-40 md:h-64 mb-6">
        <Image
          src="/images/career/recruitment-banner.png"
          alt="Recruitment"
          fill
          className="object-cover rounded-lg overflow-hidden"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      {/* Title */}
      <div className="text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {t("mainTitle")}
        </h1>
        <p className="mt-2 text-white text-left mx-auto text-base md:text-lg">
          {t("mainDesc")}
        </p>
      </div>
      {/* Accordion */}
      <div className="border-t border-[#35434D] overflow-hidden divide-y divide-[#35434D]">
        {items.map((item, idx) => (
          <CriteriaAccordionItem
            key={item.title}
            index={idx}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
