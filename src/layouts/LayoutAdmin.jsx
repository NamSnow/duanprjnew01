import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import HomeAdmin from "../components/pages/HomeAdmin";
import { Bars3Icon } from "@heroicons/react/24/outline";

const LayoutAdmin = (props) => {
  return (
    <div className="">
      <AdminNavbar />

      <div>
        <HomeAdmin />
      </div>
    </div>
  );
};

export default LayoutAdmin;
