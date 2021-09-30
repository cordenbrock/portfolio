import React from "react";
import Image from "next/image";
import Navbar from "@components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="fixed w-screen bg-cover bg-test1">
      <div className="h-screen bg-black opacity-90">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
