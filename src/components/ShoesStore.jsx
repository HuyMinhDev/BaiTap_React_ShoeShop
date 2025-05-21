import React, { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { products } from "../data/products";
import Header from "./Header";
import Footer from "./Footer";
const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1 className="text-center mb-4 mt-4">Shoes Store</h1>
        <ProductList productsData={products} setStateModal={setProductDetail} />

        {productDetail && (
          <Modal
            content={productDetail}
            onClose={() => setProductDetail(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShoesStore;
