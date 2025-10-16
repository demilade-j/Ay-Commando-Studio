import { ChevronRight } from "lucide-react";

export default function Hero3() {
  return (
    <div className="h-170">
      <img className="absolute h-full w-full" src="/slider-3.jpg" />
      <div className="h-full w-full absolute flex gap-4 text-[white] z-40 items-center justify-center flex-col">
        <h1 className="lg:text-8xl font-semibold text-center md:text-6xl text-5xl">Family Portraits</h1>
        <p className="lg:text-2xl md:text-[1.4rem] text-[1rem] w-[80%] text-center">Propriae voluptaria dissentias nam ei</p>
        <button className="px-2 py-2 rounded-sm font-semibold flex items-center text-[0.95rem] justify-center bg-white text-black group hover:pl-4">
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
