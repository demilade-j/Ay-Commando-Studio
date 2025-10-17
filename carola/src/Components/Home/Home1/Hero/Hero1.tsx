import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero1() {
  const navigate = useNavigate()
  return (
    <div className="h-170">
      <img className="absolute h-full w-full -z-20" src="/slider-1.jpg" />

      <div className="h-full w-full absolute flex gap-4 text-[white] z-40 items-center justify-center flex-col">
        <h1 className="lg:text-8xl font-semibold text-center md:text-6xl text-5xl">Wedding Photography</h1>
        <p className="lg:text-2xl md:text-[1.4rem] text-[1rem] w-[80%] text-center">Ancillae torquatos in nec, impetus nostrum ea eos</p>
        <button onClick={() => navigate("/FAQs")} className="px-2 py-2 rounded-sm  cursor-pointer font-semibold flex items-center text-[0.95rem] justify-center bg-white text-black group hover:pl-4">
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
