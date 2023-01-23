import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
      Importing Server Components into Client Components Pattern
      https://beta.nextjs.org/docs/rendering/server-and-client-components#importing-server-components-into-client-components
      */}
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
