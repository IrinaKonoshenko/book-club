export default function Girls() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Кто мы?</h2>
      <div className="w-52.5 h-80 overflow-hidden flex flex-col justify-center items-center gap-5 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105">
        <div className="flex flex-col justify-between gap-15">
          <div className="text-gray-400 text-center font-title text-4xl leading-15">
            Подробнее о кажждой из нас:
          </div>
          <button className="bg-transparent border border-gray-500 text-gray-300 text-xs py-1 px-3 rounded hover:bg-gray-700 hover:text-gray-100 transition">
            Узнать
          </button>
        </div>
      </div>
    </div>
  );
}
