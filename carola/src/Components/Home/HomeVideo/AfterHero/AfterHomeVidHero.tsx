export default function AfterHomeVidHero() {
  return (
    <div className="lg:py-20 md:py-20 py-10 lg:flex font-[sans-serif] grid justify-between lg:gap-0 gap-12 items-end lg:px-20 md:px-15 px-7">
      <main className="lg:w-[40%] flex flex-col gap-7">
        <p className="text-green-800 text-lg underline decoration-wavy decoration-[1.3px] decoration-green-800 font-thin underline-offset-10 lg:scale-100 md:scale-90 scale-70">
          Aj Studios
        </p>
        <p className="lg:text-[3.1rem] md:text-[3rem] text-[1.7rem] leading-tight font-semibold">
          We're a Team of Creatives Ready to Capture Your Event
        </p>
        <p>
          Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri
          accommodare sed. Suscipit lobortis prodesset ut eam. Sale dicta dolore
          pri et, an aliquam.
        </p>
        {/* <button className="lg:px-4 tracking-widest md:px-4 py-3 px-2 text-sm rounded-sm font-semibold flex items-center justify-center bg-[rgb(74,125,109)] text-white group hover:pl-4">
          Read More
        </button> */}
      </main>
      <main className="lg:w-[50%] text-[1rem] grid grid-cols-2 gap-10 items-center justify-center">
        <p className="flex flex-col gap-1">
          <img className="w-17" src="/love.png" alt="" />
          <h1 className="font-semibold text-xl">01. Weddings</h1>
          Est sale definitiones id. Ut quo quem harum munere, eu labore
          voluptatum mei.
        </p>
        <p className="flex flex-col gap-1">
          <img className="w-17" src="/love.png" alt="" />
          <h1 className="font-semibold text-xl">02. Portraits</h1>
          Est sale definitiones id. Ut quo quem harum munere, eu labore
          voluptatum mei.
        </p>
        <p className="flex flex-col gap-1">
          <img className="w-17" src="/love.png" alt="" />
          <h1 className="font-semibold text-xl">03. Fashion</h1>
          Est sale definitiones id. Ut quo quem harum munere, eu labore
          voluptatum mei.
        </p>
        <p className="flex flex-col gap-1">
          <img className="w-17" src="/love.png" alt="" />
          <h1 className="font-semibold text-xl">04. Video</h1>
          Est sale definitiones id. Ut quo quem harum munere, eu labore
          voluptatum mei.
        </p>
      </main>
    </div>
  );
}
