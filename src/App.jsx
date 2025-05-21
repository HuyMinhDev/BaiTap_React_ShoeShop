// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoesStore from "./components/ShoesStore";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoesStore />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
