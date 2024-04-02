import { VieEtud } from '../../data/data'
import VieCard from '../../components/VieCard'

const VieEtudiant = () => {
  return (
    <div>
      <img
        src="/assets/icons/patternpad.svg"
        alt="pattern"
        className=" w-full h-[100px]"
      />
      <h1 className=" text-[40px] font-bold flex justify-center relative bottom-11 text-white">
        VIE ETUDIANTE
      </h1>
      <div className=" flex justify-center items-center gap-10 p-10">
        {VieEtud.map((etudiant) => (
          <VieCard key={etudiant.title} {...etudiant} />
        ))}
      </div>
    </div>
  )
}

export default VieEtudiant
