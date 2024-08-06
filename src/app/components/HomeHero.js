"use client";

import Image from "next/image";
import React from "react";

export default function HomeHero() {
  const backgroundImage = {
    backgroundImage: "url('/assets/banner.svg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="flex w-full relative">
      <div
        style={backgroundImage}
        className="flex w-full flex-col min-h-screen  p-4 md:p-6 xl:p-8"
      ></div>

      <div className="flex w-full flex-col min-h-screen absolute z-10 items-start justify-center">
        <div className="container mx-auto ">
          <div className="flex justify-center ">
            <Image
              width={200}
              height={100}
              src="/assets/logosec.svg"
              alt="Logo"
              className="w-32 md:w-32 lg:w-80"
              data-aos="fade-up"
            />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl text-white italic font-semibold text-center ">
            Learn Korean in Your Finger Tips
          </p>
        </div>
      </div>
    </div>
  );
}
