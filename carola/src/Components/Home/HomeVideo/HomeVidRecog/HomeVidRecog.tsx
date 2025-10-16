import ToggleModal from '../../../../../Reusables/ToggleModalProps/ToggleModal'

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
    img: "/logo-biz7.png",
  },
];

export default function HomeVidRecog() {
  return (
    <article className="font-[sans-serif] py-20 flex flex-col gap-7 bg-pink-100">
      <div className="font-[sans-serif] px-15 py-10 lg:flex lg:flex-row flex-col justify-between">
        <main className="lg:w-[40%] w-full flex flex-col gap-7">
          <p className="text-md font-semibold underline decoration-wavy decoration-[1.3px] text-[#4A7D6D] decoration-[#4A7D6D] underline-offset-10">
            Recognition
          </p>
          <h1 className="font-[550] text-5xl">
            Awards Winning Photograhy and Videography Studio
          </h1>
          <br />
          <img className="rounded-md" src="/gal-6-masonry.jpg" alt="" />
        </main>

        <main className="lg:w-[45%] w-full flex flex-col gap-25 pt-10">
          <article className="flex lg:w-full w-[80%]">
            <img className="w-[33.3%]" src="/awards-1.png" alt="" />
            <img className="w-[33.3%]" src="/awards-2.png" alt="" />
            <img className="w-[33.3%]" src="/awards-3.png" alt="" />
          </article>
          <article className='flex flex-col gap-7'>
        <ToggleModal label='Sit ne saperet appetere suavitate?' answer='Te essent lobortis mea. Fugit dolores no ius, te simul ancillae voluptatibus sea. Magna nullam ad mei. Et quo partem euismod, an ornatus impedit nam, ad quaeque aliquam pro. No usu mutat inimicus consetetur, et nostro labitur voluptatibus sea. Eum vidit scripta voluptaria ad, in cum dictas perpetua. Democritum repudiandae in nec, vel eu deleniti neglegentur.'/>
        <ToggleModal label=' Aliquip aliquid qualisque eu?' answer='Sea et quodsi minimum intellegebat, eirmod lobortis at his. Pri eu melius nostrud, magna euripidis duo in, evertitur prodesset quaerendum ei pri. Vel pertinax quaerendum ut, id esse quas partiendo mea. Porro putant aliquam eu mel. Sit cu voluptaria elaboraret, at affert iudicabit pro, su harum saperet debitis ex.'/>
        <ToggleModal label=' Perea tantas praesent adolescens?' answer='Cum ea meliore eleifend, mel dolores prodesset eu. Zril tollit mandamus pro et, eos ei feugiat labores explicari. Ius ut quis sumo soluta, sea viris scribentur ei. Cum nisl oblique vulputate ex, eos cu wisi petentium. Feugiat hendrerit in mel, in dico reque adversarium ius.'/>
        </article>
        </main>
      </div>
      <br />

      <div className="flex justify-between px-10">
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
    </article>
  );
}
