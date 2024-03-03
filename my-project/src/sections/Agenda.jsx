import { Events } from '../data/data'
import EventCard from '../components/EventCard'

const Agenda = () => {
  return (
    <div>
      <h1 className=" text-xl font-bold pl-10 pt-3">NOS EVENMENT</h1>
      <div className=" p-10 grid grid-cols-3 gap-4">
        {Events.map((event) => (
          <EventCard key={event.name} {...event} />
        ))}
      </div>
      <div className=" flex justify-center items-center relative bottom-4">
        <button className="button-52" role="button">
          toute evenement
        </button>
      </div>
    </div>
  )
}

export default Agenda
