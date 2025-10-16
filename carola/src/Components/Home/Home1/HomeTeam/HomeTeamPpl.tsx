import { Facebook, Instagram, Twitter } from "lucide-react";

const team = [
  {
    id: 1,
    name: "April Ryan",
    work: "Photographer",
    img: "/team-1.jpg",
  },
  {
    id: 2,
    name: "Robin Smith",
    work: "Photographer",
    img: "/team-2.jpg",
  },
  {
    id: 3,
    name: "Olivia Nelson",
    work: "Videographer",
    img: "/team-3.jpg",
  },
  {
    id: 4,
    name: "Jeremy Welch",
    work: "Retoucher",
    img: "/team-4.jpg",
  },
];

export default function HomeTeamPpl() {
  return (
    <div className="grid font-[sans-serif] lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-7">
      {team.map((team) => (
        <div key={team.id} className="flex flex-col gap-2">
          <main className="relative overflow-hidden rounded-lg group">
            <main className="bg-black absolute w-full h-full opacity-0 group-hover:opacity-60 z-30"></main>
            <img
              src={team.img}
              alt={`Image of ${team.img}`}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-112"
            />
          </main>
          <h1 className="font-semibold text-[1.2rem]">{team.name}</h1>
          <p className="text-sm -mt-2">{team.work}</p>
          <article className="flex gap-3">
            <span className="p-1 text-white bg-green-800 rounded-sm flex"><Facebook size={15}/></span>
            <span className="p-1 text-white bg-green-800 rounded-sm flex"><Instagram size={15}/></span>
            <span className="p-1 text-white bg-green-800 rounded-sm flex"><Twitter size={15}/></span>
            <span></span>
          </article>
        </div>
      ))}
    </div>
  );
}
