import FaculteNav from '../components/FaculteNav'
import InfoArab from '../components/InfoArab'

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
      </div>
    </main>
  )
}

export default Droit
