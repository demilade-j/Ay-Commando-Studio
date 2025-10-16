import ToggleModal from "../../../../Reusables/ToggleModalProps/ToggleModal";

export default function FaqAfterHero() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-7 lg:justify-between justify-center items-center lg:px-15 px-7 py-25">
        <main className="lg:w-[47%] w-[80%]">
      <img className="rounded-md w-full h-full" src="/faq-1.jpg" alt="" />
        </main>

      <main className="lg:w-[48%] w-[90%] flex flex-col gap-7">
        <ToggleModal
          label="Sit ne saperet appetere suavitate?"
          answer="Te essent lobortis mea. Fugit dolores no ius, te simul ancillae voluptatibus sea. Magna nullam ad mei. Et quo partem euismod, an ornatus impedit nam, ad quaeque aliquam pro. No usu mutat inimicus consetetur, et nostro labitur voluptatibus sea. Eum vidit scripta voluptaria ad, in cum dictas perpetua. Democritum repudiandae in nec, vel eu deleniti neglegentur."
        />
        <ToggleModal
          label="Aliquip aliquid qualisque eu?"
          answer="Sea et quodsi minimum intellegebat, eirmod lobortis at his. Pri eu melius nostrud, magna euripidis duo in, evertitur prodesset quaerendum ei pri. Vel pertinax quaerendum ut, id esse quas partiendo mea. Porro putant aliquam eu mel. Sit cu voluptaria elaboraret, at affert iudicabit pro, su harum saperet debitis ex."
        />
        <ToggleModal
          label="Perea tantas praesent adolescens?"
          answer="Cum ea meliore eleifend, mel dolores prodesset eu. Zril tollit mandamus pro et, eos ei feugiat labores explicari. Ius ut quis sumo soluta, sea viris scribentur ei. Cum nisl oblique vulputate ex, eos cu wisi petentium. Feugiat hendrerit in mel, in dico reque adversarium ius."
        />
        <ToggleModal
          label="Vix in dicunt suavitate ullamcorper?"
          answer="No vim quem impetus. Mea eu putent possim tamquam. Putant mentitum temporibus in eum, est et suas mutat assueverit, inani commodo accumsan mel in. Qui in epicuri postulant hendrerit, nec et veri harum eirmod."
        />
        <ToggleModal
          label=" Ubique consequuntur vituperatoribus?"
          answer="Duis dicat eos ei. Eam quem dissentiunt reprehendunt in, in eos esse facete aeterno. Nec no intellegam neglegentur. Pri wisi delenit pertinacia et, mel id mundi simul. Legere consequuntur his id, eos ei nostro utamur. Eu discere legimus sed, te alii omittantur nec."
        />
      </main>
    </div>
  );
}
