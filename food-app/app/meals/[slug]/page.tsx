import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '@/lib/meals';

interface SpecificMealPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SpecificMealPage({ params }: SpecificMealPageProps) {
  const { slug } = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  const formattedInstructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="flex flex-col px-8 py-12 gap-12 m-auto max-w-[80rem] items-center md:flex-row">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="text-[#ddd6cb]">
          <h1 className="text-5xl uppercase font-bold font-sans mb-4 text-wrap">
            {meal.title}
          </h1>
          <p className="text-xl italic text-[#cfa69b]">
            by <a href={`mailto:${meal.creator_email}`} className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent font-bold hover:shadow-[0_0_10px_rgba(242,100,18,0.8)] transition-all">
              {meal.creator}
            </a>
          </p>
          <p className="text-xl mt-4 leading-relaxed">
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <div
          className="text-xl leading-8 bg-[#6e6464] text-[#13120f] rounded-lg p-8 max-w-[60rem] my-8 mx-auto shadow-lg animate-[loading-color_1s_ease-in-out_forwards]"
          dangerouslySetInnerHTML={{
            __html: formattedInstructions,
          }}
        />
      </main>
    </>
  );
}
