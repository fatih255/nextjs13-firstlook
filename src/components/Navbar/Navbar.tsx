"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { Navbars } from ".";

export default function Navbar() {
  const segment = useSelectedLayoutSegment() ?? "default";
  const SegmentNavbar = Navbars[segment as keyof typeof Navbars];
  return (
    <nav>
      <SegmentNavbar />
    </nav>
  );
}
