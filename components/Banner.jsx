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
          <div className="flex gap-5 ml-20 mr-20 h-10">
            <img
              src="assets/images/aot-logo.png"
              alt="logo"
              className="h-10 w-20"
            />
            {windowSize.width > 1100 && (
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
            color: "black",
            backgroundColor: "white",
          },
          navigationCardSmall: {
            color: "black",
            backgroundColor: "white",
          },
          navigationBarLarge: {
            color: "black",
            backgroundColor: "white",
          },
          animatinDelay: 5,
          zIndex: 5,
        }}>
        {windowSize.width > 1000 ? (
          <ul style={{ marginRight: "10px" }}>
            {/* TODO: Add search bar -------------------------------------------------------------------------- */}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </li>
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
