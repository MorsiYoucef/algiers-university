const TwoItems = ({ imgURL, alt, title }) => {
  return (
    <div className=" flex justify-center items-center gap-2">
      <img
        src={imgURL}
        alt={alt}
        width={35}
        height={35}
        className=" flex justify-center items-center"
      />
      {title && <h1 className=" text-xl">{title}</h1>}
    </div>
  )
}

export default TwoItems
