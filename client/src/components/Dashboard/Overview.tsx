import React from "react";
import { LuEye } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { Chart } from "./Chart";
import { TransactionTable } from "./TransactionTable";

export const Overview = () => {
  return (
    <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 lg:px-10 w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {/* Views */}
        <div className="flex p-6 shadow-md w-full rounded-xl bg-white flex-col">
          <div className="p-2 mb-5 bg-[#d62631]/10 w-11 h-11 flex items-center justify-center rounded-full">
            <LuEye />
          </div>
          <span className="text-2xl font-bold ">$3.456K</span>
          <div className="flex justify-between">
            <span>Total views</span>
            <span className="flex items-center ">
              <span className="text-[#3fc246] mr-2">0.43%</span>
              <span>
                <FaArrowUp color="#3fc246" />
              </span>
            </span>
          </div>
        </div>

        <div className="flex p-6 shadow-md bg-white w-full rounded-xl flex-col">
          <div className="p-2 mb-5 bg-[#d62631]/10 w-11 h-11 flex items-center justify-center rounded-full">
            <MdOutlineShoppingCart />
          </div>
          <span className="text-2xl font-bold ">$45,2K</span>
          <div className="flex justify-between">
            <span>Total profit</span>
            <span className="flex items-center ">
              <span className="text-[#3fc246] mr-2">4.35%</span>
              <span>
                <FaArrowUp color="#3fc246" />
              </span>
            </span>
          </div>
        </div>

        <div className="flex p-6 shadow-md bg-white w-full rounded-xl flex-col">
          <div className="p-2 mb-5 bg-[#d62631]/10 w-11 h-11 flex items-center justify-center rounded-full">
            <FiShoppingBag />
          </div>
          <span className="text-2xl font-bold ">2.450</span>
          <div className="flex justify-between">
            <span>Total Product</span>
            <span className="flex items-center ">
              <span className="text-[#3fc246] mr-2">2.59%</span>
              <span>
                <FaArrowUp color="#3fc246" />
              </span>
            </span>
          </div>
        </div>

        <div className="flex p-6 shadow-md  w-full rounded-xl bg-white flex-col">
          <div className="p-2 mb-5 bg-[#d62631]/10 w-11 h-11 flex items-center justify-center rounded-full">
            <FiShoppingBag />
          </div>
          <span className="text-2xl font-bold ">3.456</span>
          <div className="flex justify-between">
            <span>Total Product</span>
            <span className="flex items-center ">
              <span className="text-red-600 mr-2">0.95%</span>
              <span className="rotate-180">
                <FaArrowUp color="red" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 border-stroke  2xl:col-span-8">
          <Chart />
        </div>
        <div className="col-span-12 rounded-xl border border-stroke bg-white shadow-md p-6  2xl:col-span-4">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};
