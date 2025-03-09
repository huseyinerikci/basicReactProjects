import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="todo-app">
      <h1 className="title">To Do App</h1>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default App;
