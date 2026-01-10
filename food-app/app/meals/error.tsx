'use client';

export default function ErrorPage(): React.ReactNode {
  return (
    <main className="flex flex-col items-center text-sans gap-12">
      <h1 className="text-6xl uppercase font-bold text-center bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">Um problema ocorreu!</h1>
      <p className="text-center text-2xl">Falha ao buscar refeições. Por favor, tente mais tarde</p>
    </main>
  );
}
