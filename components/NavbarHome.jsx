"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Sidebar from "./Sidebar";

export default function NavbarHome({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}>
      <Menu setActive={setActive}>
        {/* Academics */}

        <MenuItem setActive={setActive} active={active} item="Academics">
          <div>
            <Sidebar />
          </div>
        </MenuItem>

        {/* Research */}

        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Current Research</HoveredLink>
            <HoveredLink href="#">Past Research</HoveredLink>
            <HoveredLink href="#">Research facilities</HoveredLink>
          </div>
        </MenuItem>

        {/* Students */}

        <MenuItem setActive={setActive} active={active} item="Students">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Life@AOT</HoveredLink>
            <HoveredLink href="#">Campus Facilities</HoveredLink>
            <HoveredLink href="#">Career Services</HoveredLink>
            <HoveredLink href="#">Events</HoveredLink>
          </div>
        </MenuItem>

        {/* Faculty */}

        <MenuItem setActive={setActive} active={active} item="Faculty">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Faculty List</HoveredLink>
            <HoveredLink href="#">Faculty Positions</HoveredLink>
            <HoveredLink href="#">Career Benefits@AOT</HoveredLink>
          </div>
        </MenuItem>

        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
