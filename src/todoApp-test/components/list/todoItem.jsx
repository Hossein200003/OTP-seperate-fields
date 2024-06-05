const Item = ({ data, setTodos, todos }) => {
  const handleDelete = (e) => {
    console.log(e.button);
    setTodos(todos.filter((t) => t.id != data.id));
  };
  const handleMouse = (e) => {
    console.log(e.button);
  };
  return (
    <div
      style={{ border: "2px solid Red" }}
      onClick={handleDelete}
      onContextMenu={handleMouse}
    >
      todo:
      <h1>title:{data.title}</h1>
      <h2>done:{data.done ? "Yes" : "No"}</h2>
    </div>
  );
};
export { Item };
