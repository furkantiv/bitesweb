"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import TimelineComponent from "@/components/ui/TimelineComponent";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const values = t.raw("values"); // Array<{title, desc}>

  useEffect(() => {
    document.title = t("metaTitle");
  }, [t]);

  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <main className="max-w-7xl mx-auto px-6 md:px-0 space-y-12 md:py-20">
        {/* Our Mission & Vision Section */}
        <section>
          <div className="md:p-6 p-3 rounded-2xl border items-center justify-center border-[#35434D]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Text Alanı */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex flex-col gap-8">
                  <h2 className="text-white text-4xl font-semibold font-sans">
                    {t("missionVisionTitle")}
                  </h2>
                  <div className="text-white text-base font-normal font-sans leading-relaxed whitespace-pre-line">
                    {t("missionVisionDesc")}
                  </div>
                  <div className="text-white/60 text-sm font-normal font-sans leading-tight">
                    {t.rich("privacyNote", {
                      link: (chunks) => (
                        <Link
                          href="/privacy-policy"
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {chunks}
                        </Link>
                      ),
                    })}
                  </div>
                  <AnimatedButton text={t("contactUs")} href="/contact" />
                </div>
              </div>
              {/* Görsel Alanı */}
              <div className="flex-1 flex items-center justify-center min-w-0">
                <div className="w-full max-w-[600px] aspect-[4/3] rounded-lg overflow-hidden bg-black flex-shrink-0">
                  <Image
                    src={"/images/about/about-mission.jpg"}
                    alt="Mission"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full block"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section>
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 md:mx-6 mx-3 flex flex-col md:block">
              <h2 className="text-4xl font-semibold text-white mb-3">
                {t("coreValuesTitle")}
              </h2>
              <h3
                className={`
          text-2xl font-medium text-white/80
          ${/* Mobilde: yüksekliği sabitle, flex ile ortala */ ""}
          h-20 flex items-center md:h-auto md:flex-none
        `}
              >
                {t("coreValuesSubtitle")}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((val: any, i: number) => (
                <motion.div
                  key={val.title}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border border-[#35434D] rounded-2xl md:p-6 p-3 shadow-xl transition-all duration-200 flex flex-col min-h-44"
                >
                  <h3 className="text-2xl font-semibold text-white items-center text-left md:block md:items-start mb-2">
                    {val.title}
                  </h3>
                  <p
                    className="text-white text-base flex-1 flex items-center text-left md:block md:items-start
    "
                  >
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-6">
          <div className="mb-6 px-6 mx-3">
            <h2 className="text-4xl font-semibold text-white mb-3">
              {t("historyTitle")}
            </h2>
            <h3 className="text-2xl font-medium text-white/80">
              {t("historySubtitle")}
            </h3>
          </div>
          <TimelineComponent />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
