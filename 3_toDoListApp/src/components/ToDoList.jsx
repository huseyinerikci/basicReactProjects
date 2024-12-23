import ToDo from "./ToDo";

const ToDoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div style={{ width: "100%", marginTop: "50px" }}>
      {todos &&
        todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
};

export default ToDoList;
