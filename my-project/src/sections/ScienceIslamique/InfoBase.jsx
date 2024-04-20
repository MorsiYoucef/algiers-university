import InfoCard from './InfoCard'
import MiniInfoCard from './MiniInfoCard'

const InfoBase = () => {
  return (
    <main>
      <div className=" grid grid-cols-3 p-5 gap-10">
        <div>
          <h1 className="text-3xl text-right border-b-2 border-my-original-green">
            فضاء الإعلانات
          </h1>
          <div className=" p-5 ">
            <MiniInfoCard />
          </div>
        </div>
        <div className="col-span-2">
          <h1 className=" text-3xl text-right border-b-2 border-my-original-green">
            أخبار الكلية
          </h1>
          <div className=" grid grid-cols-2 p-5 gap-5">
            <div className="">
              <MiniInfoCard />
            </div>
            <InfoCard
              title="إعلان بعدم صلاحية بطاقات الطلبة القديمة للدخول للكلية"
              discription=" ينهي نائب العميد للدراسات إلى علم كاف ة الطلبة في طوري الليسانس والماستر
بضرورة امتالكهم لبطاقة طالب حديثة صادرة في السنة الجامعية الحالية -2024"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default InfoBase
