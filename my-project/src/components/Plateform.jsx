const Plateform = ({ imgURL, title }) => {
  return (
    <button className=" bg-my-blue text-white flex w-full h-full border-b-2 border-l-2 justify-start gap-3  items-center pl-3">
      <img src={imgURL} alt={title} width={40} height={30} />
      <h1 className=" font-bold text-[18px]">{title}</h1>
    </button>
  )
}

export default Plateform
