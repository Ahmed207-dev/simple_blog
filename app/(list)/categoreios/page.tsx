import Link from "next/link";
const GetCategorios = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=articales`,
    );
    if (!res.ok) {
      throw new Error("Faild To Fetch Users");
    }
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Backend Connection Error:", error);
    return [];
  }
};

interface CategoreyType {
  id: number;
  name: string;
  description: string;
  articales: string[];
  slug: string;
}
const CategoreyPage = async () => {
  const Categorey: CategoreyType[] = await GetCategorios();

  return (
    <div className="min-h-150 md:min-h-166">
      <h1 className="text-center text-2xl font-semibold mb-4 border-b border-b-black w-fit m-auto py-1">
        Categorey
      </h1>
      <div className="flex justify-center items-center gap-3">
        {Categorey.length > 0 ? (
          Categorey?.map((cat) => (
            <div
              key={cat.id}
              className="bg-white shadow-lg p-3 rounded-xl w-80"
            >
              <div className="mb-5">
                <h1 className="font-bold text-xl">{cat.name}</h1>
                <p className="text-gray-400 text-sm">
                  {cat.articales.length} Articales
                </p>
              </div>

              <Link
                className="text-sm font-bold"
                href={`categoreios/${cat.slug}`}
              >
                View Categorey
              </Link>
            </div>
          ))
        ) : (
          <p>No Data Yet...</p>
        )}
      </div>
    </div>
  );
};

export default CategoreyPage;
