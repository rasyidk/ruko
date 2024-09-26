"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import activities from "@/database/activities";

export function AktivitasKami({activities}) {

    return (
        <div className={"bg-[#edebeb] flex w-full 2xl:px-52 lg:px-32 py-20"}>
            <div className={"flex flex-col gap-6 my-8 w-full justify-center "}>
                <h1 className={"text-primary text-4xl font-semibold  text-center"}>Aktivitas Rumah Korea Indonesia</h1>
                <div className="w-full ">
                    <Swiper
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={5}
                        loop={true}
                        style={{
                            "--swiper-navigation-color": "#0097B2",
                            "--swiper-pagination-color": "#0097B2",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper "

                    >
                        {activities.map((activity, index) => (
                            <SwiperSlide className={"mt-5 flex w-full justify-center "} key={index}>
                                <div className={"w-full flex justify-center scale-[90%] lg:scale-[100%]"}>
                                <div
                                    className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[52rem] flex-row">
                                    <div
                                        className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                        <img
                                            src={activity?.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"}
                                            alt="card-image" className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="p-6">
                                        <h6
                                            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                                            {activity.date}
                                        </h6>
                                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {activity.title}
                                        </h4>
                                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                            {activity.description}
                                        </p>
                                        <a href={activity.link} className="inline-block">
                                            <button
                                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                                type="button">
                                                Lihat Selengkapnya
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor"
                                                     strokeWidth="2" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                                </svg>
                                            </button>
                                        </a>
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

export default AktivitasKami;
