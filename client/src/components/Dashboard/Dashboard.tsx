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
import { useSearchParams } from "next/navigation";
import { BankAccounts } from "./BankAccounts";
import { TransactionTable } from "./TransactionTable";
import { AccountApi } from "@/api/BankAccount";
import { IBankAccounts } from "@/api/types";

export const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [bankAccounts, setBankAccounts] = useState<IBankAccounts[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const currentPage = searchParams.get("page");
  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await Auth.checkAuth();
      if (!authStatus) {
        router.push("/login");
      }
    };

    checkAuthStatus();
  }, []);

  const userId = sessionStorage.getItem("userId");

  const getAccounts = async () => {
    try {
      if (!userId) throw new Error("User ID is missing");
      const response = await AccountApi.getUserAccounts(Number(userId));
      setBankAccounts(response);
    } catch {
      setError("Failed to fetch accounts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="min-h-screen relative flex bg-[#d62631]/10 ">
      <div
        className={clsx(
          "bg-white min-h-screen w-full sm:w-72 lg:w-96 px-4  max-lg:fixed max-lg:-translate-x-full top-0  bottom-0 transition-all duration-500 ease-out z-50",
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
          <div
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-0 bottom-0 right-0 bg-black/40 backdrop-blur-sm	 left-0 z-40"
          />
        )}
        <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        {(currentPage === "overview" || currentPage == null) && (
          <Overview bankAccounts={bankAccounts} />
        )}
        {currentPage === "deposit-account" && (
          <BankAccounts
            bankAccounts={bankAccounts}
            errorMsg={error}
            loading={loading}
          />
        )}
        {currentPage === "savings-account" && (
          <BankAccounts
            bankAccounts={bankAccounts}
            errorMsg={error}
            loading={loading}
          />
        )}
        {currentPage === "transaction-history" && (
          <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 lg:px-10 w-full">
            <div className="col-span-12 rounded-xl border border-stroke bg-white shadow-md p-6">
              <TransactionTable />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
