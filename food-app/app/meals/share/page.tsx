'use client';

import ImagePicker from "@/components/Meals/ImagePicker";
import MealsFormSubmit from "@/components/Meals/MealsFormSubmit";
import shareMeal from "@/lib/actions";
import { useActionState } from "react";

export const maxDuration = 60;

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, null);

  return (
    <>
      <header className="flex flex-col gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className="font-sans font-bold text-5xl">
          Compartilhe sua{' '}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            receita favorita
          </span>
        </h1>
        <p>Ou qualquer comida que desejar!</p>
      </header>

      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]" action={formAction}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-sans uppercase text-[#b3aea5] font-bold"
              >
                Seu nome
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
                Seu email
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
              Título
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
              Descrição
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
              Instruções
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full px-4 py-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-sans text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>

          <div className="border-0 text-center text-[#b3aea5]">
            <ImagePicker name="image" />
          </div>

          {state?.message && <p>{state?.message}</p>}
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
