import React from "react";
import { useState } from "react";

export default function Workout({}) {
  // const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");
  const submitClick = () => {
    setDisplay(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        className="text-black"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <button onClick={submitClick}>Submit</button>
      <h1>You entered is :{display}</h1>

      {/* <button
        onClick={() => {
          setcount(count + 1);
          // handleClick();
        }}
      >
        Increment
      </button>
      <br />
      <button onClick={()=>{setcount(count-1)}}>
        Decrement
      </button>
      <br />
      <button onClick={()=>{setcount(0)}}>
        Reset
      </button> */}
    </div>
  );
}
