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
import Link from "next/link";

export default function NavbarDept({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}>
      <Menu setActive={setActive}>
        {/* Home */}

        <Link href="/" className="text-black">
          Home
        </Link>

        {/* People */}
        <MenuItem setActive={setActive} active={active} item="People">
          <div className="flex flex-col space-y-4 text-lg font-normal mix">
            <HoveredLink href="#">Faculty Members</HoveredLink>
            <HoveredLink href="#">Staff Members</HoveredLink>
          </div>
        </MenuItem>

        {/* Students */}
        <MenuItem setActive={setActive} active={active} item="Students">
          <div className="flex flex-col space-y-4 text-lg font-normal mix">
            <HoveredLink href="#">Placement</HoveredLink>
            <HoveredLink href="#">Student Activvity</HoveredLink>
            <HoveredLink href="#">Life@AOT</HoveredLink>
            <HoveredLink href="#">Departmental Newspaper</HoveredLink>
          </div>
        </MenuItem>

        {/* Academics */}
        <MenuItem setActive={setActive} active={active} item="Academics">
          <div className="text-lg font-normal mix">
            <Sidebar />
          </div>
        </MenuItem>

        {/* Research */}
        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-lg font-normal mix">
            <HoveredLink href="#">Current Research</HoveredLink>
            <HoveredLink href="#">Past Research</HoveredLink>
            <HoveredLink href="#">Research facilities</HoveredLink>
          </div>
        </MenuItem>

        {/* Achivements & Events */}
        <Link href="#" className="text-black">
          Achivements & Events
        </Link>

        {/* Join Us */}
        <Link href="#" className="text-black">
          Join Us
        </Link>

        {/* Contact Us */}
        <Link href="#" className="text-black">
          Contact Us
        </Link>
      </Menu>
    </div>
  );
}
