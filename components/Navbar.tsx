import Link from "next/link";

const getNavigationItems = async () => {
  const res =
    await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigation-items
`);
  if (!res.ok) {
    throw new Error("Falied To Fetch");
  }
  const data = await res.json();
  return data.data;
};

const getName = async () => {
  const res =
    await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/site-setting
`);
  if (!res.ok) {
    throw new Error("Falied To Fetch");
  }
  const data = await res.json();
  return data.data;
};

interface NavbarTypes {
  id: number;
  name: string;
  URL: string;
}

interface TagNameTypes {
  id: number;
  Site_Name: string;
  CopyRight: string;
}

const Navbar = async () => {
  const NavBarItems: NavbarTypes[] = await getNavigationItems();
  const TagName: TagNameTypes = await getName();

  return (
    <div className="p-2 m-2">
      <nav className="flex justify-between items-center h-10 bg-white shadow-lg p-2 rounded-lg">
        <Link className="text-xl font-semibold" href={"/"}>
          {TagName?.Site_Name}
        </Link>
        <div className="flex justify-center items-center gap-3 mr-4 ">
          {NavBarItems.map((item) => (
            <Link
              className="duration-300 hover:text-black/60"
              key={item.id}
              href={item.URL}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
