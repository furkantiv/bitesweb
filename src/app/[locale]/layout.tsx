import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import Globe from "@/components/animations/Globe";
import Header from "@/components/layout/Header";
import GlobeController from "@/components/animations/GlobeController";
import { GlobeProvider } from "@/contexts/GlobeContext";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ClientOnlyLoader from "@/components/layout/ClientOnlyLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bites",
  description:
    "BİTES is a technology-based innovative brand located in Ankara, having a wide range of product base including Next-Generation Computer Based Training Systems and Synthetic Environments, 3D Virtual Maintenance Trainers, Low-Cost Synthetic Training Aids and Hardware Components, Advanced Training Management Information Systems and Mission-Planning & After Action Review-Debriefing Software Solutions and a serious game-engine driven image generator for all kinds of virtual training applications.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ClientOnlyLoader>
          <NextIntlClientProvider>
            <div className="w-full bg-black text-white overflow-hidden relative">
              <GlobeProvider>
                <GlobeController />
                {/* Persistent background */}
                <div className="relative z-10">
                  <AnimatedBackground />
                  <Globe />
                </div>
                <Header />
                <div className="relative mt-20 z-20">{children}</div>
              </GlobeProvider>
            </div>
          </NextIntlClientProvider>
        </ClientOnlyLoader>
      </body>
    </html>
  );
}
