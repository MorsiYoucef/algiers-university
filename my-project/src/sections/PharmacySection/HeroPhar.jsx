import PharNew from '../../components/PharNew'
import { Heropharmacy } from '../../data/data'

const HeroPhar = () => {
  return (
    <section>
      <div className="pharmacyIMG "></div>
      <div className=" flex h-20">
        {Heropharmacy.map((plat) => (
          <PharNew key={plat.title} {...plat} />
        ))}
      </div>
    </section>
  )
}

export default HeroPhar
