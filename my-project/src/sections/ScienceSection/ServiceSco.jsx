const ServiceSco = () => {
  return (
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
            Le service de scolarité de la faculté des sciences est chargé de la
            gestion et du suivi des réinscriptions des étudiants en graduation
            (Nouveaux bacheliers, Bac étranger, Réinscription annuelle et
            Inscription en Master)
          </p>
          <button className="btn relative left-28">Voir Plus</button>
        </div>
        <div className="card-4 shadow">
          <h1 className=" text-2xl font-bold text-center p-10 text-blue-400">
            Etudes et Scolarité
          </h1>
          <p className=" p-5 text-justify">
            Le service de scolarité de la faculté des sciences est chargé de la
            gestion et du suivi des réinscriptions des étudiants en graduation
            (Nouveaux bacheliers, Bac étranger, Réinscription annuelle et
            Inscription en Master)
          </p>
          <button className="btn relative left-28">Voir Plus</button>
        </div>
      </div>
    </section>
  )
}

export default ServiceSco
