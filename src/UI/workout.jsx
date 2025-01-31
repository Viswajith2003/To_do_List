import React from "react";
import { useState } from "react";

export default function Workout({}) {
  // const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  const [displayTxt,setDisplayTxt] = useState("");
  const SubmitClick = () => {
    setDisplayTxt(name);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
        className="text-black"
      />
      <h1>You Entered is: {displayTxt}</h1>
      <button onClick={SubmitClick}>Add</button>

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
