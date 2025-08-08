import { getMockData } from "@/utils/MockData";
import React from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList = () => {
  const properties = getMockData();

  return (
    <div className="max-h-screen">
      <div className="bg-neutral-900 p-1 grid grid-cols-2 overflow-y-scroll max-h-screen gap-1">
        {properties.map((property, index) => {
          return (
            <div key={property.id}>
              <PropertyCard property={property} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertiesList;
