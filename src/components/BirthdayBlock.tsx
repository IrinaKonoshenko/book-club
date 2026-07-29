import { useState } from "react";
import type { Birthday } from "../types/birtday";
import { birthday } from "../data/birthday";
import BirthdayModal from "./BirthdayModal";

function getNextBirthday(birthdays: Birthday[]): Birthday | null {
  const today = new Date();

  const upcoming = birthdays.map((birthday) => {
    const [day, month] = birthday.date.split(".").map(Number);

    let nextDate = new Date(today.getFullYear(), month - 1, day);

    if (nextDate < today) {
      nextDate = new Date(today.getFullYear() + 1, month - 1, day);
    }

    return {
      ...birthday,
      nextDate,
      diff: nextDate.getTime() - today.getTime(),
    };
  });

  upcoming.sort((a, b) => a.diff - b.diff);

  return upcoming[0];
}

export default function NextBirthday() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nextBirthday = getNextBirthday(birthday);

  if (!nextBirthday) return null;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="font-title text-xl text-gray-200">
        Ближайший день рождения:
      </div>
      <div className="relative w-52.5 h-80 overflow-hidden border border-gray-400/15 p-4 rounded-lg cursor-pointer transition hover:scale-105 flex flex-col justify-center items-center gap-1">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="w-25 flex justify-center items-center overflow-hidden">
            <img
              src={nextBirthday.img}
              alt=""
              className="w-full aspect-2/3 object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="font-title text-2xl text-gray-200">
              {nextBirthday.title}
            </div>
            <div className="font-title text-2xl text-gray-300 text-center">
              {nextBirthday.date}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-2 bg-transparent border border-gray-500 text-gray-300 text-xs py-1 px-3 rounded hover:bg-gray-700 hover:text-gray-100 transition"
        >
          Все дни рождения:
        </button>
      </div>
      <BirthdayModal
        birthdays={birthday}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
