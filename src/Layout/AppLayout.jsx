import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => { 


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="lg:mt-45 mt-25 md:mt-45 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
