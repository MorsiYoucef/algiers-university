import { ScienceStat } from '../../data/data'

const Statiscics = () => {
  return (
    <div className=" bg-gray-300">
      <h1 className=" text-3xl font-bold text-my-blue text-center">
        Les statistique de la Faculte
      </h1>
      <div className="  flex justify-center items-center gap-40 p-10">
        {ScienceStat.map((stat) => (
          <div className=" flex justify-center items-center gap-5">
            <img src={stat.iconURL} alt={stat.title} />
            <div>
              <h1 className=" text-4xl font-bold text-my-blue text-center">
                {stat.num}
              </h1>
              <h1 className=" text-xl font-bold text-my-blue text-center">
                {stat.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statiscics
