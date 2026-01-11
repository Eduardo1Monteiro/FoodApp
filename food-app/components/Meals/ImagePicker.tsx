'use client';

import { useRef, useState, ChangeEvent } from 'react';
import Image from 'next/image';

interface ImagePickerProps {
  name: string;
}

export default function ImagePicker({ name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-start gap-6 mb-4">

        <div className="relative w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9]">
          {!pickedImage && <p className="m-0 p-4">Nenhuma imagem escolhida.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
              className="object-cover"
            />
          )}
        </div>

        <input
          className="absolute opacity-0 -z-10 w-1 h-1 top-0 left-0"
          type="file"
          accept="image/png, image/jpeg"
          id={name}
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button
          className="
            border-0 py-2 px-6 rounded-sm cursor-pointer font-inherit
            bg-[#a4abb9] text-[#1c2027] 
            hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]
            transition-colors
          "
          onClick={handleClick}
          type="button"
        >
          Escolha uma Imagem
        </button>
      </div>
    </div>
  );
}
