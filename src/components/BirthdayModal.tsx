import { useEffect, useState } from "react";
import type { Birthday } from "../types/birtday";
import { girls } from "../data/girls";
import GirlModal from "./GirlModal";

type BirthdayModalProps = {
  birthdays: Birthday[];
  isOpen: boolean;
  onClose: () => void;
};

function sortBirthdaysByNext(birthdays: Birthday[]) {
  const today = new Date();

  return [...birthdays]
    .map((birthday) => {
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
    })
    .sort((a, b) => a.diff - b.diff);
}

export default function BirthdayModal({
  birthdays,
  isOpen,
  onClose,
}: BirthdayModalProps) {
  const [selectedGirl, setSelectedGirl] = useState<
    (typeof girls)[number] | null
  >(null);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const orderedBirthdays = sortBirthdaysByNext(birthdays);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-[#f6f0e2] p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-2xl text-slate-600 hover:text-black"
          >
            ×
          </button>
        </div>

        <h2 className="font-title text-3xl text-blue-950">Все дни рождения</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {orderedBirthdays.map((birthday) => (
            <button
              key={birthday.id}
              type="button"
              onClick={() => {
                const matchedGirl = girls.find(
                  (girl) => girl.title === birthday.title,
                );
                if (matchedGirl) setSelectedGirl(matchedGirl);
              }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-300/70 bg-white/70 p-4 text-center transition hover:scale-[1.01]"
            >
              <div className="h-100 w-full overflow-hidden rounded-xl">
                <img
                  src={birthday.img}
                  alt={birthday.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-title text-xl text-slate-900">
                  {birthday.title}
                </h3>
                <p className="mt-1 text-lg text-slate-700">{birthday.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <GirlModal girl={selectedGirl} onClose={() => setSelectedGirl(null)} />
    </div>
  );
}
