import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
