import React, { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { products } from "../data/products";

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Shoes Store</h1>
      <ProductList productsData={products} setStateModal={setProductDetail} />

      {productDetail && (
        <Modal content={productDetail} onClose={() => setProductDetail(null)} />
      )}
    </div>
  );
};

export default ShoesStore;
