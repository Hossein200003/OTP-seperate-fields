import { generateCode } from "../random-number";

const SendCode = ({ codeObj, inputedCode }) => {
  const { code, setCode } = codeObj;
  const handleSendCode = () => {
    setCode(null);
    setTimeout(() => setCode(generateCode()), 800);
  };

  const handleCodeVarify = () => {
    code === +inputedCode.join("") ? alert("Correctx!") : alert("Not Correctx!");
  };
  //   console.log(inputedCode.join("").length);
  return (
    <div>
      <button onClick={handleSendCode}>Send code</button>
      <button
        onClick={handleCodeVarify}
        disabled={inputedCode.join("").length < 4}
      >
        Varify code
      </button>
    </div>
  );
};
export { SendCode };
