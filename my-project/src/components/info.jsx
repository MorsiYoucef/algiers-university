import React from 'react'
import { scienceNav } from '../data/data'
import SearchBar from './SearchBar'

const Info = () => {
  return (
    <section>
      <div className=" bg-my-green text-white  ">
        <ul className=" flex flex-row justify-center items-center gap-20 w-[1286px]">
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                Acueille
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
              <button className="dropbtn font-bold ">
                formation
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
              <button className="dropbtn font-bold ">
                Departement
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
              <button className="dropbtn font-bold ">
                Vie a la faculte
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
              <button className="dropbtn font-bold ">
                Bibliotheque
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
            <SearchBar />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Info
