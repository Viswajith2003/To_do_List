import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function Todo() {
  return (
    <div className="flex justify-center items-center text-center ">
      <div
        className="bg-[#10173c] text-white rounded-lg  overflow-hidden shadow-lg items-center justify-center text-center mt-20"
        style={{ width: "550px" }}
      >
        <h1 className="font-bold text-4xl mt-6 mb-6">TO DO APP</h1>
        <form action="submit">
          <input
            type="text"
            placeholder="Enter your todo"
            className="p-2 w-72 h-12 rounded "
          />
          <button
            type="button"
            className="ml-4 border-2 border-white w-20 h-12 font-bold rounded hover:bg-[#2a61a9] hover:text-lg"
          >
            ADD
          </button>
        </form>
        <div className="flex justify-center items-center mb-12">
          <ul>
            <li className="bg-[#1e4a83] w-96 mt-8 text-left p-2 rounded flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="w-5" />
                <p className="text-lg">Task 1</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegEdit className="w-6 h-6" />
                <MdDeleteOutline className="w-6 h-6" />
              </div>
            </li>
            <li className="bg-[#1e4a83] w-96 mt-8 text-left p-2 rounded flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="w-5" />
                <p className="text-lg">Task 1</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegEdit className="w-6 h-6" />
                <MdDeleteOutline className="w-6 h-6" />
              </div>
            </li>
            <li className="bg-[#1e4a83] w-96 mt-8 text-left p-2 rounded flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="w-5" />
                <p className="text-lg">Task 1</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegEdit className="w-6 h-6" />
                <MdDeleteOutline className="w-6 h-6" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
