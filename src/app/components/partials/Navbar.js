"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white  z-20 w-full fixed top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="w-full flex justify-center lg:justify-start my-4">
          <Link href="/">
            <Image
              src="/assets/logo.png" // Path to your logo image in the public directory
              alt="Logo"
              width={100} // Adjust the width of the image
              height={100} // Adjust the height of the image
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
