import { useMemo, useState } from "react";
import type { Book } from "../types/book";
import { books } from "../data/books";
import BookCard from "./BookCard";
import BookModal from "./BookModal";

export default function BooksRead() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const duplicatedBooks = useMemo(() => [...books, ...books], [books.length]);

  return (
    <div className="container mx-auto flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Прочитанные книги:</h2>
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-[scroll_20s_linear_infinite] md:gap-8 xl:gap-10">
          {duplicatedBooks.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className="w-[13.125rem] shrink-0 sm:w-[calc((100%-2rem)/3)] sm:max-w-[13.125rem] xl:w-[calc((100%-4rem)/5)]"
            >
              <BookCard book={book} onClick={() => setSelectedBook(book)} />
            </div>
          ))}
        </div>
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
