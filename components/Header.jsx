"use client";

import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import NavbarHome from "@/components/NavbarHome";

export default function Header() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    function handleScroll() {
      // Example criteria: Hide component when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="relative w-fit h-fit">
        <div className="absolute z-40">
          <Banner />
        </div>

        {windowSize.width > 1000 && (
          <div className="absolute w-full flex flex-col items-center justify-center z-50">
            <NavbarHome className="top-0" />
          </div>
        )}
      </div>
    </>
  );
}
