export default function Form() {
  return (
    <div className="container mx-auto flex justify-center mb-20">
      <div className="w-lg h-auto flex flex-col gap-5 justify-center items-center border border-gray-400/15  rounded-lg transition hover:scale-105 p-10">
        <h2 className="font-title text-4xl text-gray-200">
          Заявка на вступление в наш клуб:
        </h2>
        <a
          href="https://forms.gle/baawDPrZUaVM1aFw5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-white/80 hover:text-white py-1 px-4 rounded cursor-pointer transition underline text-lg"
        >
          Заполнить заявку
        </a>

        <p className="text-gray-500 text-center text-xs">
          После заполнения формы, мы ознакомимся с вашей заявкой и свяжемся с
          вами для дальнейших шагов.
        </p>
      </div>
    </div>
  );
}
