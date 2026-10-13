import Link from "next/link";

const GetUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Faild To Fetch Users");
  }
  const data = await res.json();
  return data;
};

interface UsersType {
  id: number;
  email: string;
  username: string;
}

const page = async () => {
  const Users: UsersType[] = await GetUsers();

  return (
    <div className="min-h-150 md:min-h-166">
      <h1 className="text-center text-2xl font-semibold mb-4 border-b border-b-black w-fit m-auto py-1">
        Users
      </h1>
      <div className="grid grid-cols-2 gap-2  w-fit m-auto p-2">
        {Users.map((user) => (
          <div className="bg-white shadow-lg p-3 rounded-xl" key={user.id}>
            <div className="flex gap-2 items-center my-4">
              <div className="bg-black rounded-full w-5 h-5 p-5 text-white flex justify-center items-center">
                {user.username.slice(0, 1).toUpperCase()}
              </div>
              <div className="">
                <h1 className="text-xl font-semibold">{user.username}</h1>
                <p className="text-gray-400 text-xs">{user.email}</p>
              </div>
            </div>
            <Link
              className="pt-4 text-sm duration-300 hover:text-black/60"
              href={`Users/${user.id}`}
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
