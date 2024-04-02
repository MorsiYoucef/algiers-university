import { News } from '../../data/data'
import NewCard from '../../components/NewCard'

const NewsEvent = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className=" text-xl font-bold">NOS ACTUALITÉ</h1>
      <div className=" grid grid-cols-4 gap-10">
        {News.map((news) => (
          <NewCard key={news.title} {...news} />
        ))}
      </div>
      <button class="button-52" role="button">
        toute l'actualite
      </button>

      {/* <div class=" col-span-2 relative ">
        <div className=" flex items-center gap-3 ">
          <h1 className=" w-[100px]">Nos Actualite</h1>
          <div class="h-0.5 w-[700px] bg-gray-400"></div>
        </div>
        <div className=" grid grid-cols-2 gap-10">
          {News.map((news) => (
            <NewCard key={news.title} {...news} />
          ))}
        </div>
        <div className=" flex justify-end p-5 relative right-36 gap-5">
          <button className=" ">Plus d'actualite</button>
          <img
            src="/assets/icons/plus-square-svgrepo-com.svg"
            alt="more"
            width={30}
          />
        </div>
      </div> */}
      {/* <div>
        <div className=" flex justify-center items-center gap-3 ">
          <h1>Nos evenement</h1>
          <div class="h-0.5 w-[350px] bg-gray-400"></div>
        </div>
        <div className=" p-10 flex flex-col gap-4">
          {Events.map((event) => (
            <EventCard key={event.name} {...event} />
          ))}
        </div>
        <div className=" flex justify-end p-5 relative right-20 bottom-10 gap-5">
          <button className=" ">Plus d'evenement</button>
          <img
            src="/assets/icons/plus-square-svgrepo-com.svg"
            alt="more"
            width={30}
          />
        </div> */}
    </div>
  )
}

export default NewsEvent
