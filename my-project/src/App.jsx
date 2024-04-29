import Nav from './components/Nav'
import {
  Hero,
  NewsEvent,
  StageReunion,
  Formation,
} from './sections/HomeSection'
import Agenda from './sections/HomeSection/Agenda'
import './index.css'
import Footer from './sections/HomeSection/Footer'
// import NewsLetter from './sections/NewsLetter'
import VieEtudiant from './sections/HomeSection/VieEtudiant'

function App() {
  return (
    <main className="">
      <Nav />
      <div className="max-w-[1286px] mx-auto border-l border-r relative top-20">
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
      <section className=" bg-my-blue grid gap-10 pt-10 relative top-20 ">
        <Footer />
      </section>
    </main>
  )
}

export default App
