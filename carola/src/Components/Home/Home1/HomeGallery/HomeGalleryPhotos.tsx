import { useNavigate } from "react-router-dom";

const pics = [
  {
    id: 1,
    img: "/gal-1-masonry.jpg",
    name: "Tracy & Aaron",
    event: "Wedding",
    navigate: "/masonaryCols3",
  },
  {
    id: 4,
    img: "/gal-4-masonry.jpg",
    name: "Diana & Max",
    event: "Wedding",
    navigate: "/masonaryCols4",
  },
  {
    id: 7,
    img: "/gal-7-masonry.jpg",
    name: " Street People",
    event: "Portrait",
    navigate: "/grid3GalleryCols",
  },
  {
    id: 2,
    img: "/gal-2-masonry.jpg",
    name: "Jane & John",
    event: "Wedding",
    navigate: "/grid4GalleryCols",
  },
  {
    id: 6,
    img: "/gal-6-masonry.jpg",
    name: "Clara & Andrew",
    event: "Lifestyle & Wedding",
    navigate: "/masonaryCols3",
  },
  {
    id: 9,
    img: "/gal-9-masonry.jpg",
    name: "Black & White",
    event: "Lifestyle & Portrait",
    navigate: "/grid3GalleryCols",
  },

  {
    id: 3,
    img: "/gal-3-masonry.jpg",
    name: "Angela & Zach",
    event: "Wedding",
    navigate: "/masonaryCols2",
  },
  {
    id: 8,
    img: "/gal-8-masonry.jpg",
    name: "Ballet Dancers",
    event: "Lifestyle",
    navigate: "/grid3GalleryCols",
  },
  {
    id: 5,
    img: "/gal-5-masonry.jpg",
    name: "Tina & Robi",
    event: "Lifestyle & Wedding",
    navigate: "/masonaryCols4",
  },
  {
    id: 10,
    img: "/gal-10-masonry.jpg",
    name: "Studio Photos",
    event: "Portrait",
    navigate: "/grid4GalleryCols",
  },
];

export default function HomeGalleryPhotos() {
  const navigate = useNavigate();
  return (
    <>
      {pics.map((pic) => (
        <div key={pic.id} className="p-1 inline-block mb-6">
          <div
            onClick={() => navigate(`${pic.navigate}`)}
            className="relative mb-4 overflow-hidden rounded-md group hover:cursor-[url('/cursor-eye.svg'),_auto]"
          >
            <main className="bg-black absolute w-full h-full opacity-0 group-hover:opacity-60 z-30"></main>
            <img
              src={pic.img}
              alt=""
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="cursor-pointer">
            <h1 className="text-xl font-semibold">{pic.name}</h1>
            <p className="text-sm">{pic.event}</p>
          </div>
        </div>
      ))}
    </>
  );
}
