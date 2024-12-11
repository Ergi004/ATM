"use client";
import React from "react";
import { Chart } from "./Chart";
import { useSearchParams } from "next/navigation";
import { IBankAccounts } from "@/api/types";

export const BankAccounts = ({
  bankAccounts,
  errorMsg,
  loading,
}: {
  bankAccounts: IBankAccounts[];
  errorMsg: string | null;
  loading: boolean;
}) => {
  const searchParams = useSearchParams();

  const accountType = searchParams.get("page");

  const selectedAccount = bankAccounts.find(
    (account) => account.accountType === accountType
  );

  if (loading) return <div className="m-auto">Loading accounts...</div>;
  if (errorMsg) return <div className="m-auto">{errorMsg}</div>;
  if (!selectedAccount)
    return (
      <div className="m-auto">No account found for the selected type.</div>
    );

  return (
    <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 gap-y-6 lg:px-10 w-full">
      <Chart
        title={
          selectedAccount.accountType === "deposit-account"
            ? "Deposit account"
            : "Savings account"
        }
        description={`okay`}
      />
    </div>
  );
};
