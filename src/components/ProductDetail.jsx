import React, { useState } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom"; // ✅ BẠT BUỘC PHẢI IMPORT
import { products } from "../data/products";
import Header from "./Header";
import Footer from "./Footer";
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("41");

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-5">Sản phẩm không tồn tại.</div>;
  }

  const handleAddToCart = () => {
    alert(
      `Đã thêm ${quantity} x ${product.name} - Size ${selectedSize} vào giỏ hàng.`
    );
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Info */}
          <div className="col-md-6">
            <h2 className="mb-3">{product.name}</h2>
            <h4 className="text-danger mb-4">${product.price.toFixed(2)}</h4>
            <p className="text-muted">{product.description}</p>
            {/* Size select */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Size:</label>
              <select
                className="form-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </select>
            </div>
            {/* Quantity */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Số lượng:</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            {/* Add to cart */}
            <button
              className="btn btn-primary btn-lg d-flex align-items-center gap-2"
              onClick={handleAddToCart}
            >
              <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
