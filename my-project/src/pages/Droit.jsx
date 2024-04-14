import FaculteNav from '../components/FaculteNav'
import InfoArab from '../components/InfoArab'
import DroitNews from '../sections/DroitSection/DroitNews'
import HeroDroit from '../sections/DroitSection/HeroDroit'
import Presen from '../sections/DroitSection/Presen'

const Droit = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="الحقـــــــوق"
        mainTitle="Droit"
        mainColor="text-black"
      />
      <div className=" max-w-[1286px] mx-auto border-l border-r ">
        <section className=" flex justify-center items-center  w-full">
          <InfoArab />
        </section>{' '}
        <section>
          <HeroDroit />
        </section>
        <section className=" pl-10 pr-10">
          <Presen />
        </section>
        <section className=" p-10">
          <DroitNews />
        </section>
      </div>
    </main>
  )
}

export default Droit
