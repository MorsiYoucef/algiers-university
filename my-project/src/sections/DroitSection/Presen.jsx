const Presen = () => {
  return (
    <div className=" grid gap-5">
      <h1 className=" text-3xl text-right border-b-2 p-5">
        كلمـــــــة العميــــــد
      </h1>
      <div className=" flex flex-row gap-5 justify-end">
        <div className=" grid gap">
          <h1 className=" text-right text-xl text-justify ">
            بسم الله الرحمان الرحيم و الصلاة و السلام على أشرف المرسلين و نحن
            على رأس كلية الحقوق جامعة الجزائر 1 لا ندخر جهدا في خدمة العلم وأهله
            من أساتذة و طلبة وعمال، إن صرح كلية الحقوق جامعة الجزائر 1 لها ماض
            عريق برهنت على قوتها في التكوين والارتقاء بالمعرفة العلمية. نسعى في
            تولينا لعمادة كلية الحقوق أن نفعل كل ما من شأنه أن يدفع بها إلى
            تقديم خدمة علمية نوعية، أشيد بالطاقم الاداري و العلمي و الأمني في
            الكلية، وأذكرهم بتحمل مسؤولياتهم كل من موقعه. أبنائي الطلبة يا جيل
            المستقبل أملنا فيكم كبير، الصرح صرحكم اجتهدوا في التحصيل العلمي،
            الجميع في خدمة
          </h1>
          <h1 className=" text-2xl font-bold text-center">
            المجــــد و الخلــــــــود لشهدائنـــــا الأبـــــــــرار
          </h1>
          <h1 className=" text-2xl font-bold text-right w-[40%] relative left-[34rem]">
            الدكتــــور قسايسية عيـــسى عميـــــد كليــة الحقـــوق- جامعة
            الجزائر 1-
          </h1>
        </div>

        <img
          src="/assets/images/direc-fotor-20240414175158.jpg"
          alt="directeur"
          width={250}
          className=" h-[300px]"
        />
      </div>
    </div>
  )
}

export default Presen
