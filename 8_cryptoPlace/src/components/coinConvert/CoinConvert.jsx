import { useEffect, useState } from "react";
import "./CoinConvert.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../redux/cryptoSlice";
import { TbArrowsDownUp } from "react-icons/tb";
import usd from "../../assets/usd.png";
import millify from "millify";
function CoinConvert() {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { selectedCoin } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
  }, [dispatch, id]);

  return (
    <div className="currency-container">
      <div className="currency-converter">
        <h3>Currency Convertor</h3>
        <div className="converter-item">
          <div className="converter-coin">
            <div className="icon-container">
              <img src={selectedCoin?.image.small} className="icon-image" />
            </div>
            <p>{selectedCoin?.symbol}</p>
          </div>
          <div className="input-section">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input"
              min={0}
            />
          </div>
        </div>

        <div className="converter-icon">
          <TbArrowsDownUp />
        </div>
        <div className="converter-item">
          <div className="converter-coin">
            <div className="icon-container">
              <img src={usd} className="icon-image" />
            </div>
            <p>USD</p>
          </div>
          <div className="input-section">
            <input
              type="number"
              value={amount * selectedCoin?.market_data?.current_price?.usd}
              className="amount-input"
            />
          </div>
        </div>
        <div className="conversion-rate">
          <span>
            1 {selectedCoin?.symbol} ={" "}
            {millify(selectedCoin?.market_data.current_price.usd)} USD
          </span>
        </div>
      </div>
    </div>
  );
}

export default CoinConvert;
