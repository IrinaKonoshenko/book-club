export default function Hero() {
  return (
    <>
      <section className="py-16 lg:hidden">
        <div className="container mx-auto px-4 flex flex-col gap-5">
          <h3 className="text-4xl font-title text-gray-300 text-center">
            О нашем клубе:
          </h3>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center">
              <img
                src="/photos/2.png"
                alt="Книжный клуб"
                className=" h-70 w-100 rounded-2xl object-cover "
              />
            </div>
            <p className="text-3xl font-title text-gray-300">
              Основанный 23 декабря 2025 года, наш книжный клуб — это
              пространство только для девушек, созданное вокруг общей любви к
              чтению. Хотя, как оказалось, не только к нему. Мы невероятно
              разные. У нас разные характеры, интересы, жизненный опыт и взгляды
              на мир. И каким-то образом именно это делает нас такой хорошей
              компанией. Здесь всегда было легко оставаться собой.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center">
              <img
                src="/photos/3.png"
                alt="Встреча клуба"
                className=" h-70 w-100 rounded-2xl object-cover "
              />
            </div>
            <p className="text-3xl font-title text-gray-300">
              Сначала мы встречались просто для того, чтобы обсуждать книги. Но
              постепенно наш клуб стал чем-то большим. Мы начали проводить время
              вместе и за пределами книжных встреч: ходить на концерты,
              праздновать день рождения основательницы клуба, смотреть фильмы в
              кинотеатре, гулять и создавать воспоминания, которые никак не
              связаны с сюжетными поворотами и литературными героями.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center w-full max-w-[340px]">
              <img
                src="/photos/1.png"
                alt="Встреча клуба"
                className="w-full max-h-[60vh] rounded-2xl object-contain"
              />
            </div>
            <p className="text-3xl font-title text-gray-300">
              Каждый месяц одна из нас выбирает книгу для чтения. Мы все читаем
              её, а затем собираемся вместе, чтобы поделиться своими мыслями,
              впечатлениями, любимыми моментами и иногда совершенно
              противоположными взглядами на прочитанное. Наши обсуждения бывают
              вдумчивыми, живыми и порой настолько убедительными, что кто-то
              начинает смотреть на книгу совсем иначе. То, что начиналось как
              книжный клуб, постепенно превратилось в круг дружбы, поддержки,
              смеха и искренних разговоров. Книги объединяют нас, но именно люди
              заставляют нас возвращаться снова и снова.
            </p>
          </div>
        </div>
      </section>
      <section className="hidden lg:block px-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-title text-gray-300 text-center pb-5">
            О нашем клубе:
          </h3>
          <div className="border border-gray-600 rounded-lg p-4 bg-gray-900">
            <div className=" relative overflow-hidden rounded-4xl border border-white/10 bg-[#f8f3e8] shadow-2xl ">
              {/* Корешок книги */}
              <div className=" absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-black/20 to-transparent md:block " />
              <div className="grid md:grid-cols-2">
                {/* Левая страница */}
                <div className="space-y-4 p-6 md:p-8">
                  <div className="flex gap-5 items-center">
                    <div className="flex justify-center items-center w-1/2">
                      <img
                        src="/photos/2.png"
                        alt="Книжный клуб"
                        className=" h-70 w-100 rounded-2xl object-cover "
                      />
                    </div>
                    <p className="text-2xl font-title text-blue-950 w-1/2">
                      Основанный 23 декабря 2025 года, наш книжный клуб — это
                      пространство только для девушек, созданное вокруг общей
                      любви к чтению. Хотя, как оказалось, не только к нему. Мы
                      невероятно разные. У нас разные характеры, интересы,
                      жизненный опыт и взгляды на мир. И каким-то образом именно
                      это делает нас такой хорошей компанией. Здесь всегда было
                      легко оставаться собой.
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <p className="text-2xl font-title text-blue-950 w-1/2">
                      Сначала мы встречались просто для того, чтобы обсуждать
                      книги. Но постепенно наш клуб стал чем-то большим. Мы
                      начали проводить время вместе и за пределами книжных
                      встреч: ходить на концерты, праздновать день рождения
                      основательницы клуба, смотреть фильмы в кинотеатре, гулять
                      и создавать воспоминания, которые никак не связаны с
                      сюжетными поворотами и литературными героями.
                    </p>
                    <div className="flex justify-center items-center w-1/2">
                      <img
                        src="/photos/3.png"
                        alt="Встреча клуба"
                        className=" h-70 w-100 rounded-2xl object-cover "
                      />
                    </div>
                  </div>
                </div>
                {/* Правая страница */}
                <div className="flex flex-col gap-6 p-6 md:p-8">
                  <div className="flex justify-center items-center">
                    <img
                      src="/photos/1.png"
                      alt="Участницы клуба"
                      className=" h-110 w-full rounded-2xl object-cover "
                    />
                  </div>
                  <p className="text-2xl font-title text-blue-950">
                    Каждый месяц одна из нас выбирает книгу для чтения. Мы все
                    читаем её, а затем собираемся вместе, чтобы поделиться
                    своими мыслями, впечатлениями, любимыми моментами и иногда
                    совершенно противоположными взглядами на прочитанное. Наши
                    обсуждения бывают вдумчивыми, живыми и порой настолько
                    убедительными, что кто-то начинает смотреть на книгу совсем
                    иначе. То, что начиналось как книжный клуб, постепенно
                    превратилось в круг дружбы, поддержки, смеха и искренних
                    разговоров. Книги объединяют нас, но именно люди заставляют
                    нас возвращаться снова и снова.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
