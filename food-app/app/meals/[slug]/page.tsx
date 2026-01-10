interface SpecificMealPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SpecificMealPage({ params }: SpecificMealPageProps): Promise<React.ReactNode> {
  const { slug } = await params;

  return (
    <div className="flex items-center justify-center">
      <h1 className="font-bold text-5xl">{slug}</h1>
    </div>
  );
}
