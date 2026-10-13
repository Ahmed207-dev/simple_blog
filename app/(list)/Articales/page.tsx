import Link from "next/link";

const GetArticale = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articales`,
      {
        cache: "no-cache",
      },
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Backend Connection Error:", error);
    return [];
  }
};

interface ArticalType {
  id: number;
  title: string;
  description: string;
  slug: string;
}

const ArticalePage = async () => {
  const Articales: ArticalType[] = await GetArticale();

  return (
    <div className="min-h-150 md:min-h-166">
      <h1 className="text-center text-2xl font-semibold mb-4 border-b border-b-black w-fit m-auto py-1">
        Articales
      </h1>
      <div className="flex justify-center items-center gap-2 p-4 m-4">
        {Articales.length > 0 ? (
          Articales.map((articale) => (
            <div key={articale.id}>
              <div className="bg-white shadow-lg p-2 rounded-lg">
                <h1 className="text-xl font-bold mb-2">{articale.title}</h1>
                <p className="text-sm text-gray-400 mb-4">
                  {articale.description}
                </p>
                <Link
                  className="text-gray-500 hover:underline"
                  href={`/Articales/${articale.slug}`}
                >
                  Reed More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No Data Yet...</p>
        )}
      </div>
    </div>
  );
};

export default ArticalePage;
