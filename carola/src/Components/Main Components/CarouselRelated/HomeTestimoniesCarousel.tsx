"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeTesti1 from "../../Home/Home1/HomeTestimonies/HomeTesti1";
import HomeTesti2 from "../../Home/Home1/HomeTestimonies/HomeTesti2";
import HomeTesti3 from "../../Home/Home1/HomeTestimonies/HomeTesti3";
import HomeTesti4 from "../../Home/Home1/HomeTestimonies/HomeTesti4";

export default function HomeTestimoniesCarousel() {
  const slides = [
    {page: <HomeTesti1/>},
    { page: <HomeTesti2/> },
    { page: <HomeTesti3/> },
    { page: <HomeTesti4/> },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true,bulletClass: "swiper-pagination-bullet !bg-gray-400 !opacity-100 w-4 h-4 rounded-full", 
        bulletActiveClass: "!bg-white !w-2.5 !h-2.5",  }}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      className="[&_.swiper-pagination]:!bottom-7 lg:[&_.swiper-pagination]:!left-15 md:[&_.swiper-pagination]:!left-15 [&_.swiper-pagination]:!left-6 [&_.swiper-pagination]:!right-auto [&_.swiper-pagination]:!w-auto [&_.swiper-pagination]:!text-right"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="text-white pt-20">
            <img src="/img-about1.jpg" className="absolute w-full h-full -z-2" alt="" />
            <div className="absolute w-full h-full -z-1 bg-black opacity-40"></div>
            {/* <main className="text-[10rem]">{"\u201D"}</main> */}
            <main className="lg:px-20 md:px-17 px-7 py-25">
            <img className="w-20" src="/quote1.png" alt="" />
            <br />
            {slide.page}
            </main>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}