/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "../../api/Auth";
import { SideMenu } from "./SideMenu";
import { DashboardHeader } from "./DashboardHeader";
import clsx from "clsx";
import { Overview } from "./Overview";

export const Dashboard = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await Auth.checkAuth();
      if (!authStatus) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuthStatus();
  }, []);

  if (!isAuthenticated) return null;
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="min-h-screen relative flex bg-[#d62631]/10 ">
      <div
        className={clsx(
          "bg-white min-h-screen h-full w-full sm:w-72 lg:w-80 px-4  max-lg:absolute max-lg:-translate-x-full top-0  bottom-0 transition-all duration-500 ease-out z-50",
          isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
        )}
      >
        <div className="px-3 py-6 flex items-center space-x-4">
          <img src="/images/logo.png" className=" h-12" alt="logo" />
          <div className="flex justify-between w-full items-center realtive ">
            <span className="text-xl font-bold">Dashboard</span>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
                  d={"M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>
          </div>
        </div>
        <SideMenu />
      </div>
      <div className="flex flex-col relative w-full">
        {isOpen && (
          <div className="lg:hidden absolute top-0 bottom-0 right-0 bg-black/40 left-0 z-40" />
        )}
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <Overview />
      </div>
    </div>
  );
};
