import { ChevronRight, Facebook, Grip, Instagram, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const XLogo = ({ height = 0, width = 0, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="mt-0.5"
    viewBox="0 0 1200 1227"
    fill={color}
  >
    <path
      d="M714 519 1160 0H1053L661 450 367 0H0l468 684L0 1226h107l409-480 
    310 480h367L714 519zM568 691l-47-68-377-546h162l304 441 
    47 68 399 580H895L568 691z"
    />
  </svg>
);

export default function NavHeader() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modal]);
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
          <img
            src="/port_logo-removebg-preview.png"
            className="w-8"
            alt="logo"
          />{" "}
          AjCommando
        </main>

        <main className="flex gap-5">
          <button onClick={() => navigate("*")} className="lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-1 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
            Book Now{" "}
            <ChevronRight className="font-extrabold group-hover:pl-2" />
          </button>
          <span
            title="Open modal"
            onClick={() => setModal(true)}
            className="bg-white flex cursor-pointer p-2 items-center justify-center rounded-full lg:hidden"
          >
            <Grip className="text-black" />
          </span>
        </main>
      </div>

      {modal && (
        <div className="fixed pt-5 ps-5 z-2000 lg:hidden flex flex-col gap-13 bg-[rgba(0,0,0,0.99)] w-full top-0 left-0 h-screen">
          <span
            title="Close modal"
            onClick={() => setModal(false)}
            className="bg-white group p-1 size-12 text-black cursor-pointer rounded-full flex items-center justify-center"
          >
            <X className="group-hover:animate-spin" strokeWidth={3} />
          </span>
          <ul className="flex flex-col gap-5 text-5xl font-semibold">
            <li className={`cursor-pointer w-fit ${modal2 ? "text-green-500" : "text-white"}`} onClick={() => setModal2(!modal2)}>Home</li>
            {modal2 && <div className="text-xl -mt-2 px-5 cursor-pointer w-fit text-green-300">
              <li onClick={() => navigate("/")} className="transform duration-800 hover:translate-x-3">Home 1</li>
              <li onClick={() => navigate("/homeVideo")} className="transform duration-800 hover:translate-x-3">Home Video</li>
            </div> }

            <li className={`cursor-pointer w-fit ${modal3 ? "text-green-500" : "text-white"}`} onClick={() => setModal3(!modal3)}>Gallery</li>
            {modal3 && <div className="text-xl -mt-2 px-5 cursor-pointer w-fit text-green-300">
              <li onClick={() => navigate("/masonaryCols2")} className="transform duration-800 hover:translate-x-3">Masonry 2 Cols</li>
            <li onClick={() => navigate("/masonaryCols3")} className="transform duration-800 hover:translate-x-3">Masonry 3 Cols</li>
            <li onClick={() => navigate("/masonaryCols4")} className="transform duration-800 hover:translate-x-3">Masonry 4 Cols</li>
            <li onClick={() => navigate("/grid3GalleryCols")} className="transform duration-800 hover:translate-x-3">Grid 3 Cols</li>
            <li onClick={() => navigate("/grid4GalleryCols")} className="transform duration-800 hover:translate-x-3">Grid 4 Cols</li>
            </div> }

            <li className="cursor-pointer" onClick={() => navigate("/FAQs")}>FAQs</li>
            <li className="cursor-pointer" onClick={() => navigate("/masonaryCols2")}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
