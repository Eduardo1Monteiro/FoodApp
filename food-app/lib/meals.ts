import prisma from './prisma';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

interface MealInput {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

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


export async function saveMeal(meal: MealInput) {
  const slug = slugify(meal.title, { lower: true });

  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`/public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  const imagePath = `/images/${fileName}`;

  await prisma.meal.create({
    data: {
      slug: slug,
      title: meal.title,
      image: imagePath,
      summary: meal.summary,
      instructions: instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
    },
  });
}
