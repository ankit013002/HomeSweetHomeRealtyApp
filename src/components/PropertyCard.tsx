"use client";

import React from "react";
import { PropertyType } from "./types/PropertyType";
import Image from "next/image";
import { Button } from "./ui/button";

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="max-w-[15vw] max-h-[30vh] bg-black rounded-xl">
      <Image
        className="w-full h-50 object object-center rounded-xl"
        src={property.image}
        width={1000}
        height={1000}
        alt="Home"
      />
      <div className="p-2 gap-y-5 ">
        <div className="text-white">{property.price}</div>
        <div className="flex text-neutral-500 justify-between">
          <div>{property.bedrooms}</div>
          <div>{`${property.sqft} sqft`}</div>
        </div>
        <div className="text-neutral-500">{property.address}</div>
        <div className="flex justify-end">
          <Button
            onClick={() => console.log("Clicked")}
            className="bg-white text-black hover:cursor-pointer"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
