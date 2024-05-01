import Map from "@/components/Map";
import Navbar from "@/components/Navbar";

import Link from "next/link";
import HeroCarousel from "../components/hero";

export default function Home() {
  const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
  return (
    <div className="bg-primary">
      {/* <h1 className="text-tertiary text-5xl pb-10">Home</h1> */}
      {/* <div>
        {departments.map((department, index) => (
          <div key={index}>
            <Link href={`/department/${department}`}>
              {<p className="text-2xl hover:text-3xl">{department}</p>}
            </Link>
          </div>
        ))}
      </div> */}
      <div className="relative w-full flex flex-col">
        <Navbar className="top-2" />
        <HeroCarousel/>
        {/* Dummy Div */}
        <div className="h-[2000px] w-full bg-red-500"></div>
      </div>
    </div>
  );
}
