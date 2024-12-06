"use client";
import React from "react";
import { Chart } from "./Chart";
import { useSearchParams } from "next/navigation";

export const BankAccounts = () => {
  const searchParams = useSearchParams();

  const accountType = searchParams.get("page");
  return (
    <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 lg:px-10 w-full">
      <div className="col-span-full">
        <Chart
          title={
            accountType === "deposit-account"
              ? "Deposit account"
              : accountType === "savings-account" && "Savings account"
          }
          description="okej"
        />
      </div>
    </div>
  );
};
