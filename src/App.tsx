import "./App.css";
import StarBackground from "./components/StarBackground";
import BookCard from "./components/BookCard";
import { books } from "./data/books";

function App() {
  return (
    <>
      <StarBackground />
      <header className="text-white">
        <div className="container mx-auto pt-8 flex justify-center items-center flex-col gap-2">
          <h1 className="font-title text-5xl ">Delirium Book Club</h1>
          <p className="text-xs text-gray-500">
            An exclusive book club for women.
          </p>
        </div>
      </header>
      <main className="relative text-white mt-20">
        <section>
          <div className="container mx-auto flex flex-col items-center gap-10">
            <h2 className="font-title text-xl text-gray-200">
              Прочитанные книги:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
