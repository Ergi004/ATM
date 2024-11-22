"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headings = ["Home", "About", "Contact"];

  if (typeof window !== "undefined") {
    window.document.body.style.overflow = isOpen ? "hidden" : "auto";
  }

  return (
    <>
      <header className="max-md:py-0 max-md:fixed z-50 w-full text-white md:px-16 px-6 lg:px-24 py-3 flex justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="max-md:hidden" href="/">
            <Image alt="flori" width={100} height={70} src="/images/logo.png" />
          </Link>
          <nav className="max-md:hidden text-gray-500 ">
            <div className="md:flex max-md:hidden space-x-6">
              {headings.map((heading, idx) => (
                <Link key={`${heading}-${idx}`} href="/">
                  <span className="hover:text-red-700 font-bold transition-colors duration-300">
                    {heading}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          <button
            className="md:hidden ml-auto z-50 p-1 bg-white   mt-5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill={" #d62631"}
              stroke={" #d62631"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <nav
            className={clsx(
              "md:hidden border px-6 pb-6 border-gray-400 shadow-md bg-white transition-all duration-300 z-40",
              isOpen
                ? "absolute translate-y-0 top-0 left-0 w-full  p-4 "
                : "absolute -translate-y-full left-0 w-full  p-4  "
            )}
          >
            <div className="my-3">
              <Link className="" href="/">
                <Image
                  alt="flori"
                  width={50}
                  height={30}
                  src="/images/logo.png"
                />
              </Link>
            </div>
            <div className="space-y-3 flex flex-col">
              {headings.map((heading, idx) => (
                <Link
                  className={clsx("border-b border-gray-400 pb-3")}
                  key={`${heading}-${idx}`}
                  href="/"
                >
                  <span
                    className={clsx(
                      "block hover:text-secondary font-semibold text-gray-600"
                    )}
                  >
                    {heading}
                  </span>
                </Link>
              ))}
              <Link
                className={clsx("border-b border-gray-400 pb-3", "border-none")}
                key={`Login-4`}
                href="/login"
              >
                <span
                  className={clsx(
                    "block hover:text-secondary font-semibold text-gray-600"
                  )}
                >
                  Login
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          "md:hidden ",
          isOpen
            ? "absolute bottom-0 bg-black/60 left-0 right-0 z-40 h-full top-0"
            : "absolute top-0 left-0 right-0"
        )}
      />
    </>
  );
};
