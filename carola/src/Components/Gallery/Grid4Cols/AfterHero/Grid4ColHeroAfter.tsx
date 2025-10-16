import Grid4ColAftHeroGallery from "./Grid4ColsAftHeroGallery";

export default function Grid4ColHeroAfter() {
  return (
    <div className="flex flex-col lg:gap-17 md:gap-17 gap-7 py-20 lg:px-20 md:px-20 px-5 text-sm">
        <main className="grid grid-cols-4 lg:gap-4 md:gap-4 gap-1"> 
        <Grid4ColAftHeroGallery/>
        </main>
    </div>
  )
}
