import { DroitNewsContent } from '../../data/data'
import Slider from 'react-slick'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NewCard from './NewCard'

const DroitNews = () => {
  const [display, setDisplay] = useState(true)

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  return (
    <div>
      <h1 className=" text-3xl text-right border-b-2 p-5">أخبار الكلية</h1>
      <div className=" relative left-5">
        <Slider {...settings}>
          {DroitNewsContent.map((content) => (
            <NewCard key={content.title} {...content} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default DroitNews
