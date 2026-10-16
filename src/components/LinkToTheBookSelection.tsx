export default function LinkToTheBookSelection() {
  return (
    <div className="container mx-auto flex justify-center mb-20">
      <div className="w-lg h-auto flex flex-col gap-5 justify-center items-center border border-gray-400/15  rounded-lg transition hover:scale-105 p-10">
        <h2 className="font-title text-4xl text-gray-200 text-center">
          Выбор книги на следующий месяц
        </h2>
        <a
          href="https://afterlight-book-club.decentlily1.chatgpt.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-white/80 hover:text-white py-1 px-4 rounded cursor-pointer transition underline text-lg text-center"
        >
          Перейти на страницу выбора книги
        </a>

        <p className="text-gray-500 text-center text-xs">
          <a
            href="https://drive.google.com/file/d/1E_tgKG3atQPb9KOfItbczF9JhLgcNkFk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-gray-500 hover:text-white py-1 px-4 rounded cursor-pointer transition underline text-sm text-center"
          >
            Важная шпаргалка по выбору книги
          </a>
        </p>
      </div>
    </div>
  );
}
