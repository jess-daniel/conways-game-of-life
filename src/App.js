import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import About from "./components/About";

const App = () => {
  const [size, setSize] = useState({ size: "medium", x: 25, y: 25 });
  const [value, setValue] = useState({
    speed: 100,
  });

  const handleChanges = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <p>Current Size: {size.size}</p>
      <div className="settings">
        <form className="form">
          <label>
            Speed:
            <input
              type="text"
              name="speed"
              value={value.speed}
              onChange={handleChanges}
            />
          </label>
        </form>
        <button
          className="btn"
          onClick={() => setSize({ size: "small", x: 10, y: 10 })}
        >
          <p>Small</p>
        </button>
        <button
          className="btn"
          onClick={() => setSize({ size: "medium", x: 25, y: 25 })}
        >
          <p>Medium</p>
        </button>
        <button
          className="btn"
          onClick={() => setSize({ size: "large", x: 50, y: 50 })}
        >
          <p>Large</p>
        </button>
      </div>
      <div className="content">
        <Grid rows={size.x} cols={size.y} speed={value.speed} />
        <About />
      </div>
    </div>
  );
};

export default App;
