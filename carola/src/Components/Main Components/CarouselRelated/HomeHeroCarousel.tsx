"use client";

// import NavHeader from "./NavHeader";
// import NavBar from "./NavBar";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Hero1 from "../../Home/Home1/Hero/Hero1";
import Hero2 from "../../Home/Home1/Hero/Hero2";
import Hero3 from "../../Home/Home1/Hero/Hero3";
import NavBar from "../../Home/NavLikes/NavBar";
import NavHeader from "../../Home/NavLikes/NavHeader";

export default function HomePage() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const slides = [<Hero1 />, <Hero2 />, <Hero3 />];

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
          modules={[Navigation, EffectFade, Autoplay]}
          loop
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          className="lg:h-195 md:h-160 h-120"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>{slide}</SwiperSlide>
          ))}
        </Swiper>

        {/* custom arrows */}
        <button
          ref={prevRef}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
