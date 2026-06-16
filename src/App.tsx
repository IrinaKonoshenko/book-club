import "./App.css";
import StarBackground from "./components/StarBackground";

import Header from "./components/Header";
import BooksRead from "./components/BooksRead";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import BookOfMonth from "./components/BookOfMonth";
import NextBirthday from "./components/BirthdayBlock";

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <main className="relative text-white flex flex-col gap-10">
        <Hero />
        <div className="flex justify-center items-center gap-10">
          <BookOfMonth
            onClick={() => console.log("Book of the Month clicked")}
          />
          <NextBirthday />
        </div>
        <BooksRead />
        <Footer />
      </main>
    </>
  );
}

export default App;
