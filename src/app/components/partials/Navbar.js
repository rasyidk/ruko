"use client";

import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <div className=" bg-white  z-20 w-full fixed">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="w-full flex justify-center lg:justify-start my-4">
          <Image
            src="/assets/logo.png" // Path to your logo image in the public directory
            alt="Logo"
            width={100} // Adjust the width of the image
            height={100} // Adjust the height of the image
          />
        </div>
      </div>
    </div>
  );
}
