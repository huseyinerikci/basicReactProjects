import { Drawer } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBasket,
  deleteBasket,
  setDrawer,
} from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();
  const handleDelete = (p_id) => {
    dispatch(deleteBasket({ id: p_id }));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          anchor="right"
          onClose={() => dispatch(setDrawer())}
          open={drawer}
        >
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  style={{
                    gap: "10px",
                    padding: "10px",
                    boxShadow: "1px 1px 4px gray",
                  }}
                  className="flex-row"
                >
                  <img
                    style={{ marginRight: "5px" }}
                    src={product.image}
                    width={50}
                    height={50}
                  />
                  <p style={{ width: "320px" }}>
                    {product.title}({product.count})
                  </p>
                  <div>
                    <p style={{ fontWeight: "bold", width: "50px" }}>
                      {product.price.toFixed(2)}₺
                    </p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn"
                    >
                      sil
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p
              style={{
                width: "50%",
                fontSize: "15px",
                padding: "10px 10px",
                margin: "50px auto",
                border: "1px solid rgb(187, 81, 5",
              }}
            >
              Sepetinizde ürün bulunmamaktadır. Lütfen sepetinize ürün
              ekleyiniz.
            </p>
          )}
          <div>
            <h2 style={{ marginLeft: "10px" }}>
              Total Amount:{" "}
              <span style={{ color: "rgb(187, 81, 5)" }}>
                {totalAmount.toFixed(2)}₺
              </span>
            </h2>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
