"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headings = ["Home", "About", "Contact", "Services"];

  return (
    <header className="max-md:py-0 max-md:fixed z-50 w-full text-white md:px-16 px-6 lg:px-24 py-3 flex justify-between ">
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
          className="md:hidden ml-auto  mt-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
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
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-blue-600 p-4 space-y-4 md:hidden">
            {headings.map((heading, idx) => (
              <Link key={`${heading}-${idx}`} href="/">
                <span className="block hover:text-white">{heading}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
