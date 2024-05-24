import { islamiqueNav } from '../data/data'
import SearchBar from './SearchBar'

const InfoArab = () => {
  return (
    <section className="">
      <div className=" bg-my-green text-white  ">
        <ul className=" flex flex-row justify-center items-center gap-6 w-[1286px]">
          <li>
            <SearchBar />
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                المكتبة
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  التعريف بالمكتبة
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  الانخراط في المكتبة
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  الخدمات المرجعية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  استمارات
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  معلومات هامة
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                خدمات عن بعد
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  المنصة التعليمية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  منصة الشكاوي
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  الأرضية الرقمية لطلب الوثائق الإدارية GRH
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  المكتبة الرقمية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  البوابة الوطنية للاشعار عن الأطروحات PNST
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  البوابة الجزائرية للنشر الالكتروني ASJP
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                البحث و الانتاج العلمي و الثقافي
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  مخابر البحث
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  المجالات العلمية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  منشورات و مذكرات
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  جمعية كليات الشريعة في اتحاد الجامعات العربية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  النوادي العلمية
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                المجلس العلمي
                <i class="fa fa-caret-down"></i>
              </button>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                هيئة التدريس
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  أساتذة الكلية
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                الأقسام
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  جذع مشترك سنة أولى
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  قسم الشريعة و القانون
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  قسم العقائد و الأديان
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  قسم اللغة العربية و الحضارة الاسلامية
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold  ">
                عن الكلية
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  تقديم الكلية
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  الأمانة العامة
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  قرارات و مراسيم وزارية
                </a>
              </div>
            </div>
          </li>
          {/* {islamiqueNav.map((sience) => (
            <li>{sience.title}</li>
          ))} */}
        </ul>
      </div>
    </section>
  )
}

export default InfoArab
