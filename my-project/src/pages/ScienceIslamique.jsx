import FaculteNav from '../components/FaculteNav'
import InfoArab from '../components/InfoArab'
import HeroInfo from '../sections/ScienceIslamique/HeroInfo'

const ScienceIslamique = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="الشريعــــــــــــة اسلامية"
        mainTitle="Sciences islamiques"
        mainColor="text-my-original-green"
      />
      <div className=" max-w-[1286px] mx-auto border-l border-r ">
        <section className=" flex justify-center items-center  w-full">
          <InfoArab />
        </section>
        <section>
          <HeroInfo />
        </section>
      </div>
    </main>
    // <div>
    //   <div className=" grid grid-cols-3 justify-items-end align-items-end bg-my-green text-white ">
    //     <div className=" flex flex-row gap-8 justify-center items-center ">
    //       {NavLeft.map((left) => (
    //         <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
    //           <TwoItems key={left.alt} {...left} />
    //         </h1>
    //       ))}
    //     </div>
    //     <div className=" flex flex-row gap-5 justify-center items-center ">
    //       {NavRight.map((right) => (
    //         <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
    //           <TwoItems key={right.alt} {...right} />
    //         </h1>
    //       ))}
    //     </div>
    //     <div>
    //       <div className=" flex flex-row gap-10 ">
    //         {/* <div className=" h-10 w-1 bg-white"></div> */}
    //         <div className=" border-l-2 h-full">
    //           <select
    //             name="faculty"
    //             className=" bg-my-green bg-opacity-25 h-10"
    //           >
    //             <option value="">autre faculte</option>
    //             <option value="SI">faculte des Science islamique</option>
    //             <option value="S">faculte des sciences</option>
    //             <option value="M">faculte de medecine </option>
    //             <option value="Ph">faculte de pharmacie </option>
    //             <option value="Dr">faculte de droit </option>
    //           </select>
    //         </div>
    //         <div className=" border-l-2">
    //           <select
    //             name="language"
    //             className=" bg-my-green bg-opacity-25 text-xl h-10"
    //           >
    //             <option value="Fr">Fr</option>
    //             <option value="En">En</option>
    //             <option value="Ar">Ar</option>
    //           </select>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" flex justify-center items-center">
    //     <img
    //       src="/assets/images/blueLogo.png"
    //       alt="Logo"
    //       width={200}
    //       className=" border-r-2 pr-2 mr-2"
    //     />

    //     <h1 className="text-[28px] font-bold text-my-blue">
    //       كليـــــــــــــة
    //       <span className=" text-my-original-green">
    //         الشريعــــــــــــة اسلامية
    //       </span>
    //       <hr />
    //       <span className=" text-my-green text-center">
    //         Faculte des{' '}
    //         <span className=" text-my-original-green">Sciences islamiques</span>
    //       </span>
    //     </h1>
    //   </div>
    //   <div className=" pl-40 pr-40">
    //     <div className=" bg-my-green text-white ">
    //       <ul className=" flex flex-row justify-center items-center gap-14">
    //         <li>
    //           <SearchBar />
    //         </li>
    //         <li>تواصل معنا</li>
    //         <li>خدمات عن بعد</li>
    //         <li>المكتبة</li>
    //         <li>البحث و الانتاج العلمي و الثقافي</li>
    //         <li>المجلس العلمي</li>
    //         <li>هيئة التدريس</li>
    //         <li>الأقسام</li>
    //         <li>عن الكلية</li>
    //       </ul>
    //     </div>
    //     <div className=" grid grid-cols-4 grid-rows-2 h-[600px] pt-5 gap-1">
    //       <div className=" col-span-2 row-span-2">
    //         <IslamiCard
    //           imgURL="/assets/images/andalous.jpg"
    //           title="إعلان عن يوم دراسي-الهجرة الأندلسية في حاضرة تلمسان-"
    //           date="مارس، 2024"
    //         />
    //       </div>
    //       <div className="">
    //         <IslamiCard
    //           imgURL="/assets/images/journee.jpg"
    //           title="إعلان عن يوم دراسي-أهمية تحقيق كتب التراث-كتب الحديث نموذجا-"
    //           date="مارس، 2024"
    //         />
    //       </div>
    //       <div className="">
    //         <IslamiCard
    //           imgURL="/assets/images/famille.png"
    //           title="إعلان عن تأجيل الملتقى الوطني – الأسرة الجزائرية بين تحديات الاستقرار و أفاق التنمية المستدامة – إلى شهر أفريل 2024."
    //           date="فبراير، 2024"
    //         />
    //       </div>
    //       <div className=" col-span-2">
    //         <IslamiCard
    //           imgURL="/assets/images/femme.png"
    //           title="إعلان عن يوم دراسي – المرأة في الفكر الديني الصوفي ذاتا و موضوعا"
    //           date="مارس، 2024"
    //         />
    //       </div>
    //     </div>
    //     <div className=" grid grid-cols-3">
    //       <div>hello world!</div>
    //       <div className=" col-span-2">
    //         <MultiFilters />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ScienceIslamique
