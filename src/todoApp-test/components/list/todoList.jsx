import { Item } from "./todoItem";

const List = ({ todos,setTodos }) => {
  // console.log((todos.length))
  const items =
    todos.length !== 0 ? todos.map((d) => {return <Item data={d} key={d.id} setTodos={setTodos} todos={todos} /> }) : null;
  return (
    <div>
      todo list:
      {items}
    </div>
  );
};
export { List };
