import React, { useState } from "react";
import { updateTodo } from "../../firebase";

const EditTodoModal = ({ close, data }) => {
  const [todo, setTodo] = useState(data.todo);
  const [done, setDone] = useState(data.done);

  const clickHandle = async () => {
    close();
    await updateTodo(data.id, {
      todo,
      done,
    });
  };
  return (
    <div className="flex flex-col gap-y-3 p-5 rounded relative ">
      <input
        type="text"
        className="flex items-center text-black w-full p-2 rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <label className="flex items-center gap-x-2 text-md">
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
          className="size-4"
        />
        Tamamlandı olarak işaretle
      </label>
      <button
        className="hover:bg-blue-600 transition border p-2 rounded-lg cursor-pointer"
        onClick={clickHandle}
      >
        Kaydet
      </button>
    </div>
  );
};

export default EditTodoModal;
