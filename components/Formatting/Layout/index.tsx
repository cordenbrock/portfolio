import Image from "next/image";
import Desert from "../../../public/utah.jpg";
import Navbar from "@Formatting/Layout/Navbar";
import { Footer } from "@Formatting/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src={Desert}
          alt="app image"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          placeholder="blur"
          quality="100"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-80">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
