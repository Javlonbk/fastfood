import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/Root.js";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import OrderProvider from './context/OrderContext'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <ProductProvider>
          <Root />
        </ProductProvider>
      </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
