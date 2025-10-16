export default function AfterHero() {
  return (
    <div className="lg:py-20 md:py-20 py-10 lg:flex grid justify-between lg:gap-0 gap-12 items-end lg:px-20 md:px-20 px-7">
        <main className="lg:w-[42%] flex flex-col gap-7">
            <p className="text-green-800 text-lg underline decoration-wavy decoration-[1.3px] decoration-green-800 font-thin underline-offset-10 lg:scale-100 md:scale-90 scale-70">Our Story</p>
            <p className="lg:text-[3rem] md:text-[3rem] text-[1.7rem] leading-tight font-semibold">AyCommando is a Wedding & Portrait Studio based in New York</p>
            <article className="flex">
              <img className="w-[33.3%]" src="/awards-1.png" alt="" />
              <img className="w-[33.3%]" src="/awards-2.png" alt="" />
              <img className="w-[33.3%]" src="/awards-3.png" alt="" />
            </article>
        </main>
        <main className="lg:w-[42%] text-[1rem] flex text-gray-700 flex-col gap-10">
          <p>We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.</p>
          <p>Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri accommodare sed. Suscipit lobortis prodesset ut eam. Sale dicta dolore pri et, an aliquam albucius volutpat est. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="grid grid-cols-2 gap-5 list-disc">
            <li>We listen to your needs</li>
            <li>We love what we do</li>
            <li>We are transparent</li>
            <li>We listen to your needs</li>
            <li>We are respectful</li>
            <li>We love what we do</li>
          </ul>
        </main>
    </div>
  )
}
