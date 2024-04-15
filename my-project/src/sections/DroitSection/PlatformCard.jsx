const PlatformCard = ({ icon, title }) => {
  return (
    <div>
      <img src={icon} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}

export default PlatformCard
