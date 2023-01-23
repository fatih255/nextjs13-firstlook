"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import { Navbars } from ".";
{/*
What is the Client Components?
Client Components enable you to add client-side interactivity to your application. In Next.js, they are prerendered on the server and hydrated on the client. 

*/}
export default function Navbar() {
  const segment = useSelectedLayoutSegment() ?? "default";
  const SegmentNavbar = Navbars[segment as keyof typeof Navbars];
  return (
    <nav>
      <SegmentNavbar />
    </nav>
  );
}
