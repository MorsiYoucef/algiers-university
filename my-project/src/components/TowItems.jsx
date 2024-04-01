const TwoItems = ({ imgURL, alt, title }) => {
  return (
    <div className=" flex gap-2">
      <img src={imgURL} alt={alt} width={25} height={25} className=" flex " />
      {title && <h1 className="">{title}</h1>}
    </div>
  )
}

export default TwoItems
