import FaqAfterHero from "../Faqs/AfterHero/FaqAfterHero";
import FaqAfterHero2 from "../Faqs/AfterHero/FaqAfterHero2";
import FaqAfterHero3 from "../Faqs/AfterHero/FaqAfterHero3";
import FaqHero from "../Faqs/Hero/FaqHero";
import HomeFooter from "../Home/Home1/HomeFooter/HomeFooter";
import HomeJammedPics from "../Home/Home1/HomeJammedPics/HomeJammedPics";

export default function Faqs() {
  return (
    <div>
        <FaqHero/>
        <FaqAfterHero/>
        <FaqAfterHero2/>
        <FaqAfterHero3/>
        <HomeJammedPics/>
        <HomeFooter/>
    </div>
  )
}
