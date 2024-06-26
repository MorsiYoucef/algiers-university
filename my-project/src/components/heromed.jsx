import { HeroMed } from '../data/data'
import MedNew from './MedNew'

const Heromed = () => {
  return (
    <section>
      <div className="medecineIMG ">
        <div className="featureeee"></div>
      </div>
      <div className=" flex h-20">
        {HeroMed.map((plat) => (
          <MedNew key={plat.title} {...plat} />
        ))}
        {/* {HeroMed.map((plat) => (
          <MedNew key={plat.title} {...plat} />
        ))} */}
      </div>
    </section>
  )
}

export default Heromed
