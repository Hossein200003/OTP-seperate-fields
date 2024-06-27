import { useEffect, useState } from "react";
import { Field } from "./components/Field.jsx";
import { SendCode } from "./components/SendCode.jsx";
import { generateCode } from "./random-number.js";

import style from "./components/style.module.scss";
import './style.scss';
const App = () => {
  const [focusNumber, setFocusNumber] = useState(1);
  const [count, setCount] = useState(0);
  const [pastedValue, setPaste] = useState([""]);
  const [code, setCode] = useState(null);
  const [inputedCode, setInputedCode] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (inputedCode.length === 4) {
        code === +inputedCode.join("")
          ? alert(`Correct!`)
          : alert(`Not Correct!`);
      }
    }, 750);
  }, [inputedCode]);

  console.log(inputedCode);

  return (
    <div>
      <p>This doesn't look nice but it works</p>
      <div className={style.fieldContainer}>
        <h2>Your code is: {code} </h2>
        {fieldNumbers.map((i) => {
          return (
            <Field
              focus={{ focusNumber, setFocusNumber }}
              paste={{ pastedValue, setPaste }}
              setAllInputs={{ inputedCode, setInputedCode }}
              countObj={{ setCount, count }}
              id={i}
              key={i}
            />
          );
        })}
        <SendCode codeObj={{ code, setCode }} inputedCode={inputedCode} />
      </div>
    </div>
  );
};

let fieldNumbers = [];
for (let i = 1; i <= 4; i++) {
  fieldNumbers.push(i);
}
export default App;
