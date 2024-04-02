import { NavLeft, NavRight } from '../../data/data'
import TwoItems from '../../components/TowItems'

const Footer = () => {
  return (
    <div>
      <div className=" bg-my-blue grid grid-cols-4 text-white ">
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
      <h1 className=" text-center text-white pt-20 pb-5">
        © 2024 |Université D'Alger 1
      </h1>
    </div>
  )
}

export default Footer
