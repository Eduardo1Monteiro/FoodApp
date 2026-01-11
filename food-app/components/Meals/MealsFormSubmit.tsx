'use client';

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}
      type="submit"
      className="
                px-8 py-3 border-0 rounded-sm shadow-md cursor-pointer text-xl text-white font-inherit
                bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
                hover:from-[#fd4715] hover:to-[#f9b241]
                focus:from-[#fd4715] focus:to-[#f9b241]
                disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
