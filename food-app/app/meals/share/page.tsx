export default function ShareMealPage() {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className="font-sans font-bold text-5xl">
          Share your{' '}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>

          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>

          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>

          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>

          <div className="my-4 p-4 border border-dashed border-[#b3aea5] text-center text-[#b3aea5]">
            [IMAGE PICKER COMPONENT VAI AQUI]
          </div>

          <p className="text-right">
            <button
              type="submit"
              className="
                px-8 py-3 border-0 rounded-sm shadow-md cursor-pointer text-xl text-white font-inherit
                bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
                hover:from-[#fd4715] hover:to-[#f9b241]
                focus:from-[#fd4715] focus:to-[#f9b241]
                disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed
              "
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
