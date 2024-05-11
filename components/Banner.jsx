"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import TextSlider from "@/components/TextSlider";

export default function Banner() {
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

  return (
    <div>
      <ResponsiveNavbar
        logo={
          <div className="flex gap-5 ml-20 mr-20">
            <img
              src="assets/images/aot-logo.png"
              alt="logo"
              className="h-10 w-20"
            />
            {windowSize.width > 1000 && (
              <div>
                <div className="h-1"></div>
                <TextSlider
                  name="Academy of Technology"
                  tagline="Transforming your vision into reality"
                />
              </div>
            )}
          </div>
        }
        styles={{
          navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
          navigationBarSmall: {
            backgroundColor: "aliceblue",
          },
          navigationCardSmall: {
            backgroundColor: "aliceblue",
          },
          navigationBarLarge: {
            backgroundColor: "aliceblue",
          },
          animatinDelay: 5,
          zIndex: 100000,
        }}>
        {windowSize.width > 1000 ? (
          <ul style={{ marginRight: "20px" }}>
            <li>Search</li>
          </ul>
        ) : (
          <ul style={{ marginRight: "10px" }}>
            <li>Academics</li>
            <li>Research</li>
            <li>Students</li>
            <li>Facilities</li>
          </ul>
        )}
      </ResponsiveNavbar>
    </div>
  );
}
