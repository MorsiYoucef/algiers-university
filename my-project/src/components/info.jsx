import React from 'react'
import { scienceNav } from '../data/data'
import SearchBar from './SearchBar'

const Info = () => {
  return (
    <section>
      <div className=" bg-my-green text-white  ">
        <ul className=" flex flex-row justify-center items-center gap-14 w-[1286px]">
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                Faculte
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  presentation
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  mot du doyen
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  secritaire generale
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  organigramme
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>PV du conseille</p>
                  <p>scientifique de la faculte</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  textes reglementaires
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
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  Le systeme LMD
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  License
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  Master
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  Doctorat
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                Graduation
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Activités du RecteurVice Doyen </p>
                  <p>chargé des études et des </p>
                  <p>questions liées aux étudiants</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  Service de la scolarité
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Service de l'enseignement</p>
                  <p>et de l'evaluation</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Service des statistiques,</p>
                  <p>de l'information et de l'orientation</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  consultation et appel d'offre
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  text reglementaire
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                post graduation
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Vice Doyen chargé</p>
                  <p>de la Post-Graduation</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Service de suivi de</p>
                  <p>la formation Post-Graduation</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>Service de suivi des</p>
                  <p>activités de la Post-Graduation</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  Textes réglementaires
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  <p>consultation et appel </p>
                  <p>d'offre</p>
                </a>
                <a
                  href="#"
                  className=" font-bold hover:text-my-blue border-b-2"
                >
                  text reglementaire
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button className="dropbtn font-bold ">
                services en-ligne
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
                  <p>Consultations et appels</p>
                  <p>d’offres</p>
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  Textes réglementaires
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  <p>consultation et </p>
                  <p>appel d'offre</p>
                </a>
                <a href="#" className=" font-bold hover:text-my-blue">
                  text reglementaire
                </a>
              </div>
            </div>
          </li>
          <li>
            <button className="dropbtn font-bold ">
              contacts
              <i class="fa fa-caret-down"></i>
            </button>
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
