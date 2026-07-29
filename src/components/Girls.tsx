import { useRef, useState } from "react";
import { girls } from "../data/girls";
import type { Girls as GirlsType } from "../types/girls";
import GirlModal from "./GirlModal";

export default function Girls() {
  const [selectedGirl, setSelectedGirl] = useState<GirlsType | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const cardWidth = 220 + 24;
    carouselRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h2 className="font-title text-xl text-gray-200">Наши девушки:</h2>
      <div className="flex w-full items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByAmount("left")}
          className="hidden rounded-full border border-gray-400/30 px-3 py-2 text-lg text-white transition hover:bg-white/10 sm:block"
          aria-label="Прокрутить влево"
        >
          ←
        </button>
        <div
          ref={carouselRef}
          className="w-full max-w-350 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hidden"
        >
          <div className="flex w-max gap-6">
            {girls.map((girl, index) => (
              <div key={`${girl.id}-${index}`} className="w-55 shrink-0">
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
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => scrollByAmount("right")}
          className="rounded-full border border-gray-400/30 px-3 py-2 text-lg text-white transition hover:bg-white/10"
          aria-label="Прокрутить вправо"
        >
          →
        </button>
      </div>
      <GirlModal girl={selectedGirl} onClose={() => setSelectedGirl(null)} />
    </div>
  );
}
