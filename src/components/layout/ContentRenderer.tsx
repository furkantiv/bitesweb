"use client";

import React from "react";
import { usePage } from "@/contexts/PageContext";
import TrustHero from "../sections/TrustHero";
import AboutPage from "@/pages/about/About";
import ProductsPage from "@/pages/products/Product";
import Home from "@/pages/home/Home";

const ContentRenderer = () => {
  const { currentPage } = usePage();

  switch (currentPage) {
    case "home":
      return (
        <div>
          <Home />
        </div>
      );
    case "about":
      return (
        <div>
          <AboutPage />
        </div>
      );
    case "products":
      return (
        <div>
          <ProductsPage />
        </div>
      );
    case "news":
      return <div>News Content</div>;
    case "career":
      return <div>Career Content</div>;
    case "contact":
      return <div>Contact Content</div>;
    default:
      return <div>Select a page from navigation.</div>;
  }
};

export default ContentRenderer;
