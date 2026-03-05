import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Layout from "./layouts/Layout";
import Signin from "./components/pages/Signin";
import Todo from "./components/pages/Todo";
import LayoutAdmin from "./layouts/LayoutAdmin";
import HomeAdmin from "./components/pages/HomeAdmin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
