import { ChevronRight } from "lucide-react";
import HomeGalleryPhotos from "./HomeGalleryPhotos";

export default function HomeGallery() {
  return (
    <div className="flex flex-col gap-8 lg:px-20 pt-15 px-7">
      <main>
        <p className="text-[rgb(74,125,109)] text-lg underline decoration-wavy decoration-[1.3px] decoration-[rgb(74,125,109)] font-thin underline-offset-10 lg:scale-100 md:scale-90 scale-70">
          Portfolio
        </p>
      </main>
      <main className="flex justify-between items-center">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-[700]">Selected Work</h1>
        <button className="lg:px-4 lg:py-2 md:px-4 md:py-2 px-2 py-1 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
          View All Work{" "}
          <ChevronRight className="font-extrabold group-hover:pl-2" />
        </button>
      </main>
      <main className="lg:columns-3 md:columns-3 columns-2">
        <HomeGalleryPhotos/>
      </main>
    </div>
  );
}
