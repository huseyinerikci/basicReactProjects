import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>("");

  const handleClick = () => {
    if (todo.trim().length == 0) {
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: todo,
    };
    dispatch(createTodo(payload));
    setTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz..."
      />
      <button onClick={handleClick} className="todo-btn">
        Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
