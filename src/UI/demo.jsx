import React, { useState } from "react";

export default function Demo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('')
    console.log(todos);
  };

  return (
    <div className="flex justify-center item-center">
      <div>
        <div className="m-4">
          <input
            type="text"
            value={input}
            placeholder="Enter your Todo"
            className="p-2 border-2 border-black mr-3"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="p-2 border-2 border-black" onClick={addTodo}>
            ADD
          </button>
        </div>
        <div>
          <ul className="text-center">
            {todos.map((content) => (
              <li className="bg-yellow-400 w-52">{content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
