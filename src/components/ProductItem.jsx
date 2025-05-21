import React, { useState } from "react";
import "./ProductItem.scss";
import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item, setStateModal }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const handleViewDetail = () => {
    navigate(`/product/${item.id}`);
  };
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card h-100">
      <div className="product-top">
        <div className="product-img">
          <img src={item.image} className="card-img-top" alt={item.name} />
        </div>
        <div className="product-icon">
          <i
            className={`fa-heart ${isLiked ? "fa-solid liked" : "fa-regular"}`}
            onClick={handleLikeClick}
          ></i>
          <i
            onClick={() => setStateModal(item)}
            className="fa-solid fa-eye"
          ></i>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => handleViewDetail()}
        >
          <i class="fa-solid fa-cart-shopping me-2"></i>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
