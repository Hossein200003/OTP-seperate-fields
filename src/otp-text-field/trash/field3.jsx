import { useEffect, useRef, useState } from "react";

const Field = ({ focus, id, paste }) => {
  const [value, setValue] = useState("");
  const { focusNumber, setFocusNumber } = focus;
  const { pastedValue, setPaste } = paste;
  const inputRef = useRef(null);
  const valueRef = useRef(0);
  // console.log(pastedValue[0].length);
  useEffect(() => {
    pastedValue[0].length === 4 ? setValue(pastedValue[0][id - 1]) : null;
  }, [pastedValue]);
  useEffect(() => {
    value.length >= valueRef.current.length &&
    !(value.length == valueRef.current.length && id == 1)
      ? setFocusNumber((x) => (x !== 4 ? x + 1 : 4))
      : id !== 1 && setFocusNumber((x) => (id !== 1 ? x - 1 : 1));

    console.log(id);
    valueRef.current = value;
  }, [value]);
  useEffect(() => {
    focusNumber === id && inputRef.current.focus();
  }, [focusNumber]);
  const handle_1digitVal = (e) => {
    const reg = /^\d{0,1}$/;
    const pastedValue = e.target.value.match(/\d{4}/);
    reg.test(e.target.value)
      ? setValue(e.target.value)
      : pastedValue && setPaste(pastedValue);
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
          onKeyDown={(e) => {
            e.key === "Backspace" &&
              value.length === 0 &&
              setFocusNumber((x) => x - 1);
          }}
        />
      </form>
    </div>
  );
};
export { Field };
