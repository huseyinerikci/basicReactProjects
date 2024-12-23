import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setToDo] = useState([]);
  //add function
  const createToDo = (newTodo) => {
    setToDo([...todos, newTodo]);
  };
  //delete function
  const removeToDo = (todoId) => {
    setToDo(todos.filter((todo) => todo.id !== todoId));
  };
  //update function
  const updateToDo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setToDo(updatedTodos);
  };
  return (
    <div className="App">
      <div className="main">
        <ToDoCreate onCreateTodo={createToDo} />
        <ToDoList
          todos={todos}
          onRemoveTodo={removeToDo}
          onUpdateTodo={updateToDo}
        />
      </div>
    </div>
  );
}

export default App;
