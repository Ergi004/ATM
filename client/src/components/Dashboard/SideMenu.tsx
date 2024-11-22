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

export const SideMenu = () => {
  return (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <FaChartBar /> Overview
          </CommandItem>
          <CommandItem>
            <RiBankFill />
            Deposit Account
          </CommandItem>
          <CommandItem>
            <FaCircleDollarToSlot />
            Savings Account
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <RiExchangeDollarLine />
            Exchange
          </CommandItem>
          <CommandItem>
            <FaHistory />
            Transaction Histroy
          </CommandItem>
          <CommandItem className="md:hidden">
            <FaHistory />
            Profile
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
