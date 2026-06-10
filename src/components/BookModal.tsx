import { useEffect, useState } from "react";
import type { Book } from "../types/book";

type BookModalProps = {
  book: Book | null;
  onClose: () => void;
};

export default function BookModal({ book, onClose }: BookModalProps) {
  useEffect(() => {
    if (!book) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [book]);

  const reviews =
    book?.reviews.filter((review) => review.text.trim() !== "") ?? [];
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const activeReview = reviews[activeReviewIndex] ?? null;

  if (!book) return null;

  const changeReview = (direction: "prev" | "next") => {
    if (!reviews.length) return;
    setActiveReviewIndex((current) => {
      const nextIndex = direction === "next" ? current + 1 : current - 1;
      if (nextIndex < 0) return reviews.length - 1;
      if (nextIndex >= reviews.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="mx-auto w-full max-w-[90vw] rounded-3xl bg-[#f6f0e2] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-2xl text-slate-600 hover:text-black"
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[250px_1fr_340px] md:gap-12">
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full max-h-[55vh] object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-title text-4xl sm:text-5xl text-blue-950">
                {book.title}
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-slate-700">
                {book.author}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-800 font-title">
                <span className="font-semibold font-name">Chosen by:</span>{" "}
                {book.chosenBy}
              </p>
              <p className="text-slate-800">
                <span className="font-semibold">Read:</span> {book.readDate}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500 font-title">
              Club review
            </p>
            <div className="flex w-full max-w-full flex-col justify-between rounded-4xl bg-[#fbf3dd]/90 p-6 shadow-2xl text-sm overflow-hidden md:h-105 md:w-85">
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="mt-2 text-xl font-title text-slate-900">
                      {activeReview?.name ?? "No reviews yet"}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {activeReview?.rating ?? "—"}
                  </span>
                </div>
                <div className="max-h-55 overflow-y-auto pr-2 pb-2 text-slate-700 review-scroll select-none">
                  <p className="leading-7">
                    {activeReview?.text ?? "Пока нет отзывов для этого списка."}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => changeReview("prev")}
                  className="inline-flex h-10 w-10 items-center justify-center text-slate-700 transition"
                  aria-label="Previous review"
                >
                  ←
                </button>
                <span className="text-xs text-slate-500">
                  {reviews.length > 0
                    ? `${activeReviewIndex + 1} / ${reviews.length}`
                    : "0 reviews"}
                </span>
                <button
                  type="button"
                  onClick={() => changeReview("next")}
                  className="inline-flex h-10 w-10 items-center justify-center text-slate-700 transition"
                  aria-label="Next review"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
