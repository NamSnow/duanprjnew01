import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<TableUsers />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
