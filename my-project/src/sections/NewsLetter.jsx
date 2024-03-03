const NewsLetter = () => {
  return (
    <div className=" bg-my-blue text-white flex flex-col justify-center items-center p-5 gap-5">
      <h1 className=" text-2xl font-bold">Inscrivez-vous à notre newsletter</h1>
      <p className=" text-xl w-[40%] text-center ">
        Recevez les meilleures nouvelles sur une base hebdomadaire!
        Inscrivez-vous maintenant et ne le manquez pas.
      </p>
      <input
        placeholder="Email address"
        className=" p-3 w-[30%]"
        type="email"
      />
      <div className=" flex gap-1">
        <input type="checkbox" id="scales" name="scales" />
        <label for="scales">
          Faites attention, vous recevrez toutes les nouvelles dans votre
          e-mail. merci
        </label>
      </div>
      <button className=" text-white bg-gray-500 p-3 w-[150px]">
        S'abonner
      </button>
    </div>
  )
}

export default NewsLetter
