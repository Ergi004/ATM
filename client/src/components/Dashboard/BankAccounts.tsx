import React from "react";
import { Chart } from "./Chart";

export const BankAccounts = () => {
  return (
    <div className="flex flex-col pb-10 mt-10 md:px-8 px-4 lg:px-10 w-full">
      <div className="col-span-full">
        <Chart />
      </div>
    </div>
  );
};
