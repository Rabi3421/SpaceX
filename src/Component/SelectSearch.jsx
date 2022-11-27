import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SelectSearch() {
  return (
    <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
      <form action="" className="w-full max-w-md">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <select className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2">
            
            <option value="">Search by Status</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SelectSearch;
