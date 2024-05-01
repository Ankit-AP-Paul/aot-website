"use client";
import React, { useState, useRef, useEffect } from "react";
import { Inter, Montserrat, Roboto, Poppins } from "next/font/google";
import "@/app/globalicons.css";

import { LayoutGrid } from "./ui/layout-grid";
import p1 from "@/app/data/images/p1.jpg";
import p2 from "@/app/data/images/p2.jpg";
import p3 from "@/app/data/images/p3.jpg";
import p4 from "@/app/data/images/p4.jpg";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function Events() {
  return (
    <div className="bg-soothing   py-8 bg-grid-[#9042f5]/[0.1]">
      <div className="h-max w-screen">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

export default Events;

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`text-white text-center text-4xl font-medium tracking-wide mb-5 uppercase ${montserrat.className}`}
      >
        Techfiesta
      </div>
      <div className={`text-white text-center mb-8 ${inter.className}`}>
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </div>
      <table
        className={`text-white text-center border-t-[0.5px] border-white rounded mb-8 mx-auto`}
      >
        <tbody>
          <tr className="border-b-[0.5px] border-white">
            <td className="px-6 py-4 border-r-[0.5px] border-white ">
              <div className="material-symbols-outlined">calendar_month</div>
            </td>
            <td className={`px-6 ${poppins.className}`}>Tuesday, December 3</td>
          </tr>
          <tr className="border-b-[0.5px] border-white">
            <td className="px-6 py-4 border-r-[0.5px] border-white ">
              <div className="material-symbols-outlined">currency_rupee</div>
            </td>
            <td className={`px-6 ${poppins.className}`}>20 / member</td>
          </tr>
          <tr className="border-b-[0.5px] border-white">
            <td className="px-6 py-4 border-r-[0.5px] border-white ">
              <div className="material-symbols-outlined">numbers</div>
            </td>
            <td className={`px-6 ${poppins.className}`}>3 Rounds</td>
          </tr>
          <tr className="border-b-[0.5px] border-white">
            <td className="px-6 py-4 border-r-[0.5px] border-white ">
              <div className="material-symbols-outlined">how_to_reg</div>
            </td>
            <td className={`px-6 ${poppins.className}`}>
              D-Block ground floor registration
            </td>
          </tr>
        </tbody>
      </table>
      <div className={`text-white ml-5 self-start ${inter.className}`}>
        Register online : Link
      </div>
      <div
        className={`text-white text-center ml-5 mt-8 mb-6 border-white border-2 rounded p-2 px-auto ${inter.className}`}
      >
        Download Brochure
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: p1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: p2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: p3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: p4,
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
