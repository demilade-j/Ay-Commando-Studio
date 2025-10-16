const pic = [
    {
    id: 1,
    img: "/logo-biz1.png",
  },
    {
    id: 2,
    img: "/logo-biz2.png",
  },
    {
    id: 3,
    img: "/logo-biz3.png",
  },
    {
    id: 4,
    img: "/logo-biz4.png",
  },
    {
    id: 5,
    img: "/logo-biz5.png",
  },
    {
    id: 6,
    img: "/logo-biz6.png",
  },
    {
    id: 7,
    img: "/logo-biz7.png",
  },
    {
    id: 8,
    img: "/logo-biz8.png",
  },
]

export default function HomeTeamImages() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-15 md:gap-15 gap-7 lg:px-17 md:px-12 px-7 pt-13 items-center justify-center">
        {pic.map((pic) => (
        <div className="flex items-center justify-center" key={pic.id}>
            <img
              src={pic.img}
              className="lg:w-[60%] w-[80%] md:w-[50%] object-contain"
              alt={`Image of ${pic.img}`}
            />
        </div>
      ))}
    </div>
  )
}
