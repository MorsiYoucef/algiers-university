import FaculteNav from '../components/FaculteNav'
import Info from '../components/info'
import NosActualite from '../components/NosActualite'
import Footer from '../sections/HomeSection/Footer'

const Medecine = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="العلـــــــــوم"
        mainTitle="Science"
        mainColor="text-blue-400"
      />

      <div className=" max-w-[1286px] mx-auto border-l border-r ">
        <section className=" flex justify-center items-center  w-full">
          <Info />
        </section>{' '}
        <section>
          <div className="feature"></div>
          <div className="medecineIMG "></div>
        </section>
        <section>
          <NosActualite />
        </section>
      </div>
      <div className="bg-my-blue grid gap-10 pt-10">
        <Footer />
      </div>
    </main>
  )
}

export default Medecine
