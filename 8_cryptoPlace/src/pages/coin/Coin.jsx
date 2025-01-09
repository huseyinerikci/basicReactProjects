import { Link } from "react-router-dom";
import CoinChart from "../../components/coinChart/CoinChart";
import CoinConvert from "../../components/coinConvert/CoinConvert";
import "./Coin.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Coin() {
  return (
    <div>
      <Link to={-1} className="arrow">
        <BsArrowLeftCircleFill />
      </Link>

      <div className="coin-container">
        <CoinChart />
        <CoinConvert />
      </div>
    </div>
  );
}

export default Coin;
