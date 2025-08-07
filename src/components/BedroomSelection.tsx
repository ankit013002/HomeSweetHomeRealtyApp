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

const BedroomSelection = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-auto text-white">
          <SelectValue className="text-white" placeholder="Bedrooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Transaction</SelectLabel>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4+">4+</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BedroomSelection;
