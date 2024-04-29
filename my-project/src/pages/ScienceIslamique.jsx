import FaculteNav from '../components/FaculteNav'
import InfoArab from '../components/InfoArab'
import HeroInfo from '../sections/ScienceIslamique/HeroInfo'
import InfoBase from '../sections/ScienceIslamique/InfoBase'
import Intertainement from '../sections/ScienceIslamique/Intertainement'
import Statiscics from '../sections/ScienceIslamique/Statiscics'
import Footer from '../sections/HomeSection/Footer'

const ScienceIslamique = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="الشريعــــــــــــة اسلامية"
        mainTitle="Sciences islamiques"
        mainColor="text-my-original-green"
      />
      <section className="fixed flex justify-center items-center w-full relative top-16">
        <InfoArab />
      </section>
      <div className=" max-w-[1286px] mx-auto border-l border-r relative top-[4.1rem]">
        <section>
          <HeroInfo />
        </section>
        <section>
          <InfoBase />
        </section>
        <section>
          <Statiscics start={0} end={1800} />
        </section>
        <section>
          <Intertainement />
        </section>
      </div>
      <div className="bg-my-blue grid gap-10 pt-10 relative top-[4.1rem]">
        <Footer />
      </div>
    </main>
  )
}

export default ScienceIslamique
