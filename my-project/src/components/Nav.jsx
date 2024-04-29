import { NavLeft, NavRight } from '../data/data'
import SearchBar from './SearchBar'
import TwoItems from './TowItems'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate() // Create a navigate function from React Router

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value // Get the selected value
    if (selectedValue) {
      navigate(selectedValue) // Navigate to the appropriate route
    }
  }
  return (
    <div className=" border-b fixed w-full z-[9999] top-0">
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
            <div className="border-l-2 h-full pl-2">
              <select
                name="faculty"
                className="bg-my-green bg-opacity-25 h-10"
                onChange={handleSelectChange} // Set up the change event handler
              >
                <option value="">les autres site de l'university</option>
                <option value="/ScienceIslamique">
                  faculte des Science islamique
                </option>
                <option value="/Sciences">faculte des sciences</option>
                <option value="/Medecine">faculte de medecine</option>
                <option value="/Pharmacie">faculte de pharmacie</option>
                <option value="/Droit">faculte de droit</option>
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
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Actualite
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Activités du Recteur</a>
                <a href="#">Calendrier des évènements</a>
                <a href="#">Consultations et appels d’offres</a>
                <a href="#">Textes réglementaires</a>
                <a href="#">consultation et appel d'offre</a>
                <a href="#">text reglementaire</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                universite
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                recherche
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                formation
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                incubateur
                <i class="fa fa-angle-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                incubateurantine
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>

          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
