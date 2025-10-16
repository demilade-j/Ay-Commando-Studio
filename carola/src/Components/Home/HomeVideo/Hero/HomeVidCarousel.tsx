"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import NavBar from "../../NavLikes/NavBar";
import NavHeader from "../../NavLikes/NavHeader";
import HomeVidHero from "./MainHero/HomeVidHero";

export default function HomeHeroVideo() {

  const slides = [<HomeVidHero />];

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
