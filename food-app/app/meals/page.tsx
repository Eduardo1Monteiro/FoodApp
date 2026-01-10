import MealsGrid from '@/components/Meals/MealsGrid';
import Link from 'next/link';

export default function MealsPage(): React.ReactNode {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">

        <h1 className="font-sans font-bold text-5xl uppercase tracking-widest leading-tight">
          Delicious meals, created{' '}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>

        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>

        <p className="m-0">
          <Link
            href="/meals/share"
            className="
              inline-block mt-4 px-4 py-2 rounded-lg 
              bg-gradient-to-r from-[#f9572a] to-[#ff9b05] 
              text-white font-bold no-underline
              hover:from-[#fd4715] hover:to-[#f9b241] 
              hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]
              transition-all duration-300
            "
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>

      <main className='animate-loading'>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
