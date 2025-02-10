import { useState } from "react";
import { login } from "../firebase";

import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/modals/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <div className="bg-indigo-400 w-full h-[420px]  max-h-screen  text-white  grid place-items-center mt-14 gap-y-4 py-9 rounded relative">
      <h1 className="text-3xl border p-4">ToDo Uygulaması</h1>
      <h5 className="text-md border p-2">Kullanıcı Giriş</h5>
      <LoginForm handleSubmit={handleSubmit} />
      <p className="absolute left-5 top-[83px]">
        <Link to="/" className="hover:text-sm transition cursor-pointer">
          Back
        </Link>
      </p>
    </div>
  );
};

export default Login;
