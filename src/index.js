import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/Root.js";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Root />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
