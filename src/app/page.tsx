import Image from "next/image";
import Link from "next/link";
import { About } from "@/components/about";
import Portofolio from "@/components/portofolio";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <>
      <div
        className="h-[70vh] w-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/IMG_0970.JPG')" }}
      >
        <h1 className="text-white font-extrabold text-4xl text-center">
          Welcome to my Page :)
        </h1>
        <h5 className="text-white text-center mt-2">
          Broken phones, working code.
        </h5>
        <div className="mt-5">
          <Link
            href={"#about"}
            className="px-6 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
      <About />
      <Portofolio />
      <Contact />
    </>
  );
}
