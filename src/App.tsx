import "./App.css";
import StarBackground from "./components/StarBackground";

import Header from "./components/Header";
import BooksRead from "./components/BooksRead";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import BookOfMonth from "./components/BookOfMonth";
import NextBirthday from "./components/BirthdayBlock";
import GetCurrentChooser from "./components/GetCurrentChooser";
import NextMeet from "./components/NextMeet";

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <main className="relative text-white flex flex-col gap-10">
        <Hero />
        <div className="flex flex-col justify-center items-center gap-10 lg:flex-row">
          <BookOfMonth
            onClick={() => console.log("Book of the Month clicked")}
          />

          <GetCurrentChooser />
          <NextMeet />
          <NextBirthday />
        </div>
        <BooksRead />
        <Footer />
      </main>
    </>
  );
}

export default App;
