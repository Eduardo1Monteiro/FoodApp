import Link from 'next/link';
import ImageSlideshow from '@/components/Images/ImageSlideshow';

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-12 my-12 mx-auto w-[90%] max-w-[75rem] items-center justify-between">

        {/* Slideshow Container */}
        <div className="w-full max-w-[40rem] h-[25rem] rounded-lg overflow-hidden shadow-lg border-2 border-[#ddd6cb]/20 bg-gray-800">
          <ImageSlideshow />
        </div>

        {/* Hero Content */}
        <div className="flex-1">
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-[2rem] font-bold font-sans tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent mb-4">
              Comida do Mais Alto Nível para Consumidores do Mais Alto Nível
            </h1>

            <p>Saboreie e compartilhe comida com todo o mundo.</p>
          </div>
          <div className="text-2xl flex gap-4 mt-4">

            <Link
              href="/community"
              className="inline-block mt-4 py-2 pl-0 text-[#ff9b05] font-normal hover:text-[#f9b241] transition-colors"
            >
              Entre na Comunidade
            </Link>

            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241] transition-all"
            >
              Explorar Receitas
            </Link>

          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="mb-4">
            Foodies é uma plataforma para aqueles que desejam compartilhar sua receita favorita com o mundo.
            É um lugar para descobrir novos pratos e para conectar-se com outros amantes de comida
          </p>
          <p>
            Foodies é um lugar para descobrir novos pratos
            e conectar-se com outros amantes de comida.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Por Que a Foodies?</h2>
          <p className="mb-4">
            Foodies é uma plataforma para aqueles que desejam compartilhar sua receita favorita com o mundo.
            É um lugar para descobrir novos pratos e para conectar-se com outros amantes de comida
          </p>
          <p>
            Foodies é um lugar para descobrir novos pratos
            e conectar-se com outros amantes de comida.
          </p>
        </section>
      </main>
    </>
  );
}
