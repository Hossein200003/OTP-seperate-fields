import { useEffect, useState } from "react";
import { Field } from "./components/field.jsx";

const App = () => {
  const [focusNumber, setFocusNumber] = useState(1);
  const [pastedValue, setPaste] = useState(["x"]);
  let fieldNumbers = [];
  for (let i = 1; i <= 4; i++) {
    fieldNumbers.push(i);
  }

  return (
    <div>
      {fieldNumbers.map((i) => {
        return (
          <Field
            focus={{ focusNumber, setFocusNumber }}
            paste={{ pastedValue, setPaste }}
            id={i}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default App;
