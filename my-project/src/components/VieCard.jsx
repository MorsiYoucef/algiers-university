const VieCard = ({ imgURL, title, description }) => {
  return (
    <div>
      <div class="card-2">
        <img
          src={imgURL}
          alt="Vie Etudiant"
          className=" w-full h-full rounded-[0.5rem]"
        />
        <div class="content">
          <a href="#">
            <span class="title">{title}</span>
          </a>

          <p class="desc">{description}</p>

          <a class="action" href="#">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VieCard
