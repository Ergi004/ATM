"use client";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FaChartBar, FaHistory } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  { title: "Overview", url: "overview", img: <FaChartBar /> },
  { title: "Deposit Account", url: "deposit-account", img: <RiBankFill /> },
  {
    title: "Savings Account",
    url: "savings-account",
    img: <FaCircleDollarToSlot />,
  },
  { title: "Exchange", url: "exchange", img: <RiExchangeDollarLine /> },
  {
    title: "Transaction History",
    url: "transaction-history",
    img: <FaHistory />,
  },
];
export const SideMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const curretnPage = searchParams.get("page");
  return (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Panels" className="">
          {menuItems.map((item, idx) => (
            <CommandItem key={`menu-item-${idx}`} className="cursor-pointer">
              <div
                className={clsx(
                  "flex p-2 w-full items-center border-r-4 my-1 gap-4 transition-all duration-300",
                  curretnPage === item.url && "border-r-4 border-secondary "
                )}
                onClick={() => router.push(`/dashboard?page=${item.url}`)}
              >
                {item.img}
                {item.title}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
