import { useState } from "react";
import { List } from "./components/list/todoList";
import { SetList } from "./components/setList/setList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <SetList todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
