import React from "react";
// import Todo from "./UI/todo";
import Workout from "./UI/workout";

export default function App() {
  const showMsg = () => {
    alert("Count successfully worked");
  };
  return (
    <div className="bg-black text-white h-screen">
      {/* <Todo /> */}
      <Workout name="viswajith" handleClick={showMsg} />
    </div>
  );
}
