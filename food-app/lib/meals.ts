import prisma from './prisma';

export async function getMeals() {
  try {
    return await prisma.meal.findMany();
  } catch {
    throw new Error('A busca falhou')
  }
}
