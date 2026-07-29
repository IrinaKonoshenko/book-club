import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import type { Girls } from "../types/girls";
import { books } from "../data/books";
import BookModal from "./BookModal";

type GirlModalProps = {
  girl: Girls | null;
  onClose: () => void;
};

export default function GirlModal({ girl, onClose }: GirlModalProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!girl) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [girl]);

  if (!girl) return null;

  const selectedBooks = books.filter(
    (book) =>
      book.chosenBy === girl.title || book.chosenBy === girl.title.trim(),
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-[#f6f0e2] p-6 shadow-2xl md:p-8"
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

        <div className="flex flex-col gap-8 md:grid md:grid-cols-[260px_1fr] md:gap-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={girl.img}
              alt={girl.title}
              className="h-full w-full max-h-85 object-cover"
            />
          </div>
          <div>
            <div>
              <h2 className="font-title text-3xl text-blue-950 sm:text-4xl">
                {girl.title}
              </h2>
              <p className="mt-2 text-lg text-slate-700">
                Дата рождения: {girl.date}
              </p>
            </div>

            <p className="leading-7 text-slate-700">
              {girl.description || "Информация о девушке скоро появится."}
            </p>
          </div>

          <div className="flex flex-col gap-6 text-slate-800">
            <div className="rounded-2xl border border-slate-300/70 bg-white/70 p-4">
              <h3 className="mb-4 font-title text-xl text-slate-900">
                Выбранные ею книги:
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedBooks.length > 0 ? (
                  selectedBooks.map((book) => (
                    <button
                      key={book.id}
                      type="button"
                      onClick={() => setSelectedBook(book)}
                      className="flex w-full max-w-55 flex-col items-center gap-3 rounded-2xl border border-slate-300 bg-[#f9f3e7] p-3 text-center shadow-sm transition hover:scale-[1.01]"
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="h-75 w-full rounded-xl object-cover"
                      />
                      <div>
                        <h4 className="font-name text-base text-slate-900">
                          {book.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-600">
                          {book.author}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-slate-600">
                    Пока нет выбранных книг.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
