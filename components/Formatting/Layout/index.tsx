import Navbar from "@Formatting/Layout/Navbar";
import { Footer } from "@Formatting/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-utah">
        <div className="w-full h-screen bg-black bg-cover bg-opacity-80">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
