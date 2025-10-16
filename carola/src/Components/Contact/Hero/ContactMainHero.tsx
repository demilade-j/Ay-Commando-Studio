export default function ContactMainHero() {
  return (
    <div className="h-170">
      <img className="absolute h-full w-full -z-20" src="/contact-page.jpg" />

      <div className="h-full w-full absolute flex gap-4 text-[white] z-40 items-center justify-center flex-col">
        <h1 className="lg:text-7xl font-semibold text-center md:text-5xl text-3xl">Contact</h1>
        <p className="lg:text-xl text-[0.8rem]">We're here to catch your event</p>
      </div>

      <div className="opacity-50  absolute h-full w-full top-0 bg-[black]"></div>
    </div>
  );
}
