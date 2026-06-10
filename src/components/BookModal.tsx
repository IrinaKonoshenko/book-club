import type { Book } from "../types/book";

type BookModalProps = {
  book: Book | null;
  onClose: () => void;
};

export default function BookModal({ book, onClose }: BookModalProps) {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#f6f0e2] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-2xl text-slate-600 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
          <div>
            <img
              src={book.cover}
              alt={book.title}
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-title text-5xl text-blue-950">{book.title}</h2>
            <p className="mt-2 text-xl text-slate-700">{book.author}</p>
            <div className="mt-8 space-y-3">
              <p className="text-slate-800 font-title">
                <span className="font-semibold font-name">Chosen by:</span>{" "}
                {book.chosenBy}
              </p>
              <p className="text-slate-800">
                <span className="font-semibold">Read:</span> {book.readDate}
              </p>
            </div>
            <div className="mt-10">
              <h3 className="mb-6 font-title text-2xl text-blue-950">
                Club Opinions
              </h3>
              <div className="space-y-4 ">
                {book.reviews
                  .filter((review) => review.text.trim() !== "")
                  .map((review, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-stone-300 bg-white/70 p-5"
                    >
                      <div className="mb-3 flex justify-between">
                        <span className="font-semibold text-slate-800 text-xs">
                          {review.name}
                        </span>
                        <span className="font-medium text-blue-900 text-xs">
                          {review.rating}
                        </span>
                      </div>
                      <p className="leading-relaxed text-slate-700 text-xs">
                        {review.text}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
