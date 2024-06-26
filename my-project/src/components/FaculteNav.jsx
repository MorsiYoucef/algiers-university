import { NavLeft, NavRight } from '../data/data'
import TwoItems from '../components/TowItems'
import { useNavigate } from 'react-router-dom'

const FaculteNav = (props) => {
  const navigate = useNavigate() // Create a navigate function from React Router

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value // Get the selected value
    if (selectedValue) {
      navigate(selectedValue) // Navigate to the appropriate route
    }
  }
  return (
    <div className="">
      <div className=" grid grid-cols-3 justify-items-end align-items-end bg-my-green text-white gap-0 ">
        <div className=" flex flex-row gap-8 justify-center items-center ">
          {NavLeft.map((left) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={left.alt} {...left} />
            </h1>
          ))}
        </div>
        <div className=" flex flex-row gap-5 justify-center items-center ">
          {NavRight.map((right) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={right.alt} {...right} />
            </h1>
          ))}
        </div>
        <div>
          <div className=" flex flex-row gap-10 ">
            <div className=" border-l-2 h-full">
              <select
                name="faculty"
                className="bg-my-green bg-opacity-25 h-10"
                onChange={handleSelectChange} // Set up the change event handler
              >
                <option value="">les autres site de l'university</option>
                <option
                  value="/ScienceIslamique"
                  className=" text-my-blue font-bold"
                >
                  faculte des Science islamique
                </option>
                <option value="/Science" className=" text-my-blue font-bold">
                  faculte des sciences
                </option>
                <option value="/Medecine" className=" text-my-blue font-bold">
                  faculte de medecine
                </option>
                <option value="/Pharmacy" className=" text-my-blue font-bold">
                  faculte de pharmacie
                </option>
                <option value="/Droit" className=" text-my-blue font-bold">
                  faculte de droit
                </option>
              </select>
            </div>
            <div className=" border-l-2">
              <select
                name="language"
                className=" bg-my-green bg-opacity-25 text-xl h-10"
              >
                <option value="Fr" className=" text-my-blue font-bold">
                  Fr
                </option>
                <option value="En" className=" text-my-blue font-bold">
                  En
                </option>
                <option value="Ar" className=" text-my-blue font-bold">
                  Ar
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b ">
        <div className=" flex justify-center items-center">
          <img
            src="/assets/images/blueLogo.png"
            alt="Logo"
            width={200}
            className=" border-r-2 pr-2 mr-2"
          />
          <h1 className="text-[28px] font-bold text-my-blue">
            كليـــــــــة
            <span className={`${props.mainColor}`}>{props.arabTitle}</span>
            <hr />
            <span className=" text-my-green text-center">
              Faculte de{' '}
              <span className={`${props.mainColor}`}>{props.mainTitle}</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default FaculteNav
