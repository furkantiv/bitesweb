"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrbitingLogo from "../ui/OrbitingLogo";
import FollowUs from "../ui/FollowUs";
import { MobileAccordion } from "../ui/MobileAccordion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  // Eğer array ise t('key', { returnObjects: true }) kullan
  const quickLinks = t.raw("quickLinkList") as {
    label: string;
    href: string;
  }[];
  const productsLeft = t.raw("productListLeft") as string[];
  const productsRight = t.raw("productListRight") as string[];
  const policyLinks = t.raw("policyLinks") as string[];

  return (
    <footer className="w-full border-t border-[#35434D] bg-[#00192F] text-white font-inter relative">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-10 border-b border-[#35434D] pb-8">
            {/* Company */}
            <div className="w-full md:w-1/4 flex flex-col gap-4">
              <h3 className="text-xl font-medium pb-1 pl-3  border-b border-[#35434D] mb-1">
                {t("company")}
              </h3>
              <div>
                <OrbitingLogo />
                <p className="not-italic text-sm text-white/70 pl-3 leading-relaxed">
                  {t("companyDesc")}
                </p>
              </div>
              <div className="flex gap-2 pl-3 mb-2">
                <FollowUs />
              </div>
              <address className="not-italic text-sm text-white/70 pl-3 leading-relaxed whitespace-pre-line">
                {t("address")}
              </address>
            </div>
            {/* Quick Links */}
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <h3 className="text-xl font-medium pb-1 pl-3 border-b border-[#35434D] ">
                {t("quickLinks")}
              </h3>
              <ul>
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block py-1.5 pl-3 text-sm text-white/70 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Products */}
            <div className="w-full md:w-2/4 flex flex-col gap-2">
              <h3 className="text-xl font-medium mb-1 pb-1 pl-3 border-b border-[#35434D]">
                {t("products")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <ul className="flex flex-col gap-1">
                  {productsLeft.map((item) => (
                    <li
                      key={item}
                      className="py-1.5 pl-3 text-sm text-white/70"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  {productsRight.map((item) => (
                    <li
                      key={item}
                      className="py-1.5 pl-3 text-sm text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Lower */}
          <div className="flex pl-3 flex-col items-center space-y-2 gap-4">
            {/* Policy Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {policyLinks.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="absolute bottom-1 py-2 items-start text-white text-xs">
              {t("copyright")}
            </div>
          </div>
        </div>
        {/* Mobil */}
        <div className="flex flex-col gap-2 md:hidden">
          <MobileAccordion title={t("company")}>
            <div>
              <OrbitingLogo />
              <p className="not-italic text-sm text-white/70 leading-relaxed">
                {t("companyDesc")}
              </p>
              <div className="flex gap-2 my-2">
                <FollowUs />
              </div>
              <address className="not-italic text-sm text-white/70 leading-relaxed whitespace-pre-line">
                {t("address")}
              </address>
            </div>
          </MobileAccordion>
          <MobileAccordion title={t("quickLinks")}>
            <ul>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="block py-1.5 text-sm text-white/70 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileAccordion>
          <MobileAccordion title={t("products")}>
            <div className="grid grid-cols-1 gap-2">
              <ul className="flex flex-col gap-1">
                {productsLeft.map((item) => (
                  <li key={item} className="py-1.5 text-sm text-white/70">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1">
                {productsRight.map((item) => (
                  <li key={item} className="py-1.5 text-sm text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MobileAccordion>
          <MobileAccordion title={t("policy")}>
            <div className="flex flex-col gap-1">
              {policyLinks.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </MobileAccordion>
          <div className="pt-3 text-white text-xs text-center">
            {t("copyright")}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
