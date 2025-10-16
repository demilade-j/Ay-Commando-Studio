import Grid4ColHeroAfter from "../Gallery/Grid4Cols/AfterHero/Grid4ColHeroAfter";
import Grid4Hero from "../Gallery/Grid4Cols/Hero/Masonary4Hero";
import HomeFooter from "../Home/Home1/HomeFooter/HomeFooter";
import HomeJammedPics from "../Home/Home1/HomeJammedPics/HomeJammedPics";

export default function Grid4GalleryCols() {
  return (
    <div>
        <Grid4Hero/>
        <Grid4ColHeroAfter/>
        <HomeJammedPics/>
        <HomeFooter/>
    </div>
  )
}
