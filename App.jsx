import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((prevcount) => prevcount + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Add</button>
    </>
  );
};

export default App;
