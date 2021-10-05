import Navbar from "@Formatting/Layout/Navbar";
import { Footer } from "@Formatting/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed w-screen h-screen bg-cover bg-utah">
        <div className="w-full h-full bg-black opacity-90">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
