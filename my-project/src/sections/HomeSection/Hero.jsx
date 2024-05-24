import React from 'react'
import Plateform from '../../components/Plateform'
import { HeroRight } from '../../data/data'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
}
const slideImages = [
  {
    url: '/assets/images/alg5.png',
  },

  {
    url: '/assets/images/alg6.png',
  },
]

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-5">
      <div className="slide-container col-span-4">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div class=" grid grid-rows-7">
        {HeroRight.map((plat) => (
          <Plateform key={plat.title} {...plat} />
        ))}
      </div>
    </div>
  )
}

export default Hero
