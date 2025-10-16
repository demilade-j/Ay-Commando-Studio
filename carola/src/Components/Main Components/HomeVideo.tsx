import HomeFooter from "../Home/Home1/HomeFooter/HomeFooter";
import HomeJammedPics from "../Home/Home1/HomeJammedPics/HomeJammedPics";
import AfterHomeVidHero from "../Home/HomeVideo/AfterHero/AfterHomeVidHero";
import HomeHeroVideo from "../Home/HomeVideo/Hero/HomeVidCarousel";
import HomeVidContact from "../Home/HomeVideo/HomeVidContact/HomeVidContact";
import HomeVidGallery from "../Home/HomeVideo/HomeVidGallery/HomeVidGallery";
import HomeVidRecog from "../Home/HomeVideo/HomeVidRecog/HomeVidRecog";

export default function HomeVideo() {
  return (
    <div>
        <HomeHeroVideo/>
        <AfterHomeVidHero/>
        <HomeVidGallery/>
        <HomeVidRecog/>
        <HomeVidContact/>
        <HomeJammedPics/>
        <HomeFooter/>
    </div>
  )
}
