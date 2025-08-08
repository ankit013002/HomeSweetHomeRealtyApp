import MapContainer from "@/components/MapContainer";
import PropertiesList from "@/components/PropertiesList";
import Image from "next/image";
import Map from "react-map-gl/mapbox";

export default function Home() {
  return (
    <div className="flex h-full bg-neutral-800">
      <div className="flex-1 min-w-0 relative">
        <MapContainer />
      </div>
      <div className="flex w-[540px]">
        <PropertiesList />
      </div>
    </div>
  );
}
