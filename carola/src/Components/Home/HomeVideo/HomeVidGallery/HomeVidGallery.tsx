export default function HomeVidGallery() {
  const pics = [
    { id: 1, img: "/gal-1-masonry.jpg", name: "Tracy & Aaron", event: "Wedding" },
    { id: 2, img: "/gal-4-masonry.jpg", name: "Diana & Max", event: "Wedding" },
    { id: 3, img: "/gal-7-masonry.jpg", name: "Street People", event: "Portrait" },
    { id: 4, img: "/gal-2-masonry.jpg", name: "Jane & John", event: "Wedding" },
    { id: 5, img: "/gal-6-masonry.jpg", name: "Clara & Andrew", event: "Lifestyle & Wedding" },
    { id: 6, img: "/gal-9-masonry.jpg", name: "Black & White", event: "Lifestyle & Portrait" },
    { id: 7, img: "/gal-3-masonry.jpg", name: "Angela & Zach", event: "Wedding" },
    { id: 8, img: "/gal-8-masonry.jpg", name: "Ballet Dancers", event: "Lifestyle" },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-1">
      {pics.map((pic) => (
        <div key={pic.id} className="relative aspect-square overflow-hidden group cursor-pointer">
          <main className="absolute inset-0 bg-black opacity-10 group-hover:opacity-70 transition duration-300 z-10"></main>
          <img
            src={pic.img}
            alt={pic.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-4 left-4 text-white z-20">
            <h1 className="text-lg font-semibold">{pic.name}</h1>
            <p className="text-sm">{pic.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
