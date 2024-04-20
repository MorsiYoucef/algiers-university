const InfoCard = ({ title, discription }) => {
  return (
    <div className=" flex flex-col gap-5">
      <img src="/assets/images/carte-etudiant.png" alt={title} />
      <div className=" grid gap-2">
        <h1 className=" text-right text-xl font-bold hover:underline">
          {title}
        </h1>
        <p className=" text-right">{discription}</p>
      </div>
    </div>
  )
}

export default InfoCard
