import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      {/* <a
        className="navbar-brand fw-bold text-primary"
        role="button"
        onClick={() => navigate("/")}
      >
        Shoes Store
      </a> */}
      <Link className="navbar-brand fw-bold text-primary" to="/">
        Shoes Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
          <li className="nav-item">
            <span
              className="nav-link active"
              role="button"
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-house me-1" />
              Home
            </span>
          </li>

          <li className="nav-item">
            <span
              className="nav-link"
              role="button"
              onClick={() => navigate("/shop")}
            >
              <i className="fa-solid fa-store me-1" />
              Shop
            </span>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-tags me-1" />
              Categories
            </span>
            <ul className="dropdown-menu">
              <li>
                <span
                  className="dropdown-item"
                  role="button"
                  onClick={() => navigate("/category/men")}
                >
                  Men
                </span>
              </li>
              <li>
                <span
                  className="dropdown-item"
                  role="button"
                  onClick={() => navigate("/category/women")}
                >
                  Women
                </span>
              </li>
              <li>
                <span
                  className="dropdown-item"
                  role="button"
                  onClick={() => navigate("/category/accessories")}
                >
                  Accessories
                </span>
              </li>
            </ul>
          </li>
        </ul>

        <form className="d-flex me-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
          />
          <button className="btn btn-outline-primary" type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <span
              className="nav-link position-relative"
              role="button"
              onClick={() => navigate("/cart")}
            >
              <i className="fa-solid fa-cart-shopping fs-5" />
            </span>
          </li>
          <li className="nav-item">
            <span
              className="btn btn-primary"
              role="button"
              onClick={() => navigate("/login")}
            >
              <i className="fa-solid fa-user me-1" />
              Login
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
