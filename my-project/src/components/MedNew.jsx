const MedNew = ({ title }) => {
  return (
    <button className=" bg-red-600 text-white flex w-full h-full border-b-2 border-l-2 justify-start gap-3  items-center pl-3">
      <h1 className=" font-bold text-[18px]">{title}</h1>
    </button>
  )
}

export default MedNew
