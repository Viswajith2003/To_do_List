import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({ id: null, list: "" });

  const handleAddOrUpdate = () => {
    if (edit.id) {
      setTodos(todos.map(data => data.id === edit.id ? { ...data, list: input } : data));
      setEdit({ id: null, list: "" });
    } else {
      setTodos([...todos, { list: input, id: Date.now() }]);
    }
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOrUpdate();
  };

  const setDelete = (id) => {
    setTodos(todos.filter((data) => data.id !== id));
  };

  const setEditTodo = (id, list) => {
    setEdit({ id, list });
    setInput(list);
  };

  return (
    <div className="flex justify-center items-center text-center ">
      <div
        className="bg-[#10173c] text-white rounded-lg overflow-hidden shadow-lg items-center justify-center text-center mt-20"
        style={{ width: "550px" }}
      >
        <h1 className="font-bold text-4xl mt-6 mb-6">TO DO APP</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Enter your todo"
            className="p-2 w-72 h-12 rounded text-black"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 border-2 border-white w-20 h-12 font-bold rounded hover:bg-[#2a61a9] hover:text-lg"
          >
            {edit.id ? "UPDATE" : "ADD"}
          </button>
        </form>
        <div className="flex justify-center items-center mb-12">
          <ul>
            {todos.map((data) => (
              <li key={data.id} className="bg-[#1e4a83] w-96 mt-8 text-left p-2 rounded flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="w-5" />
                  <p className="text-lg">{data.list}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegEdit className="w-6 h-6" onClick={() => setEditTodo(data.id, data.list)} />
                  <MdDeleteOutline className="w-6 h-6" onClick={() => setDelete(data.id)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

