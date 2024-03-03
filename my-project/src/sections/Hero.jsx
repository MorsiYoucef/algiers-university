import Plateform from '../components/Plateform'
import { HeroRight } from '../data/data'

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-5">
      <div className="slider col-span-4 "></div>
      <div class=" grid grid-rows-7">
        {HeroRight.map((plat) => (
          <Plateform key={plat.title} {...plat} />
        ))}
      </div>
    </div>
  )
}

export default Hero
