import FaculteNav from '../components/FaculteNav'
import Heromed from '../components/heromed'
import Hisstat from '../components/his-stat'
import Info from '../components/info'
import NosActualite from '../components/NosActualite'
import Footer from '../sections/HomeSection/Footer'

const Medecine = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="الطــــــــــــب"
        mainTitle="Medecine"
        mainColor="text-red-600"
      />

      <div className=" max-w-[1286px] mx-auto border-l border-r ">
        <section className=" flex justify-center items-center  w-full">
          <Info />
        </section>{' '}
        <section>
          <Heromed />
        </section>
        <section>
          <NosActualite />
        </section>
        <section className=" p-16">
          <Hisstat />
        </section>
      </div>
      <div className="bg-my-blue grid gap-10 pt-10">
        <Footer />
      </div>
    </main>
  )
}

export default Medecine
