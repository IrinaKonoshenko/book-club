import "./App.css";
import StarBackground from "./components/StarBackground";
import Header from "./components/Header";
import BooksRead from "./components/BooksRead";
import Hero from "./components/Hero";
import BookOfMonth from "./components/BookOfMonth";
import NextBirthday from "./components/BirthdayBlock";
import GetCurrentChooser from "./components/GetCurrentChooser";
import NextMeet from "./components/NextMeet";
import Girls from "./components/Girls";
import Form from "./components/Form";
import Footer from "./components/footer";
import Block from "./components/Block";

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <main className="relative text-white flex flex-col gap-10">
        <Hero />
        <Form />
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <BookOfMonth
              onClick={() => console.log("Book of the Month clicked")}
            />

            <GetCurrentChooser />
            <Block />
            <NextMeet />
            <NextBirthday />
          </div>
        </div>
        <BooksRead />
        <Girls />
        <Footer />
      </main>
    </>
  );
}

export default App;
