export type PropertyType = {
  id: number;
  price: string;
  bedrooms: string;
  sqft: number;
  address: string;
  type: "Single Family" | "Condo" | "Townhouse" | "Multi-Family";
  image: string;
};
