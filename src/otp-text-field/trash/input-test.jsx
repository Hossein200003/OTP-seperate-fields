import { useEffect, useRef, useState } from "react";

const Input = () => {
  const [myVal, setMyVal] = useState("");
  const handleCursor = (e) => e.target.setSelectionRange(0, 0);
  return (
    <div>
      <input
        onClick={handleCursor}
      />
    </div>
  );
};
export default Input;
