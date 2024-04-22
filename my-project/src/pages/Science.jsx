import ClubScien from '../sections/ScienceSection/ClubScien'
import FaculteNav from '../components/FaculteNav'
import Info from '../components/info'
import NosActualite from '../components/NosActualite'
import NosProgramme from '../sections/ScienceSection/NosProgramme'
import ServiceSco from '../sections/ScienceSection/ServiceSco'
import Sport from '../sections/ScienceSection/Sport'
import Stat from '../sections/ScienceSection/Stat'
import Footer from '../sections/ScienceSection/Footer'

const Science = () => {
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
          <div className="scienceImg "></div>
        </section>
        <section>
          <NosActualite />
        </section>
        <section>
          <NosProgramme />
        </section>
        <section>
          <ServiceSco />
        </section>
        <section>
          <ClubScien />
        </section>
        <section className=" sport">
          <Sport />
        </section>
        <section className=" pt-20">
          <Stat />
        </section>
      </div>
      <div className="bg-my-blue grid gap-10 pt-10">
        <Footer />
      </div>
    </main>
  )
}

export default Science
