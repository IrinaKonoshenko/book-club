import { useState } from "react";
import type { Book } from "../types/book";
import { books } from "../data/books";
import BookCard from "./BookCard";
import BookModal from "./BookModal";

export default function BooksRead() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="container mx-auto flex flex-col items-center gap-10">
      <h2 className="font-title text-xl text-gray-200">Прочитанные книги:</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
}
