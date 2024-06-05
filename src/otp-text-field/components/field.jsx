import { useEffect, useRef, useState } from "react";

const Field = ({ focus, id, paste }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const valueRef = useRef("");
  const { focusNumber, setFocusNumber } = focus;
  const { pastedValue, setPaste } = paste;
  //
  useEffect(() => {
    pastedValue[0].length === 4 ? setValue(pastedValue[0][id - 1]) : null;
  }, [pastedValue]);
  //
  useEffect(() => {
    value.length > valueRef.current.length &&
      id !== 4 &&
      setFocusNumber((x) => x + 1);
    valueRef.current = value;
  }, [value]);
  //
  useEffect(() => {
    focusNumber === id && inputRef.current.focus();
    console.log(focusNumber);
  }, [focusNumber]);
  //
  const handle_1digitVal = (e) => {
    const default_reg = /^\d{0,1}$/;
    const patse_reg = /\d{4}/;
    const pastedValue = e.target.value.match(patse_reg);
    default_reg.test(e.target.value)
      ? setValue(e.target.value)
      : pastedValue && setPaste(pastedValue);
  };
  //
  // const handleInputCursor = (e) => e.target.setSelectionRange(0, 0);

  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            handle_1digitVal(e);
          }}
          ref={inputRef}
          onClick={(e) => {
            setFocusNumber(id);
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && value.length === 0) {
              e.preventDefault();
              setFocusNumber((x) => (id !== 1 ? x - 1 : 1));
            } else if (/\d/.test(e.key)) {
              value.length !== 0 &&
                setFocusNumber((x) => (x !== 4 ? x + 1 : 4));
            }
          }}
        />
      </form>
    </div>
  );
};

export { Field };
