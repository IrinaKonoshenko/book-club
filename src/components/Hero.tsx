export default function Hero() {
  return (
    <>
      <section className="py-16 lg:hidden">
        <div className="container mx-auto px-4 flex flex-col gap-5">
          <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center">
              <img
                src="/photos/2.png"
                alt="Книжный клуб"
                className=" h-70 w-100 rounded-2xl object-cover "
              />
            </div>
            <p className="text-2xl font-title text-gray-300">
              Founded on December 23, 2025, our book club is a women-only space
              built around a shared love of reading — and, as it turns out, much
              more than that. We are incredibly different from one another.
              Different personalities, interests, backgrounds, and perspectives.
              Somehow, though, that is exactly what makes us work so well
              together. Being ourselves has always felt easy here.
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
            <p className="text-2xl font-title text-gray-300">
              At first, we met simply to discuss books. But little by little,
              our club became something bigger. We started spending more time
              together outside of our monthly meetings — going to concerts,
              celebrating our founder’s birthday, watching movies, taking walks,
              and creating memories that had nothing to do with plot twists or
              character development.
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
            <p className="text-2xl font-title text-gray-300">
              Every month, one of us chooses a book for the group. We all read
              it, then gather to share our thoughts, opinions, favorite moments,
              and sometimes completely opposite interpretations. The discussions
              are thoughtful, lively, and occasionally persuasive enough to make
              someone rethink everything they just read. What began as a book
              club has grown into a circle of friendship, support, laughter, and
              meaningful conversations. The books bring us together, but the
              people are the reason we keep coming back.
            </p>
          </div>
        </div>
      </section>
      <section className="hidden lg:block px-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
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
                    <p className="text-lg font-title text-blue-950 w-1/2">
                      Founded on December 23, 2025, our book club is a
                      women-only space built around a shared love of reading —
                      and, as it turns out, much more than that. We are
                      incredibly different from one another. Different
                      personalities, interests, backgrounds, and perspectives.
                      Somehow, though, that is exactly what makes us work so
                      well together. Being ourselves has always felt easy here.
                    </p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <p className="text-lg font-title text-blue-950 w-1/2">
                      At first, we met simply to discuss books. But little by
                      little, our club became something bigger. We started
                      spending more time together outside of our monthly
                      meetings — going to concerts, celebrating our founder’s
                      birthday, watching movies, taking walks, and creating
                      memories that had nothing to do with plot twists or
                      character development.
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
                  <p className="text-lg font-title text-blue-950">
                    Every month, one of us chooses a book for the group. We all
                    read it, then gather to share our thoughts, opinions,
                    favorite moments, and sometimes completely opposite
                    interpretations. The discussions are thoughtful, lively, and
                    occasionally persuasive enough to make someone rethink
                    everything they just read. What began as a book club has
                    grown into a circle of friendship, support, laughter, and
                    meaningful conversations. The books bring us together, but
                    the people are the reason we keep coming back.
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
