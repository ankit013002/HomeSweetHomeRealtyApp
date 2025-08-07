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

const HomeTypeSelection = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-auto">
          <SelectValue placeholder="Select home type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Home Type</SelectLabel>
            <SelectItem value="single_family">Single Family</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="multi_family">Multi-Family</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HomeTypeSelection;
