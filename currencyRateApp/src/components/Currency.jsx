import axios from "axios";
import { useEffect, useState } from "react";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(null);

  const baseURL = "https://api.freecurrencyapi.com/v1/latest";
  const apiKey = "fca_live_4dgdMV9uhDwKeLERPP4dzaOCjpkCCdrDhnAcRXRa";

  const handleExchange = async () => {
    // Döviz kuru API'sine istek gönderme
    const res = await axios.get(
      `${baseURL}?apikey=${apiKey}&base_currency=${fromCurrency}`
    );
    // Döviz kuru üzerinden sonuç hesaplama
    const currencyResult = res?.data.data[toCurrency] * amount;
    setResult(currencyResult.toFixed(2));
  };
  useEffect(() => {
    handleExchange();
  }, []);
  return (
    <div className="currency-container">
      <div className="title">
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div className="currency">
        <input
          value={amount || " "}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="currency-amount"
          min="0" //negatif giriş engelle
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <PiArrowFatLinesRightFill style={{ fontSize: "25px" }} />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency"
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          value={result || " "}
          readOnly
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={handleExchange} className="exchange-btn">
          Çevir
        </button>
      </div>
    </div>
  );
};

export default Currency;
