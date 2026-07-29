import type { Book } from "../types/book";
import { books } from "../data/books";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import useEmblaCarousel from "embla-carousel-react";

export default function BooksRead({
  selectedBook,
  onSelectBook,
}: {
  selectedBook: Book | null;
  onSelectBook: (book: Book | null) => void;
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  return (
    <div className="container mx-auto flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Прочитанные книги:</h2>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 animate-[scroll_20s_linear_infinite] md:gap-8 xl:gap-10 ">
          {books.map((book, index) => (
            <div
              key={`${book.id}-${index}`}
              className="w-52.5 shrink-0 sm:w-[calc((100%-2rem)/3)] sm:max-w-52.5 xl:w-[calc((100%-4rem)/5)]"
            >
              <BookCard book={book} onClick={() => onSelectBook(book)} />
            </div>
          ))}
        </div>
      </div>
      <BookModal book={selectedBook} onClose={() => onSelectBook(null)} />
    </div>
  );
}
