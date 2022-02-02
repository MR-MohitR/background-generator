import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#ffff00");

  return (
    <div
      style={{ background: `linear-gradient(to right , ${color1}, ${color2})` }}
    >
      <div className="input">
        <h1>Background Generator</h1>
        <input
          type="color"
          value={color1}
          onChange={(event) => {
            setColor1(event.target.value);
          }}
        ></input>
        <input
          type="color"
          value={color2}
          onChange={(event) => {
            setColor2(event.target.value);
          }}
        ></input>
        <h3>Current CSS Background</h3>
        <label>
          Linear Gradient ( To Right, {color1} , {color2} ){" "}
        </label>
      </div>
    </div>
  );
};

export default App;
