"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";

const images = {
  join: "/images/career/joinus.png",
  criteria: "/images/career/recruitment-criteria.png",
  life: "/images/career/LifeasBites.png",
};

const cardBase = "rounded-2xl border border-gray-700 p-6 md:p-4 shadow-none";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export default function CareersPage() {
  const t = useTranslations("CareerPage");
  const criteriaList = t.raw("criteriaList") as string[];

  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        {/* --- "Join Us" Hero Section --- */}
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl overflow-hidden relative mb-8 h-[180px] md:h-[260px] lg:h-[320px]"
        >
          <Image
            src={images.join}
            alt="Join Us"
            fill
            className="object-cover rounded-2xl"
            priority
            quality={90}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-2 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.1 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
            >
              {t("heroTitle")}
            </motion.h1>
            <motion.p
              className="text-white text-base md:text-lg drop-shadow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.8,
                type: "spring",
                stiffness: 45,
              }}
            >
              {t("heroDesc")}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="flex flex-col gap-6">
          {/* Recruitment Criteria Row */}
          <motion.div
            className={`${cardBase} flex flex-col md:flex-row items-center `}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Side */}
            <div className="flex-1 flex flex-col justify-center">
              <div>
                <motion.h2
                  className="text-2xl font-bold text-white mb-2"
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  {t("criteriaTitle")}
                </motion.h2>
                <motion.p
                  className="text-gray-200 text-sm mb-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {t("criteriaDesc")}
                </motion.p>
                <motion.ul
                  className="text-gray-400 text-sm list-disc list-inside space-y-1 pl-2"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                >
                  {criteriaList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </motion.ul>
              </div>
              <div className="my-6">
                <AnimatedButton
                  text={t("criteriaButton")}
                  href="/career/recruitment"
                />
              </div>
            </div>
            {/* Image Side */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="relative w-full md:aspect-auto md:h-full rounded-lg overflow-hidden">
                <Image
                  src={images.criteria}
                  alt="Recruitment"
                  width={650}
                  height={400}
                  className="object-cover"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Open Position + Internship Program Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Open Position */}
            <motion.div
              className={cardBase}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {t("openPositionTitle")}
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                {t("openPositionDesc")}
              </p>
              <AnimatedButton text={t("openPositionButton")} />
            </motion.div>
            {/* Talent & Internship */}
            <motion.div
              className={cardBase}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {t("internshipTitle")}
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                {t("internshipDesc")}
              </p>
              <AnimatedButton
                text={t("internshipButton")}
                href="/career/talentprogram"
              />
            </motion.div>
          </div>

          {/* Life at Bites Row */}
          <motion.div
            className={`${cardBase} flex flex-col md:flex-row min-h-120 gap-5 items-stretch`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-lg overflow-hidden flex-1">
                <Image
                  src={images.life}
                  alt="Life at Bites"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </motion.div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center">
              <div>
                <motion.h2
                  className="text-2xl font-bold text-white mb-2"
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  {t("lifeTitle")}
                </motion.h2>
                <motion.p
                  className="text-gray-200 text-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  {t("lifeDesc")}
                </motion.p>
              </div>
              <div className="mt-4">
                <AnimatedButton text={t("lifeButton")} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <footer className="pt-10">
        <Footer />
      </footer>
    </>
  );
}
