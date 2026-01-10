import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const liStyle = "flex flex-col items-center gap-8";
const imageStyle = "w-32 h-32 object-contain";
const pStyle = "font-sans text-3xl font-bold m-0 text-[#ddd6cb]";

export default function CommunityPage(): React.ReactNode {
  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-center text-5xl text-[#ddd6cb]">
        <h1 className="font-sans font-bold">
          One shared passion: <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>

      <main className="w-[90%] max-w-[40rem] mx-auto text-center">
        <h2 className="font-sans font-bold text-[3rem] mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className="list-none my-12 space-y-12 p-0">
          <li className={liStyle}>
            <Image className={imageStyle} src={mealIcon} alt="A delicious meal" />
            <p className={pStyle}>Share & discover recipes</p>
          </li>

          <li className={liStyle}>
            <Image className={imageStyle} src={communityIcon} alt="A crowd of people, cooking" />
            <p className={pStyle}>Find new friends & like-minded people</p>
          </li>

          <li className={liStyle}>
            <Image
              className={imageStyle}
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className={pStyle}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
