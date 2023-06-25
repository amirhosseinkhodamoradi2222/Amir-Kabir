import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../node_modules/react-loading-skeleton/dist/skeleton.css";
import '../node_modules/swiper/swiper.css'
// import { CookiesProvider } from "react-cookie";
import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProSidebarProvider >
    <App />
  </ProSidebarProvider>
);
