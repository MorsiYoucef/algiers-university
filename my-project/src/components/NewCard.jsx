const NewCard = ({ imgURL, title, date, width }) => {
  return (
    <div class="card">
      <div class="card-details">
        <img
          src={imgURL}
          className=" w-[full] h-[20vh] flex justify-center items-center"
        />
        <div className=" p-5 grid gap-5">
          <p class=" font-bold">{title}</p>
          <p class="">{date}</p>
        </div>
      </div>
      <button class="card-button">More info</button>
    </div>
  )
}
export default NewCard
