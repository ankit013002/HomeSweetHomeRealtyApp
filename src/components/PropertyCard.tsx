"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import type { PropertyType } from "./types/PropertyType";

export default function PropertyCard({ property }: { property: PropertyType }) {
  return (
    <div className="w-full bg-black rounded-xl">
      <Image
        className="w-full h-40 object-cover object-center rounded-t-xl"
        src={property.image}
        width={1000}
        height={1000}
        alt="Home"
      />
      <div className="p-2 space-y-2">
        <div className="text-white">{property.price}</div>
        <div className="flex text-neutral-500 justify-between">
          <div>{property.bedrooms}</div>
          <div>{`${property.sqft} sqft`}</div>
        </div>
        <div className="text-neutral-500 line-clamp-2">{property.address}</div>
        <div className="flex justify-end">
          <Button className="bg-white text-black">View Details</Button>
        </div>
      </div>
    </div>
  );
}
