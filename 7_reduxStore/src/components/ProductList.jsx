import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products, searchQuery } = useSelector((store) => store.product);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="flex-row" style={{ flexWrap: "wrap", marginTop: "25px" }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>aranılan ürün yok</p>
      )}
    </div>
  );
}

export default ProductList;
