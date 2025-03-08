import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default App;
