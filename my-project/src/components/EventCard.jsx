const EventCard = ({ imgURL, name, date }) => {
  return (
    <div className=" card-1">
      <img src={imgURL} alt={name} className=" w-full h-full" />
      <div className=" card__content">
        <div className=" grid gap-5">
          <div className=" grid gap-5">
            <h1 className="text-justify text-[14px]">{date}</h1>
          </div>
          <a className="action w-[20%]" href="#">
            Plus
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventCard
