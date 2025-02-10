import React, { useState } from "react";

const LoginForm = ({ handleSubmit, noEmail = false }) => {
  const [email, setEmail] = useState(noEmail ? true : "");
  const [password, setPassword] = useState("");

  const handle = (e) => {
    handleSubmit(e, email, password);
  };
  return (
    <form onSubmit={handle} className="max-w-xl mx-auto grid gap-y-4 py-4">
      {!noEmail && (
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
                className="block min-w-0  grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      )}

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
          Giriş yap
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
