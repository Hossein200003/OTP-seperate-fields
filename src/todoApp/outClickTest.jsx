import { useEffect, useRef, useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);

  const handleClick = () => {
    setIsOpen(true);
    console.log("IN");
    
  };

  const handleOutClick = (e) => {
    
    // console.log(ref.current);
    // console.log(e.target);
    if (!ref.current.contains(e.target)) console.log(`OUT`);
  };

  

  useEffect((e) => {
    console.log(isOpen)
    if (isOpen) {
      document.addEventListener("click", handleOutClick);
      return () => document.removeEventListener("click", handleOutClick);
    }
  }, [isOpen]);

  return (
    <div>
      <h1>app</h1>
      <button ref={ref} onClick={handleClick}>
        INSIDE click
      </button>
      <button onClick={null}>console</button>
      <div
        style={{ backgroundColor: "orange", width: "200px", height: "200px" }}
        // onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};
export default App;
