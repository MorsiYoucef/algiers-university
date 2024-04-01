import { NavLeft, NavRight } from '../data/data'
import SearchBar from './SearchBar'
import TwoItems from './TowItems'

const Nav = () => {
  return (
    <div className=" border-b">
      <div className=" grid grid-cols-3 justify-items-end align-items-end bg-my-green text-white gap-0 h-10">
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
            {/* <div className=" h-10 w-1 bg-white"></div> */}
            <div className=" border-l-2 h-full">
              <select
                name="faculty"
                className=" bg-my-green bg-opacity-25 h-10"
              >
                <option value="">autre faculte</option>
                <option value="SI">faculte des Science islamique</option>
                <option value="S">faculte des sciences</option>
                <option value="M">faculte de medecine </option>
                <option value="Ph">faculte de pharmacie </option>
                <option value="Dr">faculte de droit </option>
              </select>
            </div>
            <div className=" border-l-2">
              <select
                name="language"
                className=" bg-my-green bg-opacity-25 text-xl h-10"
              >
                <option value="Fr">Fr</option>
                <option value="En">En</option>
                <option value="Ar">Ar</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white p-4 flex flex-row justify-center justify-around items-center">
        <img
          src="/assets/images/blueLogo.png"
          alt="blue logo"
          width={150}
          height={150}
        />
        <ul className=" flex flex-row gap-20 justify-center items-center">
          <li>Actualite</li>
          <li>universite</li>
          <li>recherche</li>
          <li>formation</li>
          <li>incubateur</li>
          <li>incubateurantine</li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
