import { PrismaClient } from '@prisma/client';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

const prisma = new PrismaClient();

const dummyMeals = [
  {
    title: 'Hambúrguer de Queijo Suculento',
    slug: 'hamburguer-de-queijo-suculento',
    image: '/images/burger.jpg',
    summary:
      'Um hambúrguer de dar água na boca com um suculento bife de carne e queijo derretido, servido em um pão macio.',
    instructions: `
      1. Prepare a carne:
         Misture 200g de carne moída com sal e pimenta. Modele no formato de hambúrguer.

      2. Cozinhe a carne:
         Aqueça uma frigideira com um pouco de óleo. Cozinhe o hambúrguer por 2-3 minutos de cada lado, até dourar.

      3. Monte o hambúrguer:
         Toste as metades do pão. Coloque alface e tomate na base. Adicione a carne cozida e cubra com uma fatia de queijo.

      4. Sirva:
         Complete a montagem com a parte de cima do pão e sirva quente.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Curry Picante',
    slug: 'curry-picante',
    image: '/images/curry.jpg',
    summary:
      'Um curry rico e picante, infundido com especiarias exóticas e leite de coco cremoso.',
    instructions: `
      1. Pique os vegetais:
         Corte os vegetais de sua escolha em pedaços pequenos.

      2. Refogue os vegetais:
         Em uma panela com óleo, refogue os vegetais até começarem a amolecer.

      3. Adicione a pasta de curry:
         Misture 2 colheres de sopa de pasta de curry e cozinhe por mais um minuto.

      4. Cozinhe com leite de coco:
         Despeje 500ml de leite de coco e leve à fervura. Deixe cozinhar por cerca de 15 minutos.

      5. Sirva:
         Aproveite este curry cremoso com arroz ou pão.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Dumplings Caseiros',
    slug: 'dumplings-caseiros',
    image: '/images/dumplings.jpg',
    summary:
      'Dumplings macios recheados com carne saborosa e vegetais, cozidos no vapor com perfeição.',
    instructions: `
      1. Prepare o recheio:
         Misture carne moída, vegetais picados e especiarias.

      2. Recheie os dumplings:
         Coloque uma colher de recheio no centro de cada massa de dumpling. Molhe as bordas e dobre para selar.

      3. Cozinhe no vapor:
         Organize os dumplings em uma vaporeira. Cozinhe por cerca de 10 minutos.

      4. Sirva:
         Aproveite estes dumplings quentes, com um molho de sua escolha.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Macarrão com Queijo Clássico',
    slug: 'macarrao-com-queijo-classico',
    image: '/images/macncheese.jpg',
    summary:
      "Macarrão cremoso com queijo, um clássico reconfortante que sempre agrada a todos.",
    instructions: `
      1. Cozinhe o macarrão:
         Ferva o macarrão de acordo com as instruções da embalagem até ficar al dente.

      2. Prepare o molho de queijo:
         Em uma panela, derreta a manteiga, adicione farinha e misture gradualmente o leite até engrossar. Misture o queijo ralado até derreter.

      3. Misture:
         Misture o molho de queijo com o macarrão escorrido.

      4. Asse:
         Transfira para uma assadeira, cubra com farinha de rosca e asse até dourar.

      5. Sirva:
         Sirva quente, decorado com salsinha se desejar.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Pizza Autêntica',
    slug: 'pizza-autentica',
    image: '/images/pizza.jpg',
    summary:
      'Pizza feita à mão com molho de tomate picante, coberturas frescas e queijo derretido.',
    instructions: `
      1. Prepare a massa:
         Sove a massa de pizza e deixe crescer até dobrar de tamanho.

      2. Modele e adicione coberturas:
         Abra a massa, espalhe o molho de tomate e adicione suas coberturas favoritas e queijo.

      3. Asse a pizza:
         Asse em forno pré-aquecido a 220°C por cerca de 15-20 minutos.

      4. Sirva:
         Corte quente e aproveite com um toque de folhas de manjericão.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Wiener Schnitzel',
    slug: 'wiener-schnitzel',
    image: '/images/schnitzel.jpg',
    summary:
      'Costeleta de vitela empanada crocante e dourada, um prato clássico austríaco.',
    instructions: `
      1. Prepare a vitela:
         Bata as costeletas de vitela até ficarem com uma espessura uniforme.

      2. Empane a vitela:
         Passe cada costeleta na farinha, mergulhe nos ovos batidos e depois na farinha de rosca.

      3. Frite o schnitzel:
         Aqueça o óleo em uma frigideira e frite cada schnitzel até dourar dos dois lados.

      4. Sirva:
         Sirva quente com uma fatia de limão e uma salada de batata ou verduras.
    `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Salada de Tomate Fresca',
    slug: 'salada-de-tomate-fresca',
    image: '/images/tomato-salad.jpg',
    summary:
      'Uma salada leve e refrescante com tomates maduros, manjericão fresco e um vinagrete picante.',
    instructions: `
      1. Prepare os tomates:
         Fatie tomates frescos e organize-os em um prato.
      
      2. Adicione ervas e temperos:
         Salpique manjericão picado, sal e pimenta sobre os tomates.
      
      3. Tempere a salada:
         Regue com azeite de oliva e vinagre balsâmico.
      
      4. Sirva:
         Aproveite esta salada simples e saborosa como acompanhamento ou refeição leve.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
  },
];

async function main() {
  console.log('Iniciando o seed...');

  for (const meal of dummyMeals) {
    const createdMeal = await prisma.meal.upsert({
      where: { slug: meal.slug },
      update: {},
      create: meal,
    });
    console.log(`Refeição criada com id: ${createdMeal.id}`);
  }

  console.log('Seed finalizado.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
