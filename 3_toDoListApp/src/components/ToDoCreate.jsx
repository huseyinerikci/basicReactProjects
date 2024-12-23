import React, { useState } from "react";

const ToDoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const createTodo = () => {
    //inputa bir şey girilmemişse ekleme yapma
    if (!newTodo) return;
    //inputta değer varsa id oluştur ve içeriği contente ekle
    const res = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    onCreateTodo(res);
    setNewTodo("");
  };
  return (
    <div className="todo">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz.."
      />
      <button onClick={createTodo} className="todo-btn">
        Todo Oluştur
      </button>
    </div>
  );
};

export default ToDoCreate;
