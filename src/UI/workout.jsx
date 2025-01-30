import React from "react";
import { useState } from "react";

export default function Workout({ name, handleClick }) {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Your Name is: {name}</h1>
      <h1>{count}</h1>
      <button
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
      </button>
    </div>
  );
}

