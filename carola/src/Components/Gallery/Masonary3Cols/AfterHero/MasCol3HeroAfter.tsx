import MasCol2AftHeroGallery from "./MasCol3AftHeroGallery";

export default function MasCol3HeroAfter() {
  return (
    <div className="flex flex-col lg:gap-17 md:gap-17 gap-7 py-20 lg:px-20 md:px-20 px-5 text-sm">
        <p>Lacus ut nisi ultrices faucibus. Pellentesque porta felis id erat sodales condimentum. Nam a lectus egestas, fermentum mi in, auctor lacus. Fusce a enim vel neque. Morbi facilisis justo sit amet urna feugiat aliquam. Nullam faucibus sodales mi. Vivamus nisl lorem, vulputate id pellentesque non, tristique ac leo.</p>
        <main className="columns-3 lg:gap-4 md:gap-4 gap-1"> 
        <MasCol2AftHeroGallery/>
        </main>
    </div>
  )
}
