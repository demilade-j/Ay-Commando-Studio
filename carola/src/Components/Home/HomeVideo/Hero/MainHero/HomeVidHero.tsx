import { ChevronRight } from "lucide-react";

export default function HomeVidHero() {
  return (
    <div className="h-170">
      {/* <img className="absolute h-full w-full -z-20" src="/video-img.jpg" /> */}
<video
  className="absolute h-full w-full object-cover -z-10"
  src="/gleam-video.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
      <div className="h-full w-full absolute flex gap-4 text-[white] z-40 items-center justify-center flex-col">
        <h1 className="lg:text-7xl font-semibold text-center md:text-5xl text-3xl">AyCommando Photography Studio</h1>
        <p className="lg:text-xl text-[0.8rem] w-[90%] text-center">Cum et labore appareat, te est nostrum eligendi adipisci. Tota quas habeo eu vel. Vel autem apeirian primis.</p>
        <button className="px-5 py-3 rounded-sm font-semibold flex items-center justify-center bg-white text-black group hover:pl-4">
          Find More{" "}
          <ChevronRight
            size={20}
            className="font-extrabold mt-[1px] group-hover:pl-2"
          />
        </button>
      </div>

      <div className="opacity-50  absolute h-full w-full top-0 bg-[black]"></div>
    </div>
  );
}
