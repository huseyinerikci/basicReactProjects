import { FaCheck, FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface Props {
  todo: TodoType;
}

const Todo = ({ todo }: Props) => {
  const { id, content } = todo;
  const [edit, setEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };
  const handleUpdate = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEdit(false);
  };
  return (
    <div className="todo">
      {edit ? (
        <input
          type="text"
          className="edit-todo"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div className="todo-icons">
        <IoMdRemoveCircleOutline
          onClick={handleRemove}
          style={{ color: "red" }}
        />
        {edit ? (
          <FaCheck onClick={handleUpdate} style={{ color: "green" }} />
        ) : (
          <FaRegEdit onClick={() => setEdit(true)} style={{ color: "blue" }} />
        )}
      </div>
    </div>
  );
};

export default Todo;
