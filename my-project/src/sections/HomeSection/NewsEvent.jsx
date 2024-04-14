import { News } from '../../data/data'
import NewCard from '../../components/NewCard'
import Slider from 'react-slick'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const NewsEvent = () => {
  const [display, setDisplay] = useState(true)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  return (
    <div className=" flex flex-col h-[60vh] p-10 mb-10  gap-10">
      <h1 className=" text-xl font-bold">NOS ACTUALITÉ</h1>
      <div
        className=" grid gap-10"
        style={{ display: display ? 'block' : 'none' }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            {News.map((news) => (
              <NewCard key={news.title} {...news} />
            ))}
          </Slider>
        </div>
      </div>
      {/* <button class="button-52" role="button">
        toute l'actualite
      </button> */}
    </div>
  )
}

export default NewsEvent
