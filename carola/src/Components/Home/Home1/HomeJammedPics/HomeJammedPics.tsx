const pic = [
  {
    id: 1,
    src: "/insta-1.jpg",
  },
  {
    id: 2,
    src: "/insta-2.jpg",
  },
  {
    id: 3,
    src: "/insta-3.jpg",
  },
  {
    id: 4,
    src: "/insta-4.jpg",
  },
  {
    id: 5,
    src: "/insta-5.jpg",
  },
  {
    id: 6,
    src: "/insta-6.jpg",
  },
  {
    id: 7,
    src: "/insta-7.jpg",
  },
  {
    id: 8,
    src: "/insta-8.jpg",
  },
];

export default function HomeJammedPics() {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-8 grid-cols-4 relative">
      {pic.map((pic) => (
        <div key={pic.id}>
          <main className="relative overflow-hidden group">
            <main className="bg-black absolute w-full h-full opacity-0 group-hover:opacity-60 z-30"></main>
            <img
              src={pic.src}
              alt={`Image of ${pic.src}`}
              className="w-full object-cover transition-transform duration-300"
            />
          </main>
        </div>
      ))}
      <button onClick={() => window.open("https://www.instagram.com/ajcommando_studio", "_blank")} className="absolute bottom-4 z-40 cursor-pointer lg:ms-[47%] md:ms-[45%] sm:ms-[44%] ms-[42%] bg-white text-sm py-1 px-2">Follow Us!</button>
    </div>
  );
}
