import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import ProductDetails from "../components/ProductDetails";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
