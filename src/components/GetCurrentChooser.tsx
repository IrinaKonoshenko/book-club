import { choosingQueue } from "../data/choosingQueue";
import { choosingState } from "../data/choosingState";

function getCurrentChooser() {
  return choosingQueue[choosingState.currentIndex];
}

export default function GetCurrentChooser() {
  const currentChooser = getCurrentChooser();

  return (
    <div className="container mx-auto flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Кто выбирает книгу?</h2>
      <div className="w-52.5 h-80 overflow-hidden flex flex-col justify-center items-center gap-5 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-gray-400">Текущий выбирающий: </p>
          <div className="font-author text-xl">{currentChooser}</div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <p className="text-gray-400">Следующий выбирающий: </p>
          <div className="font-author text-xl">
            {
              choosingQueue[
                (choosingState.currentIndex + 1) % choosingQueue.length
              ]
            }
          </div>
        </div>
      </div>
    </div>
  );
}
