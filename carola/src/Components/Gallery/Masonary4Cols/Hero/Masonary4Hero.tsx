"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import NavHeader from "../../../Home/NavLikes/NavHeader";
import NavBar from "../../../Home/NavLikes/NavBar";
import MainMas4Hero from "./MainMas4Hero";

export default function Masonary4Hero() {

  const slides = [<MainMas4Hero />];

  return (
    <div className="relative w-full h-full">
      {/* Top header (scrolls away) */}
      <NavHeader />

      {/* Navbar (sticks after scroll) */}
      <main className="lg:flex md:flex hidden">
        <NavBar />
      </main>

      {/* Hero carousel below nav */}
      <div className="relative w-full">
        <Swiper
          className="lg:h-195 md:h-160 h-120"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
