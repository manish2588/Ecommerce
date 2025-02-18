
import HeroSection from '../components/HeroSection'
import LatestCollection from '../components/LatestCollection'
import HomeCard from '../components/HomeCard'
import { assets } from '../assets/assets'
function Home() {
  return (
    <div>
        <HeroSection/>
        <LatestCollection/>
        <div className='grid grid-cols-1 space-y-8 lg:grid-cols-3 mt-16'>
          <HomeCard heading={'Easy Exchange Policy'} description={'We offer hassle free exchange policy'} img={assets.exchange_icon}/>
          <HomeCard heading={'7 Days Return Policy'} description={'We provide 7 days free return policy'} img={assets.quality_icon}/>
          <HomeCard heading={'Best customer support'} description={'We provide 24/7 customer support'} img={assets.support_img}/>
        </div>
    </div>
  )
}

export default Home