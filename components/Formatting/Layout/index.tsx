import Navbar from "@Formatting/Layout/Navbar";
import { Footer } from "@Formatting/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed w-full h-screen bg-cover bg-utah"></div>
      <div className="w-full h-screen bg-black bg-cover opacity-80">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
