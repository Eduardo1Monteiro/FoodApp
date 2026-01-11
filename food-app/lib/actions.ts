'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string | null) {
  return !text || text.trim() === '';
}

export default async function shareMeal(prevState: { message: string } | null, formData: FormData) {

  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email)
  ) {
    return {
      message: 'Input inválido: Todos os campos são necessários'
    };
  }

  if (!meal.creator_email.includes('@')) {
    return {
      message: 'Input inválido: O email inserido não é válido'
    };
  }

  if (!meal.image || meal.image.size === 0 || meal.image.name === 'undefined') {
    return {
      message: 'Input inválido: Uma imagem deve ser inserida'
    };
  }

  await saveMeal(meal);

  revalidatePath('/meals');
  redirect('/meals');
}
