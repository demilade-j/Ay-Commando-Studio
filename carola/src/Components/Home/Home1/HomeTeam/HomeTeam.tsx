import HomeTeamImages from "./HomeTeamImages";
import HomeTeamPpl from "./HomeTeamPpl";

export default function HomeTeam() {
  return (
    <div className="py-17 lg:px-15 md:px-15 px-5 flex flex-col lg:gap-17 gap-7">
        <main className="flex flex-col gap-6">
        <p className="text-[rgb(74,125,109)] lg:text-xl text-2xl underline decoration-wavy decoration-[1.3px] decoration-[rgb(74,125,109)] font-thin underline-offset-10 lg:scale-100 md:scale-90 scale-70">
          Our Team
        </p>
        <h1 className="text-4xl font-[700]">The Creatives</h1>
      </main>
        <HomeTeamPpl/>
        <HomeTeamImages/>
    </div>
  )
}
