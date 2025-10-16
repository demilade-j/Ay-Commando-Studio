"use client";

import { useState } from "react";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import { motion, AnimatePresence } from "framer-motion";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// Extend the default slide type so TypeScript knows about `title`
type CustomSlide = SlideImage & {
  title?: string;
};

const pics = [
  { id: 1, img: "/gal-grid-01.jpg", title: "Elegant Wedding Setup" },
  { id: 2, img: "/gal-grid-02.jpg", title: "Couple First Dance" },
  { id: 3, img: "/gal-grid-03.jpg", title: "Outdoor Ceremony" },
  { id: 4, img: "/gal-grid-04.jpg", title: "Luxury Reception" },
  { id: 5, img: "/gal-grid-05.jpg", title: "Bridal Moment" },
  { id: 6, img: "/gal-grid-06.jpg", title: "Vintage Decor" },
  { id: 7, img: "/gal-grid-07.jpg", title: "Groom Squad" },
  { id: 8, img: "/gal-grid-08.jpg", title: "Flower Details" },
  { id: 9, img: "/gal-grid-09.jpg", title: "Classic Venue" },
  { id: 10, img: "/gal-grid-10.jpg", title: "Table Setting" },
  { id: 11, img: "/gal-grid-11.jpg", title: "Dance Floor" },
  { id: 12, img: "/gal-grid-12.jpg", title: "Final Toast" },
];

export default function Grid3ColsAftHeroGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ✅ Use the custom type so we keep title information
  const slides: CustomSlide[] = pics.map((pic) => ({
    src: pic.img,
    title: pic.title,
  }));

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pics.map((pic, i) => (
          <motion.div
            key={pic.id}
            className="relative overflow-hidden rounded-md group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <motion.img
              src={pic.img}
              alt={pic.title}
              className="w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>

            {/* Hover caption */}
            <span className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {pic.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
        render={{
          slide: ({ slide }: { slide: CustomSlide }) => (
            <>
              <motion.img
                key={slide.src}
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              {/* ✅ Custom title caption */}
              {slide.title && (
                <div className="text-white text-xl absolute bottom-5 right-10">
                  {slide.title}
                </div>
              )}
            </>
          ),
          slideFooter: () => (
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute top-5 left-5 text-white text-sm bg-black/50 px-3 py-1 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {index + 1} / {slides.length}
              </motion.div>
            </AnimatePresence>
          ),
        }}
      />
    </>
  );
}
