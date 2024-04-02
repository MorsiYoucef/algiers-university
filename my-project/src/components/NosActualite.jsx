import ScienceNew from '../components/ScienceNew'
import { scienceNew } from '../data/data'

const NosActualite = () => {
  return (
    <section className=" p-10 ">
      <h1 className=" text-my-blue text-2xl font-bold">Nos Actualite</h1>
      <div className=" grid grid-cols-4 pt-10 gap-5">
        {scienceNew.map((sci) => (
          <ScienceNew key={sci.title} {...sci} />
        ))}
      </div>
    </section>
  )
}

export default NosActualite
