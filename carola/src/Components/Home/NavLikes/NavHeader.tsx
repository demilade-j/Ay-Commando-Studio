import { ChevronRight, Facebook, Grip, Instagram, Mail } from "lucide-react";

const XLogo = ({ height = 0, width = 0, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="mt-0.5"
    viewBox="0 0 1200 1227"
    fill={color}
  >
    <path d="M714 519 1160 0H1053L661 450 367 0H0l468 684L0 1226h107l409-480 
    310 480h367L714 519zM568 691l-47-68-377-546h162l304 441 
    47 68 399 580H895L568 691z" />
  </svg>
);

export default function NavHeader() {
  return (
    <div
      id="nav-header"
      className="text-white bg-transparent" // ✅ choose your own color here
      style={{
        position: "absolute", // ✅ let it scroll away
        width: "100%",
        zIndex: 1001,
      }}
    >
      <div className="w-full py-4 flex items-center justify-between lg:px-25 px-5">
        <main className="lg:flex hidden gap-5">
          <Facebook size={18} fill="white" color="white" />
          <XLogo height={15} width={13} color="white" />
          <Instagram size={18} color="white" />
          <Mail size={18} color="white" />
        </main>

        <main className="flex items-center gap-2 text-blue-400 font-bold text-2xl">
          <img src="/port_logo-removebg-preview.png" className="w-10" alt="logo" /> Ay Commando
        </main>

        <main className="flex gap-5">
          <button className="lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-1 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
            Book Now <ChevronRight className="font-extrabold group-hover:pl-2" />
          </button>
          <span className="bg-white flex p-2 items-center justify-center rounded-full lg:hidden md:hidden">
            <Grip className="text-black" />
          </span>
        </main>
      </div>
    </div>
  );
}
