import React from "react";
import { Action } from "../../../buttons/Action";
import AddNewProduct from "../../../Form/AddNewProduct";
import ProductEditCanvas from "../../../offcanvas/ProductEditCanvas";
import { ProductItemC } from "./style";
import { useProduct } from "./../../../context/ProductContext";

const ProductItem = ({ id, product, image, category, price, information }) => {
  const { deleteProduct } = useProduct();
  return (
    <ProductItemC>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <ProductItemC.Image>{image}</ProductItemC.Image>
        <ProductItemC.Name>{product}</ProductItemC.Name>
      </div>
      <ProductItemC.Category>{category}</ProductItemC.Category>
      <ProductItemC.Price>{price}</ProductItemC.Price>
      <ProductItemC.Info>{information}</ProductItemC.Info>
      <ProductItemC.Action>
        {/* <Action onClick={editProduct}>
             <Action.Edit/>
        </Action> */}
        <ProductEditCanvas
          component={<AddNewProduct id={id} />}
          componentTitle={"Mahsulotni tahrirlash"}
        />
        <Action onClick={() => deleteProduct(id)}>
          <Action.Trash />
        </Action>
      </ProductItemC.Action>
    </ProductItemC>
  );
};

export default ProductItem;
