"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  LucideTwitter,
  Twitter,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const FollowUs = () => {
  const t = useTranslations();
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-1"
    >
      <h4 className="text-md border-t border-[#35434D] font-semibold pt-2 text-white mb-3">
        {t("newsPage.followUs")}
      </h4>
      <div className="flex gap-4">
        <motion.div variants={fadeUp}>
          <motion.div className="flex items-center gap-5 mt-2" initial={false}>
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
            <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }}>
              <Link
                href="#"
                className="text-white hover:text-pink-400 transition"
              >
                <Twitter size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default FollowUs;
