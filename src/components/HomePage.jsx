import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AdSlider from "./AdSlider";
import CompProduct from "./CompProduct";
import InterestingProduct from "./InterestingProduct";
import ThemesSlider from "./ThemesSlider";

export default function HomePage() {
  return (
    <div>
      <Header />
      <AdSlider />
      <CompProduct start={1} end={7} />
      <InterestingProduct />
      <ThemesSlider />
      <CompProduct start={8} end={11} />
      <Footer />
    </div>
  );
}
