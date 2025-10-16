import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FaqAfterHero3() {
    const navigate = useNavigate()
  return (
    <div className="lg:flex grid lg:gap-0 gap-8 justify-between items-end py-20 px-15">
        <main className="flex flex-col gap-5">
        <p className="text-md text-green-700 font-thin underline decoration-wavy decoration-[1.3px] decoration-green-700 underline-offset-10">
         Next Step
        </p>
        <h1 className="font-semibold text-3xl">Let's Work Together</h1>
        </main>
        <button onClick={() => navigate("/contact")} className="w-[60%] lg:w-[20%] cursor-pointer px-2 py-2 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
        Get In Touch{" "}
        <ChevronRight className="font-extrabold group-hover:pl-2" />
      </button>
    </div>
  )
}
