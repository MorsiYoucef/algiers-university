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
    </div>
  )
}

export default NewsEvent
