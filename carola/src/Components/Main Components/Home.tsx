import AfterHero from '../Home/Home1/AfterHero/AfterHero'
import HomeB4Gallery from '../Home/Home1/BeforeHomeGallery/HomeB4Gallery'
import HomeContact from '../Home/Home1/HomeContact/HomeContact'
import HomeFooter from '../Home/Home1/HomeFooter/HomeFooter'
import HomeGallery from '../Home/Home1/HomeGallery/HomeGallery'
import HomeJammedPics from '../Home/Home1/HomeJammedPics/HomeJammedPics'
import HomeTeam from '../Home/Home1/HomeTeam/HomeTeam'
import HomeTestimony from '../Home/Home1/HomeTestimonies/HomeTestimony'
import Carousel from './CarouselRelated/HomeHeroCarousel'

export default function Home() {
  return (
    <div>
      <Carousel />
      <AfterHero/>
      <HomeB4Gallery/>
      <HomeGallery/>
      <HomeTestimony/>
      <HomeTeam/>
      <HomeContact/>
      <HomeJammedPics/>
      <HomeFooter/>
    </div>
  )
}
