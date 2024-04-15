import { DroitPlatforme } from '../../data/data'
import PlatformCard from './PlatformCard'

const OnlineService = () => {
  return (
    <div>
      <h1 className=" text-3xl text-right border-b-2 p-5">خدمات على الخط</h1>
      <div className=" grid grid-cols-8 gap-5 justify-center items-center p-5">
        {DroitPlatforme.map((Platform) => (
          <PlatformCard key={Platform.title} {...Platform} />
        ))}
      </div>
    </div>
  )
}

export default OnlineService
