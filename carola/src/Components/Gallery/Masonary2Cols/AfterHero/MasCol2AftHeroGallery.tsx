const pics = [
  {
    id: 1,
    img: "/gal-masonry-01.jpg",
  },
  {
    id: 4,
    img: "/gal-masonry-04.jpg",
  },
  {
    id: 6,
    img: "/gal-masonry-06.jpg",
  },
  {
    id: 7,
    img: "/gal-masonry-07.jpg",
  },
  {
    id: 8,
    img: "/gal-masonry-08.jpg",
  },
  {
    id: 3,
    img: "/gal-masonry-03.jpg",
  },
  {
    id: 2,
    img: "/gal-masonry-02.jpg",
  },
  {
    id: 5,
    img: "/gal-masonry-05.jpg",
  },
];

export default function MasCol2AftHeroGallery() {
  return (
    <>
      {pics.map((pic) => (
        <div key={pic.id} className="p-1 inline-block lg:mb-6 mb-1">
          <div className="relative mb-4 overflow-hidden rounded-sm group cursor-pointer">
            <main className="bg-black absolute w-full h-full opacity-0 group-hover:opacity-60 z-30"></main>
            <img
              src={pic.img}
              alt=""
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </>
  );
}
