import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
import Settings from "./pages/Settings";

const App = () => {
  const { open, data } = useSelector((state) => state.modal);
  return (
    <>
      <Toaster position="top-right" />
      {open && <Modal name={open} data={data} />}
      <div className="max-w-xl mx-auto py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
