"use client";
import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20">
        <section className="w-full flex flex-col items-center">
          <motion.div
            className="w-full flex flex-col md:flex-row gap-0"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              className="w-full md:w-1/2 rounded-3xl flex flex-col gap-6 shadow-lg "
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                Get in touch now!
              </h2>
              {/* Name */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-white mb-1">
                  Name
                </label>
                <motion.input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-10 px-4 rounded-md text-white/80 placeholder-white/50 outline-none border border-white/20 focus:border-blue-500 transition"
                  value={form.name}
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 2px 12px 0 #1e293b55",
                  }}
                  whileHover={{ scale: 1.01, borderColor: "#60a5fa" }}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </motion.div>
              {/* Email */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-white mb-1">
                  E-mail
                </label>
                <motion.input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full h-10 px-4 rounded-md text-white/80 placeholder-white/50 outline-none border border-white/20 focus:border-blue-500 transition"
                  value={form.email}
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 2px 12px 0 #1e293b55",
                  }}
                  whileHover={{ scale: 1.01, borderColor: "#60a5fa" }}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </motion.div>
              {/* Message */}
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-white mb-1">
                  Message
                </label>
                <motion.textarea
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md text-white/80 placeholder-white/50 outline-none border border-white/20 focus:border-blue-500 transition resize-none"
                  value={form.message}
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 2px 12px 0 #1e293b55",
                  }}
                  whileHover={{ scale: 1.01, borderColor: "#60a5fa" }}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </motion.div>
              {/* Send Button */}
              <AnimatedButton text="Send" />
              {/* Privacy Text */}
              <motion.p
                className="text-xs text-stone-300 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                I understand that my data will be held securely in accordance
                with the{" "}
                <Link href="/privacy-policy" className="underline">
                  privacy policy
                </Link>
              </motion.p>
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          </motion.div>

          {/* Address Section */}
          <motion.div
            className="w-full rounded-3xl  md:px-0 md:py-10 flex flex-col md:flex-row gap-8 shadow-lg items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left side: info */}
            <motion.div
              className="flex-1 flex flex-col gap-8"
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Address
              </h2>
              {/* Headquarter */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base font-medium text-white border-b border-white/20 pb-2 mb-2">
                  Headquarter
                </h3>
                <p className="text-sm text-white/60">
                  Mustafa Kemal Mahallesi, ODTÜ Teknokent Bilişim İnovasyon
                  Merkezi,
                  <br />
                  280/G Kat:4 No:14 PK, 06530 Çankaya / ANKARA
                </p>
              </motion.div>
              {/* Working Hours */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base font-medium text-white border-b border-white/20 pb-2 mb-2">
                  Working Hours
                </h3>
                <p className="text-sm text-white/60">
                  Monday - Friday: 7:00 - 17:00
                  <br />
                  Saturday: 7:00 - 12:00
                  <br />
                  Sunday and holidays: 8:00 - 10:00
                </p>
              </motion.div>
              {/* Social Media */}
              <motion.div variants={fadeUp}>
                <h3 className="text-base font-medium text-white border-b border-white/20 pb-2 mb-2">
                  Social Media
                </h3>
                <motion.div
                  className="flex items-center gap-5 mt-2"
                  initial={false}
                >
                  <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }}>
                    <Link
                      href="#"
                      className="text-white hover:text-blue-400 transition"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#ef4444" }}>
                    <Link
                      href="#"
                      className="text-white hover:text-red-500 transition"
                    >
                      <Youtube size={20} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#3b82f6" }}>
                    <Link
                      href="#"
                      className="text-white hover:text-blue-500 transition"
                    >
                      <Facebook size={20} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: "#f472b6" }}>
                    <Link
                      href="#"
                      className="text-white hover:text-pink-400 transition"
                    >
                      <Instagram size={20} />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Right side: Map */}
            <motion.div
              className=" flex flex-1 w-full md:w-96 h-64 md:h-96 rounded-lg overflow-hidden bg-white/10 mt-8 md:mt-0"
              variants={fadeLeft}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  title="BITES Defence Address"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6120.989237814215!2d32.750414!3d39.90794600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3463a83f73e2f%3A0xe52b3eb25d0f1bee!2sBITES%20Defence%20%26%20Aerospace!5e0!3m2!1str!2str!4v1751469859608!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(75%) hue-rotate(180deg) brightness(1.2) contrast(1.5) grayscale(0.2)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <footer className="pt-10">
        <Footer />
      </footer>
    </>
  );
}
