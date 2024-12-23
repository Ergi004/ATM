import React from "react";
import { HeroCarousel } from "../HeroBannerCaruosel/HeroCarousel";
import { LoanCalculator } from "../LoanCalculator/LoanCalculator";
import { CurrencySlider } from "../CurrencySlider/CurrencySlider";

export const HeroBanner = () => {
  return (
    <div className="w-full flex space-y-14 flex-col h-full pb-14">
      <HeroCarousel />
      <CurrencySlider />
      <LoanCalculator />
    </div>
  );
};
