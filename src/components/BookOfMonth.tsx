import { books } from "../data/books";
import type { Book } from "../types/book";
import BookCard from "./BookCard";

export default function BookOfMonth({
  onClick,
}: {
  onClick: (book: Book) => void;
}) {
  const bookOfMonth = books[books.length - 1];

  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Книга месяца:</h2>
      <BookCard book={bookOfMonth} onClick={() => onClick(bookOfMonth)} />
    </div>
  );
}
