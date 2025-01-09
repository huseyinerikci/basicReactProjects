import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
