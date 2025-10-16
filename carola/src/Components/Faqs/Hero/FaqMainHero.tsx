export default function FaqMainHero() {
  return (
    <div className="h-170">
      <img className="absolute h-full w-full -z-20" src="/portfolio1-page.jpg" />

      <div className="h-full w-full absolute flex gap-4 text-[white] z-40 items-center justify-center flex-col">
        <h1 className="lg:text-7xl font-semibold text-center md:text-5xl text-3xl">Frequently Asked Questions</h1>
        <p className="lg:text-xl text-[0.8rem]">Ask Us</p>
      </div>

      <div className="opacity-50  absolute h-full w-full top-0 bg-[black]"></div>
    </div>
  );
}
