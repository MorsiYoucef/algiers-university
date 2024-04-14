import ScienceNew from '../components/ScienceNew'
import { scienceNew } from '../data/data'
import Slider from 'react-slick'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const NosActualite = () => {
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
    <section className="p-20">
      <h1 className="text-my-blue text-2xl font-bold mb-5">Nos Actualite</h1>
      <div
        className="grid gap-10  "
        style={{ display: display ? 'block' : 'none' }}
      >
        <Slider {...settings}>
          {scienceNew.map((sci) => (
            <div key={sci.title} className="grid grid-cols-4 gap-5">
              <ScienceNew {...sci} />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="flex justify-center">
        <button className="bg-my-blue text-white p-2 w-32 mt-5">
          Voir Plus
        </button>
      </div> */}
    </section>
  )
}
export default NosActualite
