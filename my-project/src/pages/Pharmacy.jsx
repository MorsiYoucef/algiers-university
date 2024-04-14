import FaculteNav from '../components/FaculteNav'
import Heromed from '../components/heromed'
import Hisstat from '../components/his-stat'
import Info from '../components/info'
import NosActualite from '../components/NosActualite'
import Footer from '../sections/HomeSection/Footer'
import HeroPhar from '../sections/PharmacySection/HeroPhar'

const Pharmacy = () => {
  return (
    <main>
      <FaculteNav
        arabTitle="الصيدلــــــــــة"
        mainTitle="Pharmacy"
        mainColor="text-yellow-400"
      />

      <div className=" max-w-[1286px] mx-auto border-l border-r ">
        <section className=" flex justify-center items-center  w-full">
          <Info />
        </section>{' '}
        <section>
          <HeroPhar />
        </section>
        <section>
          <NosActualite />
        </section>
        <section className=" p-16">
          <Hisstat
            title="LA FACULTÉ DE Pharmacie d’ALGER 1"
            description="La Faculté De Médecine et de Pharmacie d’Alger est l’une des plus
              anciennes faculté de médecine du continent africain. En effet elle
              est l’héritière de l’Ecole préparatoire de médecine   et de
              pharmacie d’Alger créée par le décret du 4 août 1857. Les
              enseignants se partageaient alors un local situé au 4 de la rue
              René Caillé (ruelle perpendiculaire à la rue Bab Azoun). Les 1ers
              cours officiels seront inaugurés le 18 janvier 1859 à l’hôpital
              Mustapha. Le personnel de l'école se composait alors de huit
              professeurs titulaires, de quatre suppléants, d'un chef de travaux
              anatomiques, d'un prosecteur et d'un préparateur. En ce qui
              concernait les sessions d'examens, l'école était placée dans la
              circonscription de la Faculté de médecine et de l'École supérieure
              de pharmacie de Montpellier. Les diplômes que l'école était
              autorisée à délivrer étaient ceux d'officiers de santé,
              pharmaciens et sages-femmes de 2èmeclasse ..."
            stat1="8600  étudiants"
            stat2="25  unités de recherche"
            stat3="3 hôpitaux constituent le CHU"
            color="featureee"
            btnColor="bg-yellow-500"
            textColor="text-my-blue"
            borderColor="border-my-blue"
          />
        </section>
      </div>
      <div className="bg-my-blue grid gap-10 pt-10">
        <Footer />
      </div>
    </main>
  )
}

export default Pharmacy
