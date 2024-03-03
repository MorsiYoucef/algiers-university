const TwoItems = ({ imgURL, alt, title }) => {
  return (
    <div className=" flex justify-start gap-2 ">
      <img src={imgURL} alt={alt} width={20} height={20} className=" " />
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default TwoItems
