import { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const ToDo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [update, setUpdate] = useState(content);
  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateToDo = () => {
    const res = {
      id: id,
      content: update,
    };
    onUpdateTodo(res);
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid gold",
        padding: "5px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
            className="updt-input"
          />
        ) : (
          content
        )}
      </div>
      <div className="todo-icons">
        <IoIosRemoveCircle
          style={{ marginRight: "8px", color: "red" }}
          onClick={removeTodo}
        />
        {editable ? (
          <FaCheck onClick={updateToDo} />
        ) : (
          <FaEdit
            style={{ color: "blueviolet" }}
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ToDo;
