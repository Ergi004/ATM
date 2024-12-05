"use client";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { FaChartBar, FaHistory } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

export const SideMenu = () => {
  const router = useRouter();

  return (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className=" cursor-pointer">
            <div
              className="flex p-2 w-full items-center gap-4"
              onClick={() => router.push("/dashboard?page=overview")}
            >
              <FaChartBar /> Overview
            </div>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <div
              className="flex p-2 w-full items-center gap-4"
              onClick={() => router.push("/dashboard?page=deposit-account")}
            >
              <RiBankFill />
              Deposit Account
            </div>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <div
              className="flex w-full p-2 items-center gap-4"
              onClick={() => router.push("/dashboard?page=savings-account")}
            >
              <FaCircleDollarToSlot />
              Savings Account
            </div>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem className="cursor-pointer">
            <div
              className="flex p-2 w-full items-center gap-4"
              onClick={() => router.push("/dashboard?page=exchange")}
            >
              <RiExchangeDollarLine />
              Exchange
            </div>
          </CommandItem>
          <CommandItem className="cursor-pointer">
            <div
              className="flex w-full p-2 items-center gap-4"
              onClick={() => router.push("/dashboard?page=transaction-history")}
            >
              <FaHistory />
              Transaction Histroy
            </div>
          </CommandItem>
          {/* <CommandItem
            onClick={() => router.push("/dashboard?page=profile")}
            className="md:hidden"
          >
            <FaHistory />
            Profile
          </CommandItem> */}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
