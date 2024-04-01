const ScienceNew = ({ title, description }) => {
  return (
    <div className="w-[250px] grid gap-5 border-t-2 pt-5">
      <h1 className=" text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ScienceNew
