const NewCard = ({ title }) => {
  return (
    <div className="w-[300px] grid gap-5 pt-5 mt-5 mb-5">
      <h1 className=" text-xl font-bold text-right hover:underline cursor-pointer">
        {title}
      </h1>
    </div>
  )
}

export default NewCard
