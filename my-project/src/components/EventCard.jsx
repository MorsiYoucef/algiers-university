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
          <a className="action w-[30%]" href="#">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventCard
