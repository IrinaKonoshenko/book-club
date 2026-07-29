export default function Block() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Блок:</h2>
      <div className="w-52.5 h-80 overflow-hidden flex flex-col justify-center items-center gap-5 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105"></div>
    </div>
  );
}
