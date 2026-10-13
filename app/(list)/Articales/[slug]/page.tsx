import Link from "next/link";

const GetSpecifArticale = async (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);

  const params = new URLSearchParams({
    "filters[slug][$eq]": decodedSlug,
    populate: "*",
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articales?${params}`,
    {
      cache: "no-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Faild To Fetch Users");
  }
  const data = await res.json();
  console.log(data.data[0]);

  return data.data[0];
};

interface CategoryType {
  id: number;
  name: string;
}

interface ArticalType {
  id: number;
  title: string;
  description: string;
  slug: string;
  category: CategoryType;
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const Data: ArticalType = await GetSpecifArticale(slug);

  return (
    <div className="flex justify-center items-center gap-2 p-4 m-4">
      <div className="bg-white shadow-lg p-2 rounded-lg">
        <h1 className="text-xl font-bold mb-2">{Data.title}</h1>
        <p className="text-sm text-gray-400 mb-4">{Data.description}</p>
        <span className="mt-4 text-gray-400 rounded-xl">
          {Data.category?.name}
        </span>
      </div>
    </div>
  );
};

export default page;
