import React, { useState } from "react";
import { update, auth, resetPassword } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../utils";

const UpdateProfile = () => {
  const { user } = useSelector((store) => store.auth);

  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    setUserData();
  };

  const handleReset = async (e) => {
    e.preventDefault();
    const res = await resetPassword(password);

    if (res) {
      console.log(setPassword());
    }
  };

  return (
    <div className="grid gap-y-10">
      <form onSubmit={handleSubmit} className="grid gap-y-4">
        <h1 className="text-xl font-bold mb-4">Profili Güncelle</h1>
        <div>
          <label className="block text-sm/6 font-medium text-white">
            Ad Soyad
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="text"
                placeholder="Ör: John Doe"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm/6 font-medium text-white">
            Fotoğraf
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="text"
                placeholder="Ör: John Doe"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            disabled={!displayName && !avatar}
            type="submit"
            className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Güncelle
          </button>
        </div>
      </form>

      <form onSubmit={handleReset} className="grid gap-y-4">
        <h1 className="text-xl font-bold mb-4">Parolayı Güncelle</h1>
        <div>
          <label className="block text-sm/6 font-medium text-white">
            Parola
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            disabled={!password}
            type="button"
            onClick={handleReset}
            className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Şİfreyi Güncelle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
