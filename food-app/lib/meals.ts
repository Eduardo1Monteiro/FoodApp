import prisma from './prisma';

export async function getMeals() {
  try {
    return await prisma.meal.findMany();
  } catch (error) {
    console.error('Erro ao buscar refeições:', error);
    throw new Error('A busca falhou');
  }
}

export async function getMeal(slug: string) {
  try {
    const meal = await prisma.meal.findUnique({
      where: {
        slug: slug,
      },
    });

    if (!meal) {
      return null;
    }

    return meal;
  } catch (error) {
    console.error('Erro ao buscar refeição:', error);
    throw new Error('Falha ao buscar a refeição');
  }
}
