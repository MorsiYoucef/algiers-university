const EventCard = ({ imgURL, name, date }) => {
  return (
    <div className=" card-1">
      <img src={imgURL} alt={name} className=" w-full h-full" />
      <div className=" card__content">
        <div className=" grid gap-10">
          <div className=" grid gap-5">
            {/* <h1 className=" font-bold">{name}</h1> */}
            <h1 className="text-justify">{date}</h1>
          </div>
          <button class="button-51" role="button">
            Lire plus
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
