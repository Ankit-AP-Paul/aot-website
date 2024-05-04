"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import "@/app/globals.css";
import "@/app/globalicons.css";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  // sm:h-[1000px]:w-72 large-tablet:w-64 lg:w-80

  return (
    <div
      className="w-full h-full p-10 grid grid-cols-1  justify-items-center items-center sm:grid-cols-2
       md:grid-cols-3  mx-auto gap-4 relative"
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative sky-blue-gradient overflow-hidden lg:w-80 lg:h-[400px] border-2 border-cyan-600",
              selected?.id === card.id
                ? "rounded-lg cursor-default absolute inset-0 lg:h-2/3 lg:w-1/2 md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl "
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} selected={selected} />

            {selected?.id !== card.id && <EventDetails />}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const EventDetails = () => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <div className="ml-6 mb-2">
        <div className="font-mono text-sm tracking-tight absolute -top-7 right-0 mr-2">
          <div className="flex items-center gap-0.5">
            <div className="material-symbols-outlined ">calendar_month</div>
            <div>Tuesday, Nov 10</div>
          </div>
          <div className="flex items-center place-content-end gap-0.5">
            <div className="material-symbols-outlined ">schedule</div>
            <div className="">11:00 am</div>
          </div>
        </div>
        <div className="font-semibold text-xl text-slate-800 tracking-wide mb-2 ">
          Techquisitive
        </div>
        <hr className="w-1/5 mb-2 border-2 border-sky-300" />
        <span className="text-slate-600 ">CSE Student's Chapter</span>
      </div>
      <div className="bg-[#34c6eb] p-2 mb-4 mx-6  rounded-full text-center font-bold text-white cursor-pointer">
        Read More
      </div>
    </div>
  );
};

const BlurImage = ({
  card,
  selected,
}: {
  card: Card;
  selected: Card | null;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        src={card.thumbnail}
        // height="500"
        // width="500"
        onLoad={() => setLoaded(true)}
        fill
        className={cn(
          " object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          loaded ? "blur-none" : "blur-md",
          selected?.id === card.id ? "" : "clippy"
        )}
        alt="thumbnail"
        style={{}}
      />
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent lg:h-full lg:w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
        }}
        className="absolute inset-0 h-full w-full bg-[#247087] opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
