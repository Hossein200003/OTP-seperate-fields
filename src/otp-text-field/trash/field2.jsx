import { useEffect, useRef, useState } from "react";

const Field = ({ focus, id }) => {
  const [value, setValue] = useState("");
  const { focusNumber, setFocusNumber } = focus;
  const inputRef = useRef(null);
  const valueRef = useRef(0);

  useEffect(() => {
    value.length >= valueRef.current.length &&
    !(value.length == valueRef.current.length && id == 1)
      ? setFocusNumber((x) => (x !== 4 ? x + 1 : 4))
      : id !== 1 && setFocusNumber((x) => x - 1);
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    focusNumber === id && inputRef.current.focus();
  }, [focusNumber]);
  const handle_1digitVal = (e) => {
    /^\d{0,1}$/.test(e.target.value[0]) && setValue(e.target.value[0]);
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
