import { IntertainData } from '../../data/data'

const IntertainCard = () => {
  return (
    <div className=" grid grid-cols-2 gap-5 pt-5">
      {IntertainData.map((data) => (
        <div className=" flex justify-center items-center border-b-2 pb-2 border-my-original-green gap-2">
          <div className=" grid gap-2">
            <h1 className=" text-right text-gray-500 grid justify-end items-end">
              {data.date}
            </h1>
            <h1 className=" text-right font-bold hover:underline">
              {data.title}
            </h1>
          </div>
          <img src={data.imgURL} alt={data.title} width={120} />
        </div>
      ))}
    </div>
  )
}

export default IntertainCard
