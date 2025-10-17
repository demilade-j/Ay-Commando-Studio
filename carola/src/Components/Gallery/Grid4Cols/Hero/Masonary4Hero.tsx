"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import NavHeader from "../../../Home/NavLikes/NavHeader";
import NavBar from "../../../Home/NavLikes/NavBar";
import MainGrid4Hero from "./MainGrid4Hero";

export default function Grid4Hero() {
  const slides = [<MainGrid4Hero />];

  return (
    <div className="relative w-full h-full">
      <main className="absolute w-full lg:pt-0 pt-10">
        <NavHeader />
      </main>
      <main className="lg:flex hidden">
        <NavBar />
      </main>
      {/* Hero carousel below nav */}
      <div className="relative w-full">
        <Swiper className="lg:h-195 md:h-160 h-120">
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
