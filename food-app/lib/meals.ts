import prisma from './prisma';
import slugify from 'slugify';
import xss from 'xss';
import { v2 as cloudinary } from 'cloudinary';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

interface MealInput {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

  const arrayBuffer = await meal.image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const mime = meal.image.type || 'image/png';
  const encoding = 'base64';
  const base64Data = buffer.toString(encoding);
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

  const result = await cloudinary.uploader.upload(fileUri, {
    folder: 'meals',
    invalidate: true,
    timeout: 120000,
  });

  const imagePath = result.secure_url;

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
