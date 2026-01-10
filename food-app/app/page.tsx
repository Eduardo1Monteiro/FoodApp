import Link from 'next/link';
import ImageSlideshow from '@/components/Images/ImageSlideshow';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem] items-center justify-between">

        {/* Slideshow Container */}
        <div className="w-[40rem] h-[25rem] rounded-lg overflow-hidden shadow-lg border-2 border-[#ddd6cb]/20 bg-gray-800">
          <ImageSlideshow />
        </div>

        {/* Hero Content */}
        <div className="flex-1">
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-[2rem] font-bold font-sans tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent mb-4">
              NextLevel Food for NextLevel Foodies
            </h1>

            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="text-2xl flex gap-4 mt-4">

            <Link
              href="/community"
              className="inline-block mt-4 py-2 pl-0 text-[#ff9b05] font-normal hover:text-[#f9b241] transition-colors"
            >
              Join the Community
            </Link>

            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241] transition-all"
            >
              Explore Meals
            </Link>

          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why NextLevel Food?</h2>
          <p className="mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
