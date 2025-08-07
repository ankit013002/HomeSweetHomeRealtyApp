import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { House, Search } from "lucide-react";
import TransactionSelection from "./TransactionSelection";
import BedroomSelection from "./BedroomSelection";
import HomeTypeSelection from "./HomeTypeSelection";

const Navbar = () => {
  return (
    <div className="w-full max-h-[5vh] bg-neutral-900 flex items-center p-2 gap-x-5">
      <div className="flex font-bold text-white items-center gap-x-1">
        <House />
        <span>HomeSweetHome</span>
      </div>
      <div className="flex w-full max-w-sm items-center">
        <Input
          type="text"
          className="rounded-bl-1xl rounded-tl-1xl rounded-r-none border-neutral-500 text-white"
          placeholder="Search for a home"
        />
        <Button
          type="submit"
          className="rounded-br-1xl rounded-tr-1xl rounded-l-none border-neutral-500 bg-neutral-500"
          variant="outline"
        >
          <Search className="text-neutral-900" />
        </Button>
      </div>
      <TransactionSelection />
      <BedroomSelection />
      <HomeTypeSelection />
    </div>
  );
};

export default Navbar;
