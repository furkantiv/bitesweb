"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Page = "home" | "about" | "products" | "news" | "career" | "contact";

interface PageContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
