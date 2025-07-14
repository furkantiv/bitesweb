"use client";
import { useLocale, useTranslations } from "next-intl";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { motion } from "framer-motion";
import Image from "next/image";
export default function TalentProgram() {
  const t = useTranslations("TalentProgram");
  const sections = t.raw("sections") as Array<any>;
  const locale = useLocale();

  // E-mail adresini otomatik tespit edelim:
  const mail = "yetenek@bites.com.tr";

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20">
      <header className="mb-12 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t("title")}
        </motion.h1>
        <p className="mt-4 text-base text-gray-300">{t("subtitle")}</p>
      </header>
      <section className="">
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/career/talent-program-hero.png"
            alt="Talent Program"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="space-y-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl border border-[#35434D] shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {section.title}
            </h2>

            {"list" in section && (
              <ul className="list-disc pl-4 space-y-2 text-gray-200">
                {section.list.map((item: string, i: number) => {
                  // Eğer cümlede mail varsa link haline getir
                  if (item.includes(mail)) {
                    // mail'in başındaki metni, maili ve sonrasını ayır:
                    const parts = item.split(mail);
                    return (
                      <li key={i}>
                        {parts[0]}
                        <a
                          href={`mailto:${mail}`}
                          className="underline text-[#004DFF] hover:text-blue-400 transition"
                        >
                          {mail}
                        </a>
                        {parts[1]}
                      </li>
                    );
                  }
                  // bold tarih için
                  if (item.match(/May 1, 2025|1 Mayıs 2025/)) {
                    const date =
                      locale === "en" ? "May 1, 2025" : "1 Mayıs 2025";
                    const parts = item.split(date);
                    return (
                      <li key={i}>
                        {parts[0]}
                        <span className="font-semibold text-[#004DFF]">
                          {date}
                        </span>
                        {parts[1]}
                      </li>
                    );
                  }
                  // Not formülü için mono font
                  if (item.startsWith("[") && item.endsWith("] ≥ 3.75")) {
                    return (
                      <li key={i}>
                        <span className="font-mono">{item}</span>
                      </li>
                    );
                  }
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            )}
            {"content" in section && (
              <p className="text-gray-200">
                {/* Eğer content içinde tarih varsa bold yapalım */}
                {(() => {
                  const c: string = section.content;
                  if (c.includes("May 1, 2025") || c.includes("1 Mayıs 2025")) {
                    const date =
                      locale === "en" ? "May 1, 2025" : "1 Mayıs 2025";
                    const parts = c.split(date);
                    return (
                      <>
                        {parts[0]}
                        <span className="font-semibold text-[#004DFF]">
                          {date}
                        </span>
                        {parts[1]}
                      </>
                    );
                  }
                  return c;
                })()}
              </p>
            )}
          </motion.div>
        ))}
      </section>

      <div className="flex flex-col items-center m-12">
        <AnimatedButton text={t("applyButton")} />
        <span className="text-gray-400 mt-2 text-sm">
          {/* Alttaki info'da mail adresi link olsun */}
          {(() => {
            const info = t("sendInfo");
            if (info.includes(mail)) {
              const parts = info.split(mail);
              return (
                <>
                  {parts[0]}
                  <a
                    href={`mailto:${mail}`}
                    className="underline text-[#004DFF] hover:text-blue-400 transition"
                  >
                    {mail}
                  </a>
                  {parts[1]}
                </>
              );
            }
            return info;
          })()}
        </span>
      </div>
    </main>
  );
}
