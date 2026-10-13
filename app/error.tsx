"use client";

import Link from "next/link";

const error = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-white shadow-xl rounded-xl p-4 m-4">
        <h1 className="text-5xl md:text-7xl text-red-500 mb-5">Error page</h1>
        <p className="text-gray-400 text-sm">{error.message}</p>
        <Link
          className="bg-red-500 p-2 text-white flex justify-center w-fit m-auto rounded-lg"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default error;
