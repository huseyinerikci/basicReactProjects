import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  logout,
  emailVerification,
  addTodo,
  deleteTodo,
} from "../firebase/index";
import { logout as logoutHandle } from "../store/authSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { modal } from "../utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
dayjs.extend(relativeTime);
dayjs.locale("tr");

const Home = () => {
  const [todo, setTodo] = useState("");
  const [done, setDone] = useState(true);

  const { user } = useSelector((state) => state.auth);
  const { todos } = useSelector((state) => state.todos);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const [animationParent] = useAutoAnimate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTodo({
      todo,
      uid: user.uid,
      done,
    });
    setTodo("");
  };

  const handleLogout = async () => {
    await logout();
    dispacth(logoutHandle);
    navigate("/", { replace: true });
  };
  const handleVerification = async () => {
    await emailVerification();
  };
  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  if (user) {
    return (
      <div className="bg-indigo-400 w-full min-w-[800px]  max-h-screen  text-white grid place-items-center -ml-18  mt-10 gap-y-5 p-5 rounded ">
        <h1 className="flex gap-x-4 items-center">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="logo"
              className="size-7 rounded-full"
            ></img>
          )}
          Hoşgeldin, {user.displayName} ({user.email})
          <Link
            to="/settings"
            className="h-8 rounded px-4 flex items-center text-sm text-white bg-indigo-700"
          >
            Ayarlar
          </Link>
          <button
            onClick={handleLogout}
            className="h-8 rounded px-4 text-nowrap  text-sm text-white bg-indigo-700 cursor-pointer"
          >
            Çıkış yap
          </button>
          {!user.emailVerification && (
            <button
              onClick={handleVerification}
              className="h-8 rounded px-4 text-nowrap text-sm text-white bg-indigo-700 cursor-pointer"
            >
              E-posta Onayla
            </button>
          )}
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-x-4 mt-4">
          <input
            type="text"
            placeholder="Todo yaz"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex items-center w-full rounded-md text-gray-600 bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
          />
          <label className="flex items-center gap-x-2 text-sm">
            <input
              className="size-7 cursor-pointer"
              type="checkbox"
              checked={done}
              onChange={(e) => setDone(e.target.checked)}
            />
            Tamamlandı olarak işaretle
          </label>
          <button
            type="submit"
            disabled={!todo || todo.trim() === ""}
            className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ekle
          </button>
        </form>

        <ul ref={animationParent} className="mt-4 flex flex-col gap-y-2">
          {todos.map((item) => (
            <li
              key={item.id}
              className="p-4 flex gap-x-2 w-[600px] h-[70px] justify-between items-center rounded bg-indigo-50 text-sm text-indigo-700"
            >
              <span className={`${item.done ? "line-through" : ""} flex-1`}>
                {item.todo}
              </span>
              {item?.createdAt && (
                <span className="flex-1">
                  {dayjs.unix(item.createdAt.seconds).fromNow()}
                </span>
              )}

              <div className="flex gap-x-2">
                <button
                  onClick={() => modal("edit-todo-modal", item)}
                  className="h-7 cursor-pointer rounded px-3 text-xs bg-indigo-700 text-white"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="h-7 cursor-pointer rounded px-3 text-xs bg-indigo-700 text-white"
                >
                  Sil
                </button>
              </div>
            </li>
          ))}

          {todos.length === 0 && (
            <li className="p-4 flex justify-between items-center rounded bg-orange-50 text-sm text-orange-700">
              Şuan todo bulunmuyor.
            </li>
          )}
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-indigo-400 h-[420px]  max-h-screen  text-white  grid place-items-center mt-14 gap-y-3 py-[24px] rounded">
      <h1 className="text-3xl border p-4">ToDo Uygulaması</h1>
      <p>
        Merhaba, Yeni bir kullanıcı oluşturmak için "Kayıt ol" butonuna
        tıklayınız{" "}
      </p>
      <Link
        to="/register"
        className="hover:bg-green-700 transition border p-2 rounded-lg cursor-pointer"
      >
        Kayıt ol
      </Link>
      <p>Eğer hesabınız var ise lütfen "Giriş yap" butonuna tıklayınız </p>
      <Link
        to="/login"
        className="hover:bg-blue-600 transition border p-2 rounded-lg cursor-pointer"
      >
        Giriş yap
      </Link>
    </div>
  );
};

export default Home;
