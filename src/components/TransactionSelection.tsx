import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const TransactionSelection = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-auto text-white">
          <SelectValue placeholder="Buy" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Transaction</SelectLabel>
            <SelectItem value="buy">Buy</SelectItem>
            <SelectItem value="sell">Sell</SelectItem>
            <SelectItem value="rent">Rent</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TransactionSelection;
