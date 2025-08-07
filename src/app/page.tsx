import PropertiesList from "@/components/PropertiesList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-neutral-800">
      <div className="flex grow "></div>
      <div className="flex">
        <PropertiesList />
      </div>
    </div>
  );
}
