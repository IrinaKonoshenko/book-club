export default function NextMeet() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Следующая встреча:</h2>
      <div className="w-52.5 h-80 overflow-hidden flex flex-col justify-center items-center gap-5 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-gray-400">Дата: </p>
          <div className="font-title text-xl">Пока не назначена</div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-gray-400">Время: </p>
          <div className="font-title text-xl">Пока не назначено</div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-gray-400">Место: </p>
          <div className="font-title text-xl">Пока не назначено</div>
        </div>
      </div>
    </div>
  );
}
