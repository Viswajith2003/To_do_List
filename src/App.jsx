import React from "react";
// import Todo from "./UI/todo";
import Workout from "./UI/workout";

export default function App() {
  const showMsg=()=>{
    alert("Count successfully worked")
  }
  return (
    <div>
      {/* <Todo /> */}
      <Workout name="viswajith" handleClick="showMsg"/>
    </div>
  );
}
