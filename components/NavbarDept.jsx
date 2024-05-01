"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

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

        <HoveredLink href="/">Home</HoveredLink>

        {/* People */}
        <MenuItem setActive={setActive} active={active} item="People">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Faculty Members</HoveredLink>
            <HoveredLink href="#">Staff Members</HoveredLink>
          </div>
        </MenuItem>

        {/* Students */}
        <MenuItem setActive={setActive} active={active} item="Students">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Placement</HoveredLink>
            <HoveredLink href="#">Student Activvity</HoveredLink>
            <HoveredLink href="#">Life@AOT</HoveredLink>
            <HoveredLink href="#">Departmental Newspaper</HoveredLink>
          </div>
        </MenuItem>

        {/* Academics */}
        <MenuItem setActive={setActive} active={active} item="Academics">
          <div>ToDo</div>
        </MenuItem>

        {/* Research */}
        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Current Research</HoveredLink>
            <HoveredLink href="#">Past Research</HoveredLink>
            <HoveredLink href="#">Research facilities</HoveredLink>
          </div>
        </MenuItem>

        {/* Achivements & Events */}
        <HoveredLink href="#">Achivements & Events</HoveredLink>

        {/* Join Us */}
        <HoveredLink href="#">Join Us</HoveredLink>

        {/* Contact Us */}
        <HoveredLink href="#">Contact Us</HoveredLink>
      </Menu>
    </div>
  );
}
