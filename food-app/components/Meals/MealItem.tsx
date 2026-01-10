import Link from 'next/link';
import Image from 'next/image';

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps): React.ReactNode {
  return (
    <article className="
      flex flex-col justify-between h-full rounded overflow-hidden 
      shadow-[0_0_12px_rgba(0,0,0,0.3)] 
      transition-all duration-300 ease-in-out 
      text-[#ddd6cb] 
      bg-gradient-to-r from-[#2c1e19] to-[#25200f]
    ">
      <header>
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="pt-2 px-4">
          <h2 className="m-0 text-2xl font-sans font-bold">
            {title}
          </h2>
          <p className="text-xs text-[#cfa69b] italic">
            by {creator}
          </p>
        </div>
      </header>

      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4">
          {summary}
        </p>

        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="
              inline-block mt-4 py-2 px-4 rounded-lg font-bold text-white no-underline
              bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
              hover:from-[#fd4715] hover:to-[#f9b241]
              hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]
              transition-all
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
