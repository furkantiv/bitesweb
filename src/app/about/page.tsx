"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import TimelineComponent from "@/components/ui/TimelineComponent";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const values = [
  {
    title: "Innovation",
    desc: "Pushing boundaries with bold ideas to achieve exceptional results.",
  },
  {
    title: "Passion",
    desc: "Passionate engagement driving excellence in every project we undertake.",
  },
  {
    title: "Agility",
    desc: "Quick adaptation enabling us to lead and thrive amidst change.",
  },
  {
    title: "Trust",
    desc: "Transparency and integrity form the foundation of our lasting relationships.",
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
      <main className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20">
        <section className="mb-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              About Bites
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Empowering innovation through technology.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                Our mission is to provide cutting-edge technological solutions
                to enable businesses, institutions, and individuals to excel in
                their fields. We are committed to delivering secure, accessible,
                and innovative products for the defense industry and beyond.
              </p>
              <AnimatedButton text="Get in Touch" color="#004DFF" />
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 relative w-full h-72 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={`${basePath}/images/about/about-mission.png`}
                alt="Mission"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Our Vision
              </h2>
              <p className="text-gray-300 mb-6">
                To be a globally recognized leader in innovation and digital
                transformation, creating sustainable technological advancements
                that contribute positively to the world.
              </p>
              <AnimatedButton text="Learn More" color="#004DFF" />
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 relative w-full h-72 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={`${basePath}/images/about/about-mission.png`}
                alt="Vision"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-xl backdrop-blur hover:border-blue-500 transition-all duration-200 hover:shadow-blue-600/20"
              >
                <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
          <TimelineComponent />
        </section>
      </main>
    </>
  );
}
