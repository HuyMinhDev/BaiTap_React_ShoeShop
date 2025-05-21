import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="row">
      {productsData.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
