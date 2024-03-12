import { NavLeft, NavRight } from '../data/data'
import TwoItems from '../components/TowItems'
import SearchBar from '../components/SearchBar'
import IslamiCard from '../components/IslamiCard'
import { IslamiqueImages } from '../data/data'

const ScienceIslamique = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 justify-items-end align-items-end bg-my-green text-white gap-0 h-10">
        <div className=" flex flex-row gap-8 justify-center items-center ">
          {NavLeft.map((left) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={left.alt} {...left} />
            </h1>
          ))}
        </div>
        <div className=" flex flex-row gap-5 ">
          {NavRight.map((right) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={right.alt} {...right} />
            </h1>
          ))}
        </div>
        <div>
          <div className=" flex flex-row gap-10 ">
            {/* <div className=" h-10 w-1 bg-white"></div> */}
            <div className=" border-l-2 h-full">
              <select
                name="faculty"
                className=" bg-my-green bg-opacity-25  text-xl h-10"
              >
                <option value="">autre faculte</option>
                <option value="SI">faculte des Science islamique</option>
                <option value="S">faculte des sciences</option>
                <option value="M">faculte de medecine </option>
                <option value="Ph">faculte de pharmacie </option>
                <option value="Dr">faculte de droit </option>
              </select>
            </div>
            <div className=" border-l-2">
              <select
                name="language"
                className=" bg-my-green bg-opacity-25 text-xl h-10"
              >
                <option value="Fr">Fr</option>
                <option value="En">En</option>
                <option value="Ar">Ar</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src="/assets/images/blueLogo.png"
          alt="Logo"
          width={250}
          className=" border-r-2 pr-2 mr-2"
        />

        <h1 className="text-[38px] font-bold text-my-blue">
          Faculte des <hr />
          <span className=" text-my-green text-center">
            Sciences islamiques
          </span>
        </h1>
      </div>
      <div className=" pl-80 pr-80">
        <div className=" bg-my-green text-white ">
          <ul className=" flex flex-row justify-center items-center gap-10 text-xl">
            <li>
              <SearchBar />
            </li>
            <li>تواصل معنا</li>
            <li>خدمات عن بعد</li>
            <li>المكتبة</li>
            <li>البحث و الانتاج العلمي و الثقافي</li>
            <li>المجلس العلمي</li>
            <li>هيئة التدريس</li>
            <li>الأقسام</li>
            <li>عن الكلية</li>
          </ul>
        </div>
        <div className=" grid grid-cols-4 grid-rows-2">
          {IslamiqueImages.map((img) => (
            <IslamiCard key={img.imgURL} {...img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScienceIslamique
