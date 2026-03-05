// import { useState } from "react";
import { Outlet } from "react-router";
import MainNavbar from "../components/MainNavbar";

const Layout = () => {
  return (
    <div className="bg-dark h-screen">
      <MainNavbar />

      <Outlet />
    </div>
  );
};

export default Layout;
