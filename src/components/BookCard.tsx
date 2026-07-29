import type { Book } from "../types/book";

type BookCardProps = {
  book: Book;
  onClick: () => void;
};

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full h-80 overflow-hidden flex flex-col justify-center items-center gap-5 border border-gray-400/15 p-5 rounded-lg cursor-pointer transition hover:scale-105 select-none"
    >
      <div className="w-25 flex justify-center items-center overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full aspect-2/3 object-cover rounded-xl"
        />
      </div>

      <h3 className="font-name text-center">{book.title}</h3>

      <p className="font-author text-gray-300">{book.author}</p>
    </div>
  );
}
