/* eslint-disable @next/next/no-img-element */
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
import { Button } from "../ui/button";
import Link from "next/link";

const carouselElements = [
  { title: "HOME LOANS", image: "images/loan.png" },
  { title: "DEPOSIT RECORD", image: "images/bank.png" },
];
export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
    setCurrent(index);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {carouselElements.map((el, index) => (
            <CarouselItem
              className="max-h-[500px] h-full lg:max-h-[700px]"
              key={`Carousel-el-${index}`}
            >
              <div className="w-full h-full">
                <img
                  className="w-full h-60   sm:h-[400px] xl:h-[800px] lg:h-[600px]"
                  src={el.image}
                  alt="carousel-image"
                />
              </div>
            </CarouselItem>
          ))}
          <CarouselItem
            className="sm:max-h-[500px]  lg:max-h-[800px] h-full"
            key={`Carousel-el-login`}
          >
            <div className="relative w-full items-center h-full justify-center flex">
              <div className="bg-white w-full sm:w-3/5 lg:w-2/5 sm:p-8 px-6 pt-6 sm:absolute left-12 rounded-lg flex flex-col max-sm:h-60">
                <div className="flex flex-col w-full">
                  <span className="text-xl lg:text-2xl  font-semibold">
                    Your Trusted Partner for Financial Growth
                  </span>
                  <hr className="border-gray-400 my-4 max-md:hidden" />

                  <p className="text-sm max-md:hidden">
                    Explore our wide range of services designed to fit your
                    needs — with personalized solutions, cutting-edge security,
                    and seamless banking at your fingertips.
                  </p>
                </div>

                <div className="w-full flex flex-col ">
                  <hr className="border-gray-400 my-4 " />

                  <span className="lg:text-lg font-semibold text-secondary">
                    Join Us Today
                  </span>

                  <p className="text-gray-400  text-sm">
                    Experience banking made easy, secure, and tailored just for
                    you.
                  </p>
                </div>
                <Link href="/register">
                  <Button className="w-full mt-auto sm:mt-4 bg-secondary hover:bg-secondary/80">
                    Register now
                  </Button>
                </Link>
              </div>
              <img
                className="max-sm:hidden sm:w-full sm:ml-auto sm:h-[400px] xl:h-[800px] lg:h-[600px] w-full"
                src="/images/loan.png"
                alt="carousel-image"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex sm:hidden -translate-y-4 justify-center  w-full max-w-4xl">
        {carouselElements.map((el, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={`w-6 h-1 cursor-pointer  transition-all duration-300 rounded-full ${
              current === index ? "bg-secondary" : "bg-gray-200"
            }`}
          />
        ))}
        <div
          onClick={() => handleClick(2)}
          key={2}
          className={`w-6 h-1 cursor-pointer   transition-all duration-300 rounded-full ${
            current === 2 ? "bg-secondary" : "bg-gray-200"
          }`}
        />
      </div>
      <div className="flex max-sm:hidden space-x-6 mt-8 w-full max-w-4xl">
        {carouselElements.map((el, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className={`w-full cursor-pointer h-full flex flex-col font-semibold transition-all duration-300 rounded ${
              current === index ? "text-secondary" : "text-gray-400"
            }`}
          >
            <div className="max-w-28 flex flex-col mx-auto">
              <span className="text-left">{`0${index + 1}.`}</span>
              <span className="text-left">{el.title}</span>
            </div>
          </div>
        ))}
        <div
          onClick={() => handleClick(2)}
          key={2}
          className={`w-full cursor-pointer h-full flex flex-col font-semibold transition-all duration-300 rounded ${
            current === 2 ? "text-secondary" : "text-gray-400"
          }`}
        >
          <div className="max-w-28 flex flex-col mx-auto">
            <span className="text-left">{`0${2 + 1}.`}</span>
            <span className="text-left">Create an account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
