const GetSortCategorey = async (slug: string) => {
  const params = new URLSearchParams({
    "filters[slug][$eq]": slug,
    populate: "articales",
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?${params}`,
    { cache: "default" },
  );
  if (!res.ok) {
    throw new Error("Faild To Fetch Users");
  }
  const data = await res.json();
  console.log(data.data[0]);

  return data.data[0];
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const SpecifCatgorey: any = await GetSortCategorey(slug);
  return (
    <div
      key={SpecifCatgorey.documentId}
      className="flex justify-center items-center flex-col bg-white shadow-lg p-4 rounded-lg w-60 m-auto"
    >
      {SpecifCatgorey.articales
        ? SpecifCatgorey.articales.map((articale: any) => (
            <div key={articale.id}>
              <h1 className="text-xl font-bold">{articale.title}</h1>
              <p className="text-gray-400 text-sm">{articale.description}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default page;
