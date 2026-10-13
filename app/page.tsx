import Image from "next/image";
import blog from "@/public/blog.png";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
      </Suspense>
      <div>
        <div className="min-h-150 md:min-h-166">
          <div className="flex justify-center items-center gap-6 flex-col md:flex-row mb-5">
            <h1 className="text-3xl duration-300 hover:text-blue-300">
              Simple Blog With Next & Strapi
            </h1>
            <Image src={blog} alt="Blog" width={400} height={400} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
