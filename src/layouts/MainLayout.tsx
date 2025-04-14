import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container max-w-screen-2xl py-6 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
