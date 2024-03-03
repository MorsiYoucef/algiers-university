import { NavLeft, NavRight } from '../data/data'
import TwoItems from './TowItems'

const Nav = () => {
  return (
    <div className=" border-b">
      <div className=" grid grid-cols-3 justify-items-end align-items-end bg-my-blue text-white gap-0">
        <div className=" flex flex-row gap-8 ">
          {NavLeft.map((left) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={left.alt} {...left} />
            </h1>
          ))}
        </div>
        <div className=" flex flex-row gap-5 ">
          {NavRight.map((right) => (
            <h1 className=" border-l-2 border-r-2 pl-2 pr-2">
              <TwoItems key={right.alt} {...right} />
            </h1>
          ))}
        </div>
        <div>
          <select
            name="language"
            className=" bg-my-blue bg-opacity-25 border-l-2 "
          >
            <option value="Fr">Fr</option>
            <option value="En">En</option>
            <option value="Ar">Ar</option>
          </select>
        </div>
      </div>
      <div className=" bg-white p-4 flex flex-row justify-center justify-around items-center">
        <img
          src="/assets/images/blueLogo.png"
          alt="blue logo"
          width={200}
          height={200}
        />
        <ul className=" flex flex-row gap-20 text-xl justify-center items-center">
          <li>Actualite</li>
          <li>universite</li>
          <li>recherche</li>
          <li>formation</li>
          <li>incubateur</li>
          <li>incubateurantine</li>
          <li>
            <img src="/assets/icons/search.png" alt="search" width={40} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
