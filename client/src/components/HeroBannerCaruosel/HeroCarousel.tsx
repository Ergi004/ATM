// HeroCarousel.tsx
"use client";
import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="w-full">
                <img
                  className="w-full max-h-[600px] h-full"
                  src="images/bank.png"
                  alt="carousel-image"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex max-lg:hidden space-x-6 mt-8 w-full max-w-4xl">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-col font-semibold  transition-all duration-300  rounded ${
              current === index ? "text-secondary " : "text-gray-400"
            }`}
          >
            <span className=" text-left">{`0${index + 1}.`}</span>
            <span className=" text-left">DEPOSIT RECORD</span>
          </div>
        ))}
      </div>
    </div>
  );
}
