import { FaCheck, FaRegEdit } from "react-icons/fa";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const Todo = () => {
  return (
    <div className="todo">
      <div>todo</div>
      <div className="todo-icons">
        <IoMdRemoveCircleOutline />
        <FaRegEdit />
      </div>
    </div>
  );
};

export default Todo;
