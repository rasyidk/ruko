"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function Tentang() {
  const image = [
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
    "/assets/layanan/card_header.png",
  ];

  return (
    <div className="w-full bg-white p-12 md:p-24">
      <div className="flex flex-col items-center justify-center gap-16">
        <span className="text-primary text-3xl md:text-4xl font-semibold text-center">
          Tentang Rumah Korea Indonesia
        </span>
        <div className="w-full mx-20">
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper "
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {image.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full pb-16 m-auto rounded-lg overflow-hidden">
                  <div
                    className="relative m-auto h-[195px] w-[320px] sm:h-[244px] sm:w-[400px] md:h-[287px] md:w-[460px] lg:h-[282px] lg:w-[450px] xl:h-[337px] xl:w-[550px]"
                    key={"tes"}
                  >
                    <div className="absolute inset-0 m-3 overflow-hidden rounded-xl bg-white shadow-2xl sm:m-4 md:m-5 md:rounded-2xl">
                      <iframe
                        title={"sambutan.title"}
                        src={"https://www.youtube.com/embed/V3B73nC_gg8"}
                        className="absolute inset-0 h-full w-full rounded-2xl px-[8px] py-[7px] md:rounded-3xl md:p-[12px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
