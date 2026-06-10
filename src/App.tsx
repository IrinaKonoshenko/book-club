import "./App.css";
import StarBackground from "./components/StarBackground";

import Header from "./components/Header";
import BooksRead from "./components/BooksRead";
import Hero from "./components/Hero";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <main className="relative text-white flex flex-col gap-10">
        <Hero />
        <BooksRead />
        <Footer />
      </main>
    </>
  );
}

export default App;
