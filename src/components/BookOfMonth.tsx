import { books } from "../data/books";
import BookCard from "./BookCard";

export default function BookOfMonth({ onClick }: { onClick: () => void }) {
  const bookOfMonth = books[books.length - 1];

  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Книга месяца:</h2>
      <BookCard book={bookOfMonth} onClick={onClick} />
    </div>
  );
}
