"use client";
import React, { useEffect, useState } from "react";
import { Chart } from "./Chart";
import { useSearchParams } from "next/navigation";
import { AccountApi } from "@/api/BankAccount";

export const BankAccounts = () => {
  const searchParams = useSearchParams();
  const [bankAccounts, setBankAccounts] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const accountType = searchParams.get("page");

  const getAccounts = async () => {
    const response = await AccountApi.getUserAccounts(Number(userId));
    console.log(response);
    setBankAccounts(response);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 gap-y-6 lg:px-10 w-full">
      {bankAccounts.map((acc, idx) => (
        <div key={`account=${idx}`} className="col-span-full">
          <Chart
            title={
              accountType === "deposit-account"
                ? "Deposit account"
                : accountType === "savings-account" && "Savings account"
            }
            description="okej"
          />
        </div>
      ))}
    </div>
  );
};
