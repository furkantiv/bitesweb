"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const criteriaData = [
  {
    title:
      "Recruitment Criteria for Candidates with a Bachelor’s Degree and/or Above",
    content: (
      <ul className="pl-5 list-disc text-sm md:text-base leading-relaxed space-y-1">
        <li>
          Candidates considering joining the BITES family are expected to meet
          the minimum criteria listed below.
        </li>
        <li>
          Candidates to be hired are also subject to a personal security
          clearance check.
        </li>
      </ul>
    ),
  },
  {
    title: "Additional Point Criteria",
    content: (
      <div className="flex flex-col gap-4">
        <div className="text-sm md:text-base leading-relaxed">
          <p>
            Additional points may be awarded to candidates if they meet the
            following additional point criteria.
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>
              For candidates with 10 or more years of experience in
              administrative and engineering fields, provided their experience
              is related to the job description...
            </li>
            <li>
              (Detaylar buraya eklenebilir, üstteki uzun açıklamanın tamamı
              buraya yazılabilir)
            </li>
          </ol>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden text-left text-xs md:text-sm bg-white/5">
            <thead>
              <tr>
                <th className="p-3 font-semibold text-white/80">
                  Additional Point Criteria
                </th>
                <th className="p-3 font-semibold text-white/80 text-right">
                  Additional Point Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with 2 ≤ x &lt; 5 years of work experience,
                  provided their experience is related to the job description
                </td>
                <td className="p-3 text-right">0.2</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with 5 ≤ x &lt; 10 years of work experience,
                  provided their experience is related to the job description
                </td>
                <td className="p-3 text-right">0.4</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with a master's degree from domestic or foreign
                  universities ranked within the top 1000 in QS, RUR, or THE,
                  and whose degree is relevant to the job description
                </td>
                <td className="p-3 text-right">0.2</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates proficient in a foreign language (subject to
                  the criteria in 2.8)
                </td>
                <td className="p-3 text-right">0.2</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with other relevant master’s degrees fulfilling
                  the job description requirements
                </td>
                <td className="p-3 text-right">0.1</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates who have served as researchers or scholars in
                  national or international projects of TÜBİTAK, the Ministry of
                  Industry and Technology, or the European Union
                </td>
                <td className="p-3 text-right">0.1</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with publications in SCI, SCI Exp., or SSCI
                  indexes
                </td>
                <td className="p-3 text-right">0.1</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">
                  For candidates with an ALES score of 70 or above in their
                  field of study in the last 5 years (numerical for engineering,
                  verbal or equally weighted for administrative fields)
                </td>
                <td className="p-3 text-right">0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "Candidates with Undergraduate Degrees Abroad",
    content: (
      <p className="text-sm md:text-base">
        Content for undergraduate degrees abroad…
      </p>
    ),
  },
  {
    title: "Doctoral Graduate Candidates",
    content: (
      <p className="text-sm md:text-base">
        Content for doctoral graduate candidates…
      </p>
    ),
  },
  {
    title:
      "Recruitment Criteria for Candidates with High School / Associate Degree Graduates",
    content: (
      <p className="text-sm md:text-base">
        Content for high school / associate degree graduates…
      </p>
    ),
  },
];

function AccordionItem({
  title,
  content,
  index,
  openIndex,
  setOpenIndex,
}: {
  title: string;
  content: React.ReactNode;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  return (
    <div className="">
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
            className="overflow-hidden bg-white/5 px-4 pb-4 rounded-b-2xl"
          >
            <div className="pt-1">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RecruitmentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20 py-8 md:py-12 w-full min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-40 md:h-64 rounded-2xl overflow-hidden mb-6">
        <Image
          src="/images/recruitment-banner.jpg"
          alt="Recruitment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      {/* Title */}
      <div className="text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Our Recruitment Criteria
        </h1>
        <p className="mt-2 text-white text-left mx-auto text-base md:text-lg">
          Candidates considering joining the BITES family are expected to meet
          the minimum criteria listed below. Candidates to be hired are also
          subject to a personal security clearance check.
        </p>
      </div>
      {/* Accordion */}
      <div className="shadow-xl border-t border-white/10 overflow-hidden divide-y divide-white/15">
        {criteriaData.map((item, idx) => (
          <AccordionItem
            key={item.title}
            index={idx}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
