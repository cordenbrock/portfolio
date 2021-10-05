import { GiSasquatch } from "react-icons/gi";
import { FaTree } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full mx-auto">
      <div className="flex items-center justify-center text-xl text-gray-600 transform -translate-x-6">
        <p className="text-black">Something&apos;s</p>
        <FaTree />
        <GiSasquatch />
        <FaTree />
        <p className="text-black"> Afoot!</p>
      </div>
    </footer>
  );
};
