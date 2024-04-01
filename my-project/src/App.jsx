import Nav from './components/Nav'
import { Hero, NewsEvent, StageReunion, Formation } from './sections'
import Agenda from './sections/Agenda'
import './index.css'
import Footer from './sections/Footer'
// import NewsLetter from './sections/NewsLetter'
import VieEtudiant from './sections/VieEtudiant'

function App() {
  return (
    <main className="">
      <Nav />
      <div className="max-w-[1286px] mx-auto border-l border-r">
        <section className=" flex justify-center items-center  w-full">
          <Hero />
        </section>
        <section className=" p-5 ">
          <NewsEvent />
        </section>
        <section className="container">
          <Agenda />
        </section>
        <section className=" p-20">
          <Formation />
        </section>
        <section className=" background pb-10">
          <VieEtudiant />
        </section>
      </div>
      <section className=" bg-my-blue grid gap-10 pt-10 ">
        {/* <NewsLetter /> */}
        {/* <div className=" w-[700px] h-0.5 bg-white relative left-[600px]"></div> */}
        <Footer />
        <h1 className=" flex justify-center items-center text-white p-5">
          © 2024 |Université D'Alger 1
        </h1>
      </section>
    </main>
  )
}

export default App
