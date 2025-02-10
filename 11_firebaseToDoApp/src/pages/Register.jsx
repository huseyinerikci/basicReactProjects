import { useState } from "react";
import { register } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);

    navigate("/login");
  };

  return (
    <div className="bg-indigo-400 w-full h-[420px]  max-h-screen  text-white  grid place-items-center mt-14 gap-y-4 py-9 rounded relative">
      <h1 className="text-3xl border p-4">ToDo Uygulaması</h1>
      <h5 className="text-md border p-2">Kullanıcı Kayıt</h5>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid gap-y-4 py-4"
      >
        <div>
          <label className="block text-sm/6 font-medium text-gray-700">
            E-posta
          </label>
          <div className="mt-1">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm/6 font-medium text-gray-700">
            Paralo
          </label>

          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            disabled={!email || !password}
            type="submit"
            className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Kayıt ol
          </button>
        </div>
      </form>
      <p className="absolute left-5 top-[83px]">
        <Link to="/" className="hover:text-sm transition">
          Back
        </Link>
      </p>
    </div>
  );
};

export default Register;
