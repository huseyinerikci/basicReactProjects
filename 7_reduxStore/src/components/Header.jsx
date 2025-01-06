import React, { useState } from "react";
import "../css/header.css";
import { CiLight, CiShoppingBasket } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";
import { setSearchQuery } from "../redux/slices/productSlice";

function Header() {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isDetailPage = location.pathname.includes("/product-details");

  const { products } = useSelector((store) => store.basket);
  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const changeTheme = () => {
    const root = document.querySelector("#root");
    if (theme) {
      root.style.background = "black";
      root.style.color = "white";
    } else {
      root.style.background = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/logo.png" />
        <p className="logo-text">Redux Store</p>
      </div>
      <div className="flex-row">
        {!isDetailPage && (
          <input
            onChange={handleChange}
            className="search-input"
            type="text"
            placeholder="Bir şey ara..."
          />
        )}

        <div>
          {!theme ? (
            <CiLight onClick={changeTheme} className="icon" />
          ) : (
            <FaMoon onClick={changeTheme} className="icon" />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <CiShoppingBasket style={{ marginRight: "6px" }} className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
