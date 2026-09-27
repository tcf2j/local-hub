import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <div className="nav">
        <div className="nav-a">
          <h1 className="text-center pt-4 text-3xl">LOCALHUB</h1>
        </div>
        <div className="nav-b">
          <p>Home</p>
          <p>Create New Buisness</p>
        </div>
      </div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  </StrictMode>,
);
