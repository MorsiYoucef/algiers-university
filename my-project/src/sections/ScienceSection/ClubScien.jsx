import { ClubS } from '../../data/data'

const ClubScien = () => {
  return (
    <section className=" relative bottom-40 grid gap-10">
      <h1 className=" text-2xl font-bold text-center">Club Scientifique</h1>
      <div className=" grid grid-cols-4">
        {ClubS.map((club) => (
          <div className=" grid justify-center items-center">
            <img
              src={club.imgURL}
              alt={club.title}
              className=" rounded-full"
              width={250}
            />
            <h1 className=" text-xl font-bold text-center">{club.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClubScien
