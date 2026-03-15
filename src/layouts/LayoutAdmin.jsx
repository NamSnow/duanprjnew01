import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import HomeAdmin from "../components/pages/HomeAdmin";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";

const LayoutAdmin = (props) => {
  return (
    <div className="">
      <AdminNavbar />

      <div>
        <HomeAdmin />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default LayoutAdmin;
