import { ScienceStat } from '../../data/data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Statiscics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`bg-gray-300 ${inView ? 'animate-fade-in' : ''}`}>
      <h1 className="text-3xl font-bold text-my-blue text-center">
        Les statistiques de la Faculté
      </h1>
      <div className="flex justify-center items-center gap-40 p-10">
        {ScienceStat.map((stat, index) => (
          <div key={index} className="flex justify-center items-center gap-5">
            <img src={stat.iconURL} alt={stat.title} />
            <div>
              <h1 className="text-4xl font-bold text-my-blue text-center">
                <CountUp start={0} end={stat.num} duration={2} />
              </h1>
              <h1 className="text-xl font-bold text-my-blue text-center">
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
