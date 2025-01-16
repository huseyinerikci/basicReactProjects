import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Crud from "./pages/Crud";
import Counter from "./pages/Counter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
