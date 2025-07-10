"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import Footer from "@/components/layout/Footer";

const images = {
  join: "/images/career/joinus.png",
  criteria: "/images/career/recruitment-criteria.png",
  life: "/images/career/LifeasBites.png",
};

const cardBase = "rounded-2xl border border-gray-700 p-6 md:p-8 shadow-none";

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
            className="object-cover"
            priority
            quality={90}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.1 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
            >
              Join Us!
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
              Join us to utilize, develop your knowledge and skills and succeed
              together in our work where we utilize the most up-to-date
              competencies and technologies in the field of defence industry.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="flex flex-col gap-8">
          {/* Recruitment Criteria Row */}
          <motion.div
            className={`${cardBase} flex flex-col md:flex-row items-stretch gap-6`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Side */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <motion.h2
                  className="text-2xl font-bold text-white mb-2"
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  Recruitment Criteria
                </motion.h2>
                <motion.p
                  className="text-gray-200 text-sm mb-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  Click here for the minimum requirements we expect candidates
                  to meet.
                </motion.p>
                <motion.ul
                  className="text-gray-400 text-sm list-disc list-inside space-y-1 pl-2"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                >
                  <li>
                    Recruitment Criteria for Candidates with a Bachelor’s Degree
                    and/or Above
                  </li>
                  <li>Additional Point Criteria</li>
                  <li>Candidates with Undergraduate Degrees Abroad</li>
                  <li>Doctoral Graduate Candidates</li>
                  <li>
                    Recruitment Criteria for Candidates with High School /
                    Associate Degree Graduates
                  </li>
                </motion.ul>
              </div>
              <div className="mt-4">
                <AnimatedButton text="Details" href="/career/recruitment" />
              </div>
            </div>
            {/* Image Side */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              transition={{ type: "spring", stiffness: 250 }}
            >
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden flex-1">
                <Image
                  src={images.criteria}
                  alt="Recruitment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Open Position + Internship Program Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Open Position
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Discover our current job opportunities to join the BİTES family
                and succeed together.
              </p>
              <AnimatedButton text=" Details" />
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
                Talent and Internship Program
              </h2>
              <p className="text-gray-200 text-sm mb-4">
                Make a strong start to your defense industry career at BİTES,
                where the most up-to-date technologies are used.
              </p>
              <AnimatedButton text=" Details" />
            </motion.div>
          </div>

          {/* Life at Bites Row */}
          <motion.div
            className={`${cardBase} flex flex-col md:flex-row min-h-120 gap-6 items-stretch`}
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
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden flex-1">
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
                  Life at BİTES
                </motion.h2>
                <motion.p
                  className="text-gray-200 text-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                >
                  Discover our values, attractive benefits, fun office
                  environment and development opportunities, as well as the
                  opportunity to work on exciting projects.
                </motion.p>
              </div>
              <div className="mt-4">
                <AnimatedButton text="Details" />
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
