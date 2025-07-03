"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import TimelineComponent from "@/components/ui/TimelineComponent";
import Footer from "@/components/layout/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  useEffect(() => {
    document.title = "Bites - About Us";
  }, []);

  return (
    <>
      <Head>
        <title>Bites - About Us</title>
      </Head>
      <main className="max-w-7xl mx-auto px-6 md:px-0 space-y-12 md:py-20">
        {/* Our Mission & Vision Section */}
        <section>
          <div className="p-6 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              {/* Text Alanı */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex flex-col gap-8">
                  <h2 className="text-white text-4xl font-semibold font-sans">
                    Our Mission & Vision
                  </h2>
                  <div className="text-white text-base font-normal font-sans leading-relaxed">
                    Our mission is to help businesses, institutions and
                    individuals reap the benefits of technology through our
                    innovative software and products. We strive to offer our
                    customers and partners affordable, accessible, and secure
                    technologies in the defense industry and information
                    technologies.
                    <br />
                    Our vision is to be recognised as an international
                    innovation and R&D center, to help build a sustainable
                    future for the world by developing software and products
                    that will accelerate digitalization globally.
                  </div>
                  <div className="text-white/60 text-sm font-normal font-sans leading-tight">
                    I understand that my data will be held securely in
                    accordance with the{" "}
                    <span className="underline">privacy policy</span>
                  </div>
                </div>
                <div className="mt-8">
                  <AnimatedButton text="Contact Us" />
                </div>
              </div>
              {/* Görsel Alanı */}
              <div className="flex-1 flex items-center justify-center min-w-0">
                <div className="w-full max-w-[600px] aspect-[4/3] rounded-lg overflow-hidden bg-black flex-shrink-0">
                  <Image
                    src={`${basePath}/images/about/about-mission.jpg`}
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
            <div className="mb-6 mx-6">
              <h2 className="text-4xl font-semibold text-white mb-3">
                Our Core Values
              </h2>
              <h3 className="text-2xl font-medium text-white/80">
                We specialize in creating human-centricity.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-blue-600/20 hover:border-blue-500 transition-all duration-200 flex flex-col min-h-44"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-white text-base flex-1">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <div className="mb-6 px-6">
            <h2 className="text-4xl font-semibold text-white mb-3">
              Our History
            </h2>
            <h3 className="text-2xl font-medium text-white/80">
              We specialize in creating human-centricity.
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
