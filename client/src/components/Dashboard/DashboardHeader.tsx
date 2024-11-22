/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { Input } from "../ui/input";
import clsx from "clsx";
export const DashboardHeader = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div className="w-full bg-white justify-between h-20 items-center px-4 md:px-8 py-6 flex mt-0 shadow-md">
      <button
        className={clsx(
          "lg:hidden mr-4 p-1 transition-all duration-200",
          isOpen ? "opacity-0" : "opacity-100 "
        )}
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
            d={"M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <Input type="search" className="max-w-96 mr-6" />
      <div className="flex items-center ">
        <div className="bg-[#d62631]/10 ml-auto rounded-full p-1.5">
          <IoMdNotifications color="#d62631" />
        </div>
        <div className="flex max-md:hidden w-full ml-6  items-center ">
          <div className="flex flex-col min-w-24 text-right">
            <span className="font-bold text-lg">Ergi Lama</span>
            <span className=" text-sm">View Profile</span>
          </div>
          <img
            src="/images/hero.png"
            className="h-12 w-12 ml-1.5 rounded-full"
            alt="hero"
          />
          <div className="w-full max-w-5 ml-2">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};
