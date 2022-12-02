import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/Root.js";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import OrderProvider from './context/OrderContext'
import { CategoryProvider } from "./context/CategoryContext";
import { BranchesProvider } from "./context/BranchesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <CategoryProvider>
          <BranchesProvider>
            <ProductProvider>
              <Root />
            </ProductProvider>
          </BranchesProvider>
        </CategoryProvider>
      </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
