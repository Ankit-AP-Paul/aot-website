import React from "react";

import Events from "@/components/Events";
import Map from "@/components/Map";
import Banner from "@/components/Banner";
import NavbarHome from "@/components/NavbarHome";
import HeroCarousel from "@/components/hero";

import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  // const departments = ["CSE", "CSBS", "ME", "ECE", "EE", "EEE", "MCA"];
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
      <Header />
      <HeroCarousel />
      <div className="relative w-full">
        <div className="absolute z-10 w-full"><Events /></div>
      </div>
    </div>
  );
}
