"use client";

import React, { useState, useEffect } from "react";

import Events from "@/components/Events";
import Map from "@/components/Map";
import Banner from "@/components/Banner";
import NavbarHome from "@/components/NavbarHome";
import HeroCarousel from "@/components/hero";

import Link from "next/link";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <Banner />
      {windowSize.width > 1000 && (
        <div className="relative w-full flex flex-col items-center justify-center">
          <NavbarHome className="top-8" />
        </div>
      )}
      <HeroCarousel />
      <Events />
    </div>
  );
}
