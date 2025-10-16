import { ChevronRight } from "lucide-react";

export default function HomeContact() {
  return (
    <div
      className="font-[sans-serif] w-full h-110 bg-cover bg-center gap-6 flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/portfolio1-page.jpg')" }}
    >
      <p className="text-md font-semibold underline decoration-wavy decoration-[1.3px] decoration-white underline-offset-10">
        Contact
      </p>
      <h1 className="lg:w-[70%] md:w-[85%] w-[90%] font-semibold lg:text-5xl md:text-5xl text-3xl text-center">
        Looking for a photographer / videographer?
      </h1>
      <p className="lg:text-sm md:text-sm text-[0.85rem] w-[80%] text-center">
        Te vis veniam detracto, tollit alterum graecis his ut. At pro essent
        aliquip qualisque, vis splendide posidonium ex.
      </p>
      <button className="lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-1 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
        Get In Touch{" "}
        <ChevronRight className="font-extrabold group-hover:pl-2" />
      </button>
    </div>
  );
}
