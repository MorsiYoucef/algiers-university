const Hisstat = (props) => {
  return (
    <section>
      <div className="medback ">
        <div className={`${props.color} ${props.textColor} p-20 grid`}>
          <h1 className=" text-3xl font-bold ">{props.title}</h1>
          <div className=" flex gap-16">
            <p className=" font-bold w-[50%] text-justify">
              {props.description}
            </p>
            <div className=" text-3xl font-bold grid">
              <div>{props.stat1}</div>
              <div
                className={`${props.borderColor} w-full border-t-2 border-dashed`}
              ></div>
              <div> {props.stat2}</div>
              <div
                className={`${props.borderColor} w-full border-t-2 border-dashed`}
              ></div>
              <div>{props.stat3}</div>
              <div
                className={`${props.borderColor} w-full border-t-2 border-dashed`}
              ></div>
            </div>{' '}
          </div>
          <button className={` ${props.btnColor} ${props.textColor} w-[10%]`}>
            Lire Plus
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hisstat
// <div className="medback text-white p-16">
//   <div className="featuree"></div>
{
  /* <h1 className=" text-3xl font-bold ">
        LA FACULTÉ DE MÉDECINE  d’ALGER 1
      </h1>
      <div>
        <p>
          La Faculté De Médecine et de Pharmacie d’Alger est l’une des plus
          anciennes faculté de médecine du continent africain. En effet elle est
          l’héritière de l’Ecole préparatoire de médecine   et de pharmacie
          d’Alger créée par le décret du 4 août 1857. Les enseignants se
          partageaient alors un local situé au 4 de la rue René Caillé (ruelle
          perpendiculaire à la rue Bab Azoun). Les 1ers cours officiels seront
          inaugurés le 18 janvier 1859 à l’hôpital Mustapha. Le personnel de
          l'école se composait alors de huit professeurs titulaires, de quatre
          suppléants, d'un chef de travaux anatomiques, d'un prosecteur et d'un
          préparateur. En ce qui concernait les sessions d'examens, l'école
          était placée dans la circonscription de la Faculté de médecine et de
          l'École supérieure de pharmacie de Montpellier. Les diplômes que
          l'école était autorisée à délivrer étaient ceux " d'officiers de
          santé, pharmaciens et sages-femmes de 2èmeclasse "...
        </p>
        <div>
          <div>8600  étudiants</div>
          <div> 25  unités de recherche</div>
          <div>3 hôpitaux constituent le CHU</div>
        </div> */
}
{
  /* </div>
   */
}
// </div>
