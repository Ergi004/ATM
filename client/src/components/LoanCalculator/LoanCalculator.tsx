"use client";
import React, { useState } from "react";

export function LoanCalculator() {
  const [amount, setAmount] = useState<number>(400000);
  const [period, setPeriod] = useState<number>(300);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const interestRate = 3;

  const calculateLoan = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyInstallment =
      (amount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -period));
    const total = monthlyInstallment * period;

    setMonthlyPayment(monthlyInstallment);
    setTotalPayment(total);
  };

  return (
    <div className="loan-calculator mx-auto max-md:flex-col flex px-6 lg:px-14 py-6 rounded-lg">
      <div className="input-section justify-center flex flex-col w-full md:w-2/3 p-4 bg-white/80">
        <h2 className="text-red-600 text-lg font-bold mb-2">LOAN CALCULATOR</h2>
        <div className="flex items-end gap-4 mb-4">
          <label className="font-semibold text-gray-600 mr-3">AMOUNT</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border-b  border-gray-200 p-1  w-full"
          />
        </div>
        <div className="flex items-end gap-4 mb-4">
          <label className="font-semibold focus:ring-0 focus:border-none text-gray-600  max-w-44 w-full">
            THE PERIOD (months)
          </label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
            className="border-b border-gray-200 p-1  w-full"
          />
        </div>
        <button
          onClick={calculateLoan}
          className="mt-6 bg-red-600 text-white px-4 py-2 font-bold rounded"
        >
          CALCULATE
        </button>
        <p className="text-xs mt-4 text-gray-500">
          The calculated installment is approximate considering the minimum
          interest rate for the product as a reference rate.
        </p>
      </div>

      <div className="results-section w-full md:w-1/3 p-4 bg-red-600 text-white  flex flex-col justify-center items-center">
        <h3 className="text-sm font-semibold">MONTHLY INSTALLMENT</h3>
        <p className="text-3xl font-bold">
          EUR {monthlyPayment ? monthlyPayment.toFixed(2) : "0.00"}
        </p>

        <h3 className="mt-6 text-sm font-semibold">TOTAL PAYMENT</h3>
        <p className="text-2xl font-bold">
          EUR {totalPayment ? totalPayment.toFixed(2) : "0.00"}
        </p>

        <h3 className="mt-6 text-sm font-semibold">INTEREST (%)</h3>
        <p className="text-2xl font-bold">{interestRate}</p>

        <button className="mt-6 bg-white text-red-600 px-6 py-2 font-bold rounded">
          APPLY FOR A LOAN
        </button>
      </div>
    </div>
  );
}
