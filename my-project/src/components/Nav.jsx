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
                <option
                  value="/ScienceIslamique"
                  className=" text-my-blue font-bold"
                >
                  faculte des Science islamique
                </option>
                <option value="/Sciences" className=" text-my-blue font-bold">
                  faculte des sciences
                </option>
                <option value="/Medecine" className=" text-my-blue font-bold">
                  faculte de medecine
                </option>
                <option value="/Pharmacie" className=" text-my-blue font-bold">
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
              <button className="dropbtn font-bold text-2xl">
                Actualite
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" className=" font-bold hover:text-my-blue">
                  Activités du Recteur
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Calendrier des évènements
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Consultations et appels d’offres
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Textes réglementaires
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  consultation et appel d'offre
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  text reglementaire
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold text-2xl">
                universite
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" className=" font-bold hover:text-my-blue">
                  Le recteur
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Historique de l'universite
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Vice rectorat
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  secretariat generale
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  service
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  conseil d'ethique et de deontologie
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold text-2xl">
                recherche
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" className=" font-bold hover:text-my-blue">
                  Evenement scientifique
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Laboratoire de recherche
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Production scientifique
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Revue de l'universite
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold text-2xl">
                Formation
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" className=" font-bold hover:text-my-blue">
                  Offre de formation
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className=" font-bold  ">
                incubateur
                <i class="fa fa-angle-down"></i>
              </button>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold">
                Vie Etudiantine
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" className=" font-bold hover:text-my-blue">
                  Œuvres Universitaires
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Guide universitaire
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Ville d'Alger
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Residence universitaire
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Bourse d'etude
                </a>
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
