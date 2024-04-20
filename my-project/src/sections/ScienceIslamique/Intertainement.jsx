import IslamiCard from '../../components/IslamiCard'
import IntertainCard from './IntertainCard'

const Intertainement = () => {
  return (
    <div className="">
      <div className=" grid grid-cols-4   p-5 gap-10">
        <div>
          <h1 className="text-3xl text-right border-b-2 border-my-original-green">
            تواصل معنا
          </h1>
        </div>

        <div className=" col-span-3 ">
          <h1 className="text-3xl text-right border-b-2 border-my-original-green">
            النشاطات الثقافية و الرياضية
          </h1>
          <div className=" grid grid-rows-4  pt-5">
            <div className=" row-span-3">
              <IslamiCard
                imgURL="/assets/images/intertai.png"
                title="المسابقة الوطنية للبرمجة والروبوتات"
                date=" فبراير، 2024"
              />
            </div>

            <div className=" pb-10 row-span-1">
              <IntertainCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intertainement
