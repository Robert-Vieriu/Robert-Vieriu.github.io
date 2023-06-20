import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StorePage from "./pages/StorePage/StorePage";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/store", element: <StorePage /> },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
