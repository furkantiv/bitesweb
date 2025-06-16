import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Innovation",
    desc: "We believe the key to success is to push the boundaries. This is why we value new and bold ideas above all else.",
  },
  {
    title: "Passion",
    desc: "We are passionate about what we do. Our passion is the essence of our work and is at the core of everything we do.",
  },
  {
    title: "Agility",
    desc: "Our agile work model allows us to adapt to change and keep up with the pace of the sectors which we serve.",
  },
  {
    title: "Trust",
    desc: "Accountability and transparency pave the way for mutual trust. This is why we carry out all our activities within the framework of our ethical values.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 + i * 0.08,
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  }),
};

const ValuesSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="max-w-5xl mx-auto py-20 px-4">
      {/* Mission & Vision Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
        className="flex flex-col md:flex-row gap-8 mb-12
          bg-white/10 backdrop-blur-xl border border-white/20 
          rounded-2xl p-8 shadow-xl shadow-blue-400/10
          ring-1 ring-white/20"
        style={{
          boxShadow: "0 8px 32px 0 rgba(34, 51, 255, 0.18)",
        }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Mission & Vision
          </h2>
          <p className="text-base mb-4 text-white/90 drop-shadow">
            Our mission is to help businesses, institutions and individuals reap
            the benefits of technology through our innovative software and
            products. We strive to offer our customers and partners affordable,
            accessible, and secure technologies in the defense industry and
            information technologies.
            <br />
            Our vision is to be recognised as an international innovation and
            R&D centre to help build a sustainable future for the world by
            developing software and products that will accelerate digitalization
            globally.
          </p>
          <p className="text-xs text-white/60 mb-3">
            I understand that my data will be held securely in accordance with
            the{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </p>
          <motion.button
            whileHover={{
              scale: 1.06,
              background: "linear-gradient(90deg,#334cff,#67e8f9)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all px-5 py-2 rounded-full flex items-center gap-2 text-white font-semibold w-max shadow-lg shadow-blue-400/30"
          >
            <span>Contact</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              className="ml-1"
            >
              <path d="M5 12l5-5 5 5" />
            </svg>
          </motion.button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/about-mission.jpg"
            alt="Mission Vision"
            className="rounded-xl object-cover h-52 w-full max-w-xs border border-white/20 shadow-lg shadow-cyan-200/10"
          />
        </div>
      </motion.div>

      {/* Values Glass Cards */}
      <div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Values
        </h2>
        <p className="text-lg text-white/80 mb-8">
          We specialize in creating human-centricity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/20
                p-6 shadow-xl shadow-cyan-200/10 transition-all
                hover:bg-white/20 hover:scale-[1.03] hover:shadow-blue-200/30 group"
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 8px 40px 0 rgba(51,76,255,0.18)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-white/90 text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
