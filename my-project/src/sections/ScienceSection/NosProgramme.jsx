import { ScienceProg } from '../../data/data'

const NosProgramme = () => {
  return (
    <section className=" pt-10">
      <h1 className=" text-white text-2xl bg-my-blue p-4 font-bold pl-10">
        Nos programmes
      </h1>
      <div className=" grid grid-cols-3 gap-16 p-10">
        {ScienceProg.map((prog) => (
          <div className=" grid gap-5">
            <img
              src={prog.imgURL}
              alt={prog.title}
              className="hover:scale-110 hover:opacity-75 transition duration-300"
            />
            <h1 className=" text-2xl font-bold text-center">{prog.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NosProgramme
