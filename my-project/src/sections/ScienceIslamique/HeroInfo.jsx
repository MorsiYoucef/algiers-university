import IslamiCard from '../../components/IslamiCard'

const HeroInfo = () => {
  return (
    <div>
      <div className=" grid grid-cols-4 grid-rows-2 h-[600px] mt-1 gap-1">
        <div className=" col-span-2 row-span-2">
          <IslamiCard
            imgURL="/assets/images/andalous.jpg"
            title="إعلان عن يوم دراسي-الهجرة الأندلسية في حاضرة تلمسان-"
            date="مارس، 2024"
          />
        </div>
        <div className="">
          <IslamiCard
            imgURL="/assets/images/journee.jpg"
            title="إعلان عن يوم دراسي-أهمية تحقيق كتب التراث-كتب الحديث نموذجا-"
            date="مارس، 2024"
          />
        </div>
        <div className="">
          <IslamiCard
            imgURL="/assets/images/famille.png"
            title="إعلان عن تأجيل الملتقى الوطني – الأسرة الجزائرية بين تحديات الاستقرار و أفاق التنمية المستدامة – إلى شهر أفريل 2024."
            date="فبراير، 2024"
          />
        </div>
        <div className=" col-span-2">
          <IslamiCard
            imgURL="/assets/images/femme.png"
            title="إعلان عن يوم دراسي – المرأة في الفكر الديني الصوفي ذاتا و موضوعا"
            date="مارس، 2024"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroInfo
