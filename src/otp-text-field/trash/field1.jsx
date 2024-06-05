import { useEffect, useRef, useState } from "react";

const Field = ({ focus, id }) => {
  const [value, setValue] = useState("");
  const { focusNumber, setFocusNumber } = focus;
  const inputRef = useRef(null);
  const valueRef = useRef(0);

  useEffect(() => {
    value.length > valueRef.current.length && id === 4 && setFocusNumber(1);
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    focusNumber === id && inputRef.current.focus();
  }, [focusNumber]);
  const handle_1digitVal = (e) => {
    e.target.value.length > value.length
      ? (setFocusNumber((x) => x + 1))
      : id !== 1 && setFocusNumber((x) => x - 1);
    console.log(`${e.target.value.length} and ${value.length}`);
    /^\d*$/.test(e.target.value) && setValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={handle_1digitVal}
          ref={inputRef}
          onClick={() => setFocusNumber(id)}
        />
      </form>
    </div>
  );
};
export { Field };
