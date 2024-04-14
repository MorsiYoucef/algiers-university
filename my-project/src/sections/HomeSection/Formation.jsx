import { Link } from 'react-router-dom'

const Formation = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className=" text-2xl  text-center font-bold">
        LES COMPOSANTES ET ÉTABLISSEMENTS COMPOSANTES DE L'UNIVERSITÉ
      </h1>

      <div className=" flex flex-wrap justify-center items-center gap-20">
        <Link to="/Medecine">
          <div className=" flex  flex-col  text-justify border justify-center items-center p-5 gap-2">
            <img src="/assets/images/logocard.jpg" alt="logo" width={200} />
            <hr />
            <h1 className="text-2xl font-bold text-my-blue ">
              Faculte de <span className=" text-red-500">Medcine</span>
            </h1>
          </div>
        </Link>
        <Link to="/Pharmacy">
          <div className=" flex  flex-col  text-justify border justify-center items-center p-5 gap-2">
            <img src="/assets/images/logocard.jpg" alt="logo" width={200} />
            <hr />
            <h1 className="text-2xl font-bold text-my-blue">
              Faculte de <span className=" text-yellow-400">Pharmacy</span>
            </h1>
          </div>
        </Link>

        <Link to="/Science">
          <div className=" flex  flex-col  text-justify border justify-center items-center p-5 gap-2">
            <img src="/assets/images/logocard.jpg" alt="logo" width={200} />
            <hr />
            <h1 className="text-2xl font-bold text-my-blue">
              Faculte de <span className=" text-blue-400">Science</span>
            </h1>
          </div>
        </Link>

        <Link to="/ScienceIslamique">
          <div className=" flex  flex-col  text-justify border justify-center items-center p-5 gap-2">
            <img src="/assets/images/logocard.jpg" alt="logo" width={200} />
            <hr />
            <h1 className="text-2xl font-bold text-my-blue">
              Faculte des{' '}
              <span className=" text-green-500 text-center">
                Sciences islamiques
              </span>
            </h1>
          </div>
        </Link>
        <Link to="/Droit">
          <div className=" flex  flex-col  text-justify border justify-center items-center p-5 gap-2 ">
            <img src="/assets/images/logocard.jpg" alt="logo" width={200} />
            <hr />
            <h1 className="text-2xl font-bold text-my-blue">
              Faculte de <span className=" text-black">Droit</span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Formation
