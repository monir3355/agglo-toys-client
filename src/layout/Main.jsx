import React from "react";
import Header from "../pages/share/Header";
import Footer from "../pages/share/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-316px)] container mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
