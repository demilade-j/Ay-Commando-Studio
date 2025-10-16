"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import NavHeader from "../../../Home/NavLikes/NavHeader";
import NavBar from "../../../Home/NavLikes/NavBar";
import MainMas3Hero from "./MainMas3Hero";

export default function Masonary3Hero() {

  const slides = [<MainMas3Hero />];

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
