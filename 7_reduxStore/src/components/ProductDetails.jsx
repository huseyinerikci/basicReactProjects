import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";
import { IoIosArrowDropleft } from "react-icons/io";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { title, description, image, price } = selectedProduct;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    getProductId();
  }, []);
  const getProductId = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div>
      <Link to={-1}>
        <IoIosArrowDropleft
          style={{
            fontSize: "40px",
            color: "rgb(141, 63, 8)",
            marginTop: "20px",
            cursor: "pointer",
          }}
        />
      </Link>

      <div
        style={{
          height: "100vh",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "40px" }}>
          <img src={image} width={300} height={500} />
        </div>
        <div>
          <h1 style={{ fontFamily: "arial" }}>{title}</h1>
          <p style={{ fontFamily: "arial", fontSize: "20px" }}>{description}</p>
          <h1
            style={{
              fontFamily: "arial",
              fontSize: "50px",
              fontWeight: "bold",
              color: "rgb(141, 63, 8)",
            }}
          >
            {price}₺
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CiCirclePlus
              onClick={() => increment()}
              style={{ fontSize: "40px", marginRight: "5px" }}
            />
            <span style={{ fontSize: "35px" }}>{count}</span>
            <CiCircleMinus
              onClick={() => decrement()}
              style={{ fontSize: "40px", marginLeft: "5px" }}
            />
          </div>
          <div>
            <button
              onClick={addBasket}
              style={{
                marginTop: "25px",
                border: "none",
                padding: "10px",
                background: "rgb(141, 63, 8)",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
