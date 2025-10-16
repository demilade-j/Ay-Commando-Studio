import Grid3ColHeroAfter from "../Gallery/Grid3Cols/AfterHero/Grid3ColHeroAfter";
import Grid3Hero from "../Gallery/Grid3Cols/Hero/Masonary4Hero";
import HomeFooter from "../Home/Home1/HomeFooter/HomeFooter";
import HomeJammedPics from "../Home/Home1/HomeJammedPics/HomeJammedPics";

export default function Grid3GalleryCols() {
  return (
    <div>
        <Grid3Hero/>
        <Grid3ColHeroAfter/>
        <HomeJammedPics/>
        <HomeFooter/>
    </div>
  )
}
