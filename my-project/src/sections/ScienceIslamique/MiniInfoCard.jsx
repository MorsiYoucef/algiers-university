import { MiniInfoData } from '../../data/data'

const MiniInfoCard = ({ title, imgUrl, date }) => {
  return (
    <div className=" grid grid-rows-3 gap-5">
      {MiniInfoData.map((data) => (
        <div className=" flex justify-center items-center border-b-2 border-my-original-green">
          <div className=" grid gap-2">
            <h1 className=" text-right text-xl font-bold hover:underline">
              {data.title}
            </h1>
            <h1 className=" text-right text-gray-500">{data.date}</h1>
          </div>
          <img src={data.imgURL} alt={data.title} width={200} />
        </div>
      ))}
    </div>
  )
}

export default MiniInfoCard
