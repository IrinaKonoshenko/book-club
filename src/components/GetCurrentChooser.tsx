import { useState } from "react";
import { girls } from "../data/girls";
import GirlModal from "./GirlModal";
import type { Girls as GirlsType } from "../types/girls";

export default function GetCurrentChooser() {
  const girl = girls.find((g) => g.title === "Юлдуз");
  const [selectedGirl, setSelectedGirl] = useState<GirlsType | null>(null);

  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Текущий выбирающий:</h2>
      <div className="w-52.5 h-80 overflow-hidden flex flex-col justify-center items-center text-center gap-3 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105">
        {girl && (
          <div className="w-55">
            <button
              type="button"
              onClick={() => setSelectedGirl(girl)}
              className="flex h-80 w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-lg border border-gray-400/15 p-5 text-center text-white transition hover:scale-105 select-none"
            >
              <div className="h-60 w-full overflow-hidden rounded-xl">
                <img
                  src={girl.img}
                  alt={girl.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-title text-lg">{girl.title}</h3>
            </button>
          </div>
        )}
      </div>
      <GirlModal girl={selectedGirl} onClose={() => setSelectedGirl(null)} />
    </div>
  );
}
