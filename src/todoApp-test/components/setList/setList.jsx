import { useEffect, useRef, useState } from "react";

const SetList = ({ setTodos, todos }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState(1);
  const inpRef = useRef(null);
  
  const handleAddTodo = (e) => {
    (text.replaceAll(' ','').length&&setTodos([...todos, { title: text, done: false, id:id }]));
    setId((n) => n + 1);
    setText(x => '');
    inpRef.current.focus();
  };
  // useEffect(()=>console.log(todos),[todos,]);
  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inpRef}
        />
      </form>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export { SetList };
