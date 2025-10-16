export default function HomeB4Gallery() {
  return (
    <div className="relative lg:flex w-full item-center justify-center">
        <img src="/contact-page.jpg" className="absolute w-full h-full" alt="" />
        <div className="w-full h-full absolute bg-black z-20 lg:opacity-0 md:opacity-10 opacity-69"></div>

        <div className="w-full h-full lg:gap-10 md:gap-10 gap-18 z-30 lg:flex md:grid md:grid-cols-2 grid lg:px-15 px-10 lg:py-35 md:py-27 py-7 justify-between items-center">
        <span className="lg:w-[25%] md:w-[90%] w-[100%] z-40 text-white flex flex-col item-center justify-center gap-3">
            <img src="/love.png" className="w-20 p-4 rounded-md border-1 border-green-400" alt="" />
            <h1 className="font-bold text-3xl">Weddings</h1>
            <p className="text-md font-semibold">Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</p>
        </span>

        <span className="lg:w-[25%] md:w-[90%] w-[100%] z-40 text-white flex flex-col item-center justify-center gap-3">
            <img src="/love.png" className="w-20 p-4 rounded-md border-1 border-green-400" alt="" />
            <h1 className="font-bold text-3xl">Portraits</h1>
            <p className="text-md font-semibold">Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</p>
        </span>

        <span className="lg:w-[25%] md:w-[90%] w-[100%] text-white z-40 md:flex hidden lg:flex flex-col item-center justify-center gap-3">
            <img src="/love.png" className="w-20 p-4 rounded-md border-1 border-green-400" alt="" />
            <h1 className="font-bold text-3xl">Fashion</h1>
            <p className="text-md font-semibold">Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</p>
        </span>

        <span className="lg:w-[25%] md:w-[90%] w-[100%] text-white z-40 md:flex hidden lg:flex flex-col item-center justify-center gap-3">
            <img src="/love.png" className="w-20 p-4 rounded-md border-1 border-green-400" alt="" />
            <h1 className="font-bold text-3xl">Editorial</h1>
            <p className="text-md font-semibold">Est sale definitiones id. Ut quo quem harum munere, eu labore voluptatum mei.</p>
        </span>
        </div>
    </div>
  )
}
