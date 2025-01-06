import { useNavigate } from "react-router-dom";
import "../css/product.css";

function Product({ product }) {
  const { id, title, description, image, price } = product;
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={image} />
      <div style={{ textAlign: "center" }}>
        <p style={{ height: "50px" }}>{title}</p>
        <h3>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-btn"
        >
          Detayına Git
        </button>
      </div>
    </div>
  );
}

export default Product;
