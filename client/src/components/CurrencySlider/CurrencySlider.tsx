/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import "./currency-styles.css";

interface CurrencyRates {
  currency: string;
  buy: number;
  sell: number;
  countryCode: string;
}

export const currencyRatesALL: CurrencyRates[] = [
  { currency: "USD", countryCode: "US", buy: 92.43, sell: 92.45 },
  { currency: "EUR", countryCode: "EU", buy: 109.25, sell: 109.3 },
  { currency: "JPY", countryCode: "JP", buy: 0.63, sell: 0.64 },
  { currency: "GBP", countryCode: "GB", buy: 130.25, sell: 130.28 },
  { currency: "CAD", countryCode: "CA", buy: 67.7, sell: 67.73 },
  { currency: "AUD", countryCode: "AU", buy: 57.92, sell: 57.94 },
  { currency: "CHF", countryCode: "CH", buy: 102.8, sell: 102.83 },
  { currency: "CNY", countryCode: "CN", buy: 12.71, sell: 12.72 },
  { currency: "HKD", countryCode: "HK", buy: 11.82, sell: 11.83 },
  { currency: "NZD", countryCode: "NZ", buy: 54.63, sell: 54.65 },
  { currency: "SEK", countryCode: "SE", buy: 9.17, sell: 9.18 },
  { currency: "KRW", countryCode: "KR", buy: 0.07, sell: 0.08 },
  { currency: "SGD", countryCode: "SG", buy: 67.34, sell: 67.35 },
  { currency: "NOK", countryCode: "NO", buy: 9.49, sell: 9.5 },
  { currency: "INR", countryCode: "IN", buy: 1.1, sell: 1.11 },
];

export const CurrencySlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
    sliderRef.current.addEventListener("mousemove", handleMouseMove);
    sliderRef.current.addEventListener("mouseup", handleMouseUp);
    sliderRef.current.addEventListener("mouseleave", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 3;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    sliderRef.current.style.cursor = "grab";
    sliderRef.current.removeEventListener("mousemove", handleMouseMove);
    sliderRef.current.removeEventListener("mouseup", handleMouseUp);
    sliderRef.current.removeEventListener("mouseleave", handleMouseUp);
  };

  return (
    <div className="lg:px-14 px-4 sm:px-6 ">
      <div className="currency-slider-wrapper overflow-hidden text-gray-500 py-2">
        <div
          className="currency-slider flex animate-marquee"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          style={{ cursor: "grab" }}
        >
          {currencyRatesALL.map((rate, index) => (
            <div
              key={index}
              className="currency-item border h-20 space-y-2 justify-center flex flex-col px-4 text-lg"
            >
              <div className="currency-flag w-full flex mr-2">
                <span className="mr-4">
                  <img
                    src={`https://flagcdn.com/w20/${rate.countryCode.toLowerCase()}.png`}
                    alt={rate.currency}
                    className="ml-2 inline-block"
                  />
                </span>
                <span className="font-semibold">{rate.currency}</span>
              </div>
              <div className="flex space-x-3 items-center text-sm">
                <span className="flex items-center space-x-0.5">
                  <span className="rotate-180">
                    <IoMdArrowDropdown color="green" />
                  </span>{" "}
                  Buy: {rate.buy}
                </span>
                <span className="flex items-center space-x-0.5">
                  <IoMdArrowDropdown color="red" />
                  Sell: {rate.sell}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
