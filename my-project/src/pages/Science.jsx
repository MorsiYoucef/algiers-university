import { NavLeft, NavRight, scienceNew } from '../data/data'
import TwoItems from '../components/TowItems'
import SearchBar from '../components/SearchBar'
import ScienceNew from '../components/ScienceNew'
import { ScienceProg } from '../data/data'

const Science = () => {
  return (
    <div>
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
                className=" bg-my-green bg-opacity-25 h-10"
              >
                <option value="Fr">Fr</option>
                <option value="En">En</option>
                <option value="Ar">Ar</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b">
        <div className=" flex justify-center items-center">
          <img
            src="/assets/images/blueLogo.png"
            alt="Logo"
            width={200}
            className=" border-r-2 pr-2 mr-2"
          />

          <h1 className="text-[28px] font-bold text-my-blue">
            كليـــــــــة
            <span className=" text-blue-400">العلـــــــــوم </span>
            <hr />
            <span className=" text-my-green text-center">
              Faculte de <span className=" text-blue-400">Science</span>
            </span>
          </h1>
        </div>
      </div>
      <div className=" max-w-[1286px] relative left-[12%] border-l border-r ">
        <section>
          <div className=" bg-my-green text-white ">
            <ul className=" flex flex-row justify-center items-center gap-24">
              <li>Acueille</li>
              <li>formation</li>
              <li>Departement</li>
              <li> Vie a la faculte</li>
              <li>Bibliotheque</li>
              <li>
                <SearchBar />
              </li>
            </ul>
          </div>
        </section>{' '}
        <section>
          <div className="feature"></div>
          <div className="slider "></div>
        </section>
        <section className=" p-10 ">
          <h1 className=" text-my-blue text-2xl font-bold">Nos Actualite</h1>
          <div className=" grid grid-cols-4 pt-10 gap-5">
            {scienceNew.map((sci) => (
              <ScienceNew key={sci.title} {...sci} />
            ))}
          </div>
        </section>
        <section className=" pt-10">
          <h1 className=" text-white text-2xl bg-my-blue p-4 font-bold pl-10">
            Nos programmes
          </h1>
          <div className=" grid grid-cols-3 gap-16 p-10">
            {ScienceProg.map((prog) => (
              <div className=" grid gap-5">
                <img src={prog.imgURL} alt={prog.title} />
                <h1 className=" text-2xl font-bold text-center">
                  {prog.title}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <section>
          <img src="/assets/images/patternpad (1) 2.svg" alt="patternpad" />
          <h1 className=" text-white font-bold text-3xl w-[300px] relative bottom-96 left-[38%] text-center">
            SERVICE DU VICE DÉCANAT SCOLARITÉ
          </h1>
          <div className=" flex gap-40">
            <div className="card-4 shadow">
              <h1 className=" text-2xl font-bold text-center p-10 text-blue-400">
                Inscription
              </h1>
              <p className=" p-5 text-justify">
                Le service de scolarité de la faculté des sciences est chargé de
                la gestion et du suivi des réinscriptions des étudiants en
                graduation (Nouveaux bacheliers, Bac étranger, Réinscription
                annuelle et Inscription en Master)
              </p>
              <button className="btn relative left-28">Voir Plus</button>
            </div>
            <div className="card-4 shadow">
              <h1 className=" text-2xl font-bold text-center p-10 text-blue-400">
                Etudes et Scolarité
              </h1>
              <p className=" p-5 text-justify">
                Le service de scolarité de la faculté des sciences est chargé de
                la gestion et du suivi des réinscriptions des étudiants en
                graduation (Nouveaux bacheliers, Bac étranger, Réinscription
                annuelle et Inscription en Master)
              </p>
              <button className="btn relative left-28">Voir Plus</button>
            </div>
          </div>
        </section>
        <section className=" relative bottom-40 grid gap-10">
          <h1 className=" text-2xl font-bold text-center">Club Scientifique</h1>
          <div className=" grid grid-cols-4">
            <div className=" grid justify-center items-center">
              <img
                src="/assets/images/archi.jpg"
                alt="Lead"
                className=" rounded-full"
                width={250}
              />
              <h1 className=" text-xl font-bold text-center">
                Archi benevoles
              </h1>
            </div>
            <div className=" grid justify-center items-center">
              <img
                src="/assets/images/hope.jpg"
                alt="hope"
                className=" rounded-full"
                width={250}
              />
              <h1 className=" text-xl font-bold text-center">Hope Buds club</h1>
            </div>
            <div className=" grid justify-center items-center">
              <img
                src="/assets/images/quanta.jpg"
                alt="quanta"
                className=" rounded-full"
                width={250}
              />
              <h1 className=" text-xl font-bold text-center">Quanta Club</h1>
            </div>
            <div className=" grid justify-center items-center gap-5">
              <img
                src="/assets/images/openS.jpg"
                alt="os"
                className=" rounded-full"
                width={250}
              />
              <h1 className=" text-xl font-bold text-center">Open source</h1>
            </div>
          </div>
        </section>
        <section>
          <img src="/assets/images/Rectangle 119.svg" alt="" />
          <img
            src="/assets/images/TS-logo-w 1.svg"
            alt=""
            className=" absolute bottom-72 "
          />
          <h1 className="">
            Activités scientifiques, culturelles et sportives
          </h1>
          <p>
            La faculté en association avec les organisations estudiantines et
            les clubs scientifiques organise et développe des activités
            scientifiques, culturelles et sportives.
          </p>
        </section>
      </div>
      <div className=" bg-my-blue grid grid-cols-4 text-white p-10 ">
        <div className=" flex flex-col items-center gap-4">
          <img src="/assets/images/whiteLogo.png" alt="logo" width={200} />
          <h1 className=" w-[50%] text-center">
            Adresse : 02 rue Didouche Mourad Alger .16000
          </h1>
        </div>

        <ul className=" w-[250px] grid gap-5">
          <h1 className="  font-bold">Liens utiles:</h1>
          <li>
            Ministère de l’Enseignement Supérieur et de la Recherche
            Scientifique
          </li>
          <li>
            Direction Générale de la Recherche Scientifique et du Développement
            Technologique (DGRSDT)
          </li>
          <li>Système National De Documentation en Ligne</li>
          <li>Centre de Développement des Energies Renouvelables</li>
          <li>Erasmus+</li>
          <li>Agence Thématique de Recherche en Sciences et Technologie</li>
        </ul>
        <ul className=" w-[250px] flex flex-col gap-5">
          <h1 className=" font-bold">Autres liens</h1>
          <li>ASJP</li>
          <li>PRFU</li>
          <li>PNR</li>
          <li>SNDL</li>
          <li>PROGRES</li>
        </ul>
        <ul className="flex flex-col gap-5 justify-start items-start">
          <h1 className=" font-bold">Coordonnées</h1>
          <div className=" flex flex-col gap-5">
            {NavLeft.map((left) => (
              <li>
                <TwoItems key={left.alt} {...left} />
              </li>
            ))}
          </div>
          <div className=" flex flex-row gap-5">
            {NavRight.map((right) => (
              <li>
                <TwoItems key={right.alt} {...right} />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Science
